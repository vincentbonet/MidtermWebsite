import { Router } from 'express';
import { getAll, search as _search, get, add, update, remove } from '../models/exercises';
const router = Router();

/**
 * @typedef {import('../../client/src/model/exercises').Exercise} Exercise
 * @typedef {import('../../client/src/model/transporttypes').DataEnvelope<Exercise>} ExerciseDataEnvelope
 * @typedef {import('../../client/src/model/transporttypes').DataListEnvelope<Exercise>} ExerciseDataListEnvelope
 */

router
    .get('/', (req, res, next) => {
        getAll()
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
        _search(search)
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
        get(+id)
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
        add(exercise)
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
        update(exercise)
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
        remove(+id)
        .then(result => {
            /** @type { ExerciseDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    });

export default router;
