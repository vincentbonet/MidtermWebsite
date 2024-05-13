const express = require('express');
const exercises = require('../models/exercises');
const router = express.Router();

/**
 * @typedef {import('../client/src/model/exercises').Exercise} Exercise
 * @typedef {import('../client/src/model/transportTypes').DataEnvelope<Exercise>} ExerciseDataEnvelope
 * @typedef {import('../client/src/model/transportTypes').DataListEnvelope<Exercise>} ExerciseDataListEnvelope
 */

router
    .get('/', (req, res, next) => {
        exercises.getAll()
        .then(all => {
            /** @type { ExerciseDataListEnvelope } */
            const response = {
                data: all,
                totalCount: all.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
        
    })
    .get('/search', (req, res, next) => {
        const search = req.query.q;
        if(typeof search !== 'string' ) throw new Error('search is required');
        exercises.search(search)
        .then(result => {
            /** @type { ExerciseDataListEnvelope } */
            const response = {
                data: result,
                totalCount: result.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        exercises.get(+id)
        .then(result => {
            /** @type { ExerciseDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .post('/', (req, res, next) => {
        const exercise = req.body;
        exercises.add(exercise)
        .then(result => {
            /** @type { ExerciseDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .patch('/:id', (req, res, next) => {
        const exercise = req.body;
        exercise.id = req.params.id;
        exercises.update(exercise)
        .then(result => {
            /** @type { ExerciseDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .delete('/:id', (req, res, next) => {
        const id = req.params.id;
        exercises.remove(+id)
        .then(result => {
            /** @type { ExerciseDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    });

module.exports = router;
