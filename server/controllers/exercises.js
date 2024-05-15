const router = require('express').Router();
const { getAll, get, add, update, remove, search } = require('../models/exercises');

/**
 * @typedef {import('../../client/src/model/exercises').Exercise} Exercise
 * @typedef {import('../../client/src/model/transporttypes').DataEnvelope<Exercise>} ExerciseDataEnvelope
 * @typedef {import('../../client/src/model/transporttypes').DataListEnvelope<Exercise>} ExerciseDataListEnvelope
 */

router.get('/', async (req, res, next) => {
    try {
        const all = await getAll();
        const response = {
            data: all,
            totalCount: all.length,
            isSuccess: true,
        };
        res.json(response);
    } catch (error) {
        next(error);
    }
});

router.get('/search', async (req, res, next) => {
    try {
        const searchQuery = req.query.q;
        if (typeof searchQuery !== 'string') throw new Error('Search query is required');
        const result = await search(searchQuery);
        const response = {
            data: result,
            totalCount: result.length,
            isSuccess: true,
        };
        res.json(response);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await get(+id);
        const response = {
            data: result,
            isSuccess: true,
        };
        res.json(response);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const exercise = req.body;
        const result = await add(exercise);
        const response = {
            data: result,
            isSuccess: true,
        };
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const exercise = req.body;
        exercise.id = req.params.id;
        const result = await update(exercise);
        const response = {
            data: result,
            isSuccess: true,
        };
        res.json(response);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await remove(+id);
        const response = {
            data: result,
            isSuccess: true,
        };
        res.json(response);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
