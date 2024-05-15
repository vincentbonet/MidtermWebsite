const { getAll, get, search, add, login, update, remove } = require('../models/users');
const router = require('express').Router();

/**
 * @typedef {import('../../client/src/model/users').User} User
 * @typedef {import('../../client/src/model/transporttypes').DataEnvelope<User>} UserDataEnvelope
 * @typedef {import('../../client/src/model/transporttypes').DataListEnvelope<User>} UserDataListEnvelope
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
        const searchTerm = req.query.q;
        if (typeof searchTerm !== 'string') throw new Error('Search term is required');
        const result = await search(searchTerm);
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
        const user = req.body;
        const result = await add(user);
        const response = {
            data: result,
            isSuccess: true,
        };
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const result = await login(email, password);
        const response = {
            data: result,
            isSuccess: true,
        };
        res.json(response);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const user = req.body;
        user.id = req.params.id;
        const result = await update(user);
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
