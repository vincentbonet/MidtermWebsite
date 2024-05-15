const fs = require('fs/promises');
const path = require('path');
const activityPath = path.join(__dirname, '../data/activities.json');

/** @type { Promise< { items: Activity[] } > } */
const promiseData = fs 
    .access(activityPath, fs.constants.F_OK)
    .then(() => fs.readFile(activityPath, 'utf-8'))
    .then(data => JSON.parse(data))

async function save() {
    const data = await promiseData;
    return fs.writeFile(activityPath, JSON.stringify(data, null, 2));
}

/**
 * @typedef {import('../../client/src/model/activities').Activity} Activity
 * */

/**
 * @returns {Promise<Activity[]>}
 * */
async function getAll() {
    const data = await promiseData;
    return data.items.map(x=> ({...x}));
}

/**
 * @param {number} id
 * @returns {Promise<Activity>}
 * */
async function get(id) {
    const data = await promiseData;
    return data.items.find(item => item.id === id);
}

/**
 * 
 * @param {string} q 
 * @returns {Promise<Activity[]>} 
 */

async function search(q) {
    return (await getAll()).filter(item =>
        new RegExp(q, 'i').test(item.date)
    )
}

async function add(activity) {
    const data = await promiseData;
    activity.id = data.items.length + 1;
    data.items.push(activity);
    await save();
    return activity;
}

/**
 * * @param {Activity} activity
 * @returns {Promise<Activity>}
 * */
async function update(activity) {
    const data = await promiseData;
    const index = data.items.findIndex(item => item.id == activity.id);
    if (index >= 0) {
        data.items[index] = {
            ...data.items[index],
            ...activity
        };
        await save()
        return activity;
    }
    return null;
}

/**
 * * @param {number} id
 * @returns {Promise<Activity | null>}
 * */
async function remove(id) {
    const data = await promiseData;
    const index = data.items.findIndex(item => item.id == id);
    if (index >= 0) {
        const deleted = data.items.splice(index, 1);
        await save()
        return deleted[0];
    }
}

module.exports = { getAll, get, search, add, update, remove };