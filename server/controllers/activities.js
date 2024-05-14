const router = require('express').Router();
const { getAll, search, get, add, update, remove, } = require('../models/activities');


/**
 * @typedef {import('../../client/src/model/activities').Activity} Activity
 * @typedef {import('../../client/src/model/transporttypes').DataEnvelope<Activity>} ActivityDataEnvelope
 * @typedef {import('../../client/src/model/transporttypes').DataListEnvelope<Activity>} ActivityDataListEnvelope
 */

router
    .get('/', (req, res, next) => {
        getAll()
        .then(all => {
            /** @type { ActivityDataListEnvelope } */
            const response = {
                data: all,
                totalCount: all.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
        
    })
    .get('/search', (req, res, next) => {
        const searchQuery = req.query.q;
        if(typeof searchQuery !== 'string' ) throw new Error('search is required');
        search(searchQuery)
        .then(result => {
            /** @type { ActivityDataListEnvelope } */
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
            /** @type { ActivityDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .post('/', (req, res, next) => {
        const activity = req.body;
        add(activity)
        .then(result => {
            /** @type { ActivityDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
    .patch('/:id', (req, res, next) => {
        const activity = req.body;
        activity.id = req.params.id;
        update(activity)
        .then(result => {
            /** @type { ActivityDataEnvelope } */
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
            /** @type { ActivityDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    });

module.exports = router;