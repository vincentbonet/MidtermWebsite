const { getAll, search, get, add, login, update, remove } = require('../models/users');
const router = require('express').Router();


/** 
 * @typedef {import('../../client/src/model/users').User} User 
 * @typedef {import('../../client/src/model/transporttypes').DataEnvelope<User> } UserDataEnvelope
 * @typedef {import('../../client/src/model/transporttypes').DataListEnvelope<User> } UserDataListEnvelope
 * */

router
    .get('/', (req, res, next) => {
        getAll()
        .then(all => {
            /** @type { UserDataListEnvelope } */
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
        search(search)
        .then(result => {
            /** @type { UserDataListEnvelope } */
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
            /** @type { UserDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .post('/', (req, res, next) => {
        const user = req.body;
        add(user)
        .then(result => {
            /** @type { UserDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .post('/login', (req, res, next) => {
        const { email, password } = req.body;
        login(email, password)
        .then(result => {
            /** @type { UserDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .patch('/:id', (req, res, next) => {
        const user = req.body;
        user.id = req.params.id;
        update(user)
        .then(result => {
            /** @type { UserDataEnvelope } */
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
            /** @type { UserDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })

module.exports = router;