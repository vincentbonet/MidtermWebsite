const router = require('express').Router();
const { getAll, search, get, add, update, remove } = require('../models/activities');

/**
 * @typedef {import('../../client/src/model/activities').Activity} Activity
 * @typedef {import('../../client/src/model/transporttypes').DataEnvelope<Activity>} ActivityDataEnvelope
 * @typedef {import('../../client/src/model/transporttypes').DataListEnvelope<Activity>} ActivityDataListEnvelope
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
        const activity = req.body;
        const result = await add(activity);
        const response = {
            data: result,
            isSuccess: true,
        };
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const activity = req.body;
        activity.id = req.params.id;
        const result = await update(activity);
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
