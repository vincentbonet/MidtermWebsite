const express = require('express');
const activities = require('../models/activities');
const router = express.Router();

/**
 * @typedef {import('../client/src/model/activities').Activity} Activity
 * @typedef {import('../client/src/model/transportTypes').DataEnvelope<Activity>} ActivityDataEnvelope
 * @typedef {import('../client/src/model/transportTypes').DataListEnvelope<Activity>} ActivityDataListEnvelope
 */

router
    .get('/', (req, res, next) => {
        activities.getAll()
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
        const search = req.query.q;
        if(typeof search !== 'string' ) throw new Error('search is required');
        activities.search(search)
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
        activities.get(+id)
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
        activities.add(activity)
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
        activities.update(activity)
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
        activities.remove(+id)
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
