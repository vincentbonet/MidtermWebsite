const fs = require('fs/promises');
const path = require('path');
const exercisePath = path.join(__dirname, '..', 'data', 'exercises.json');

/** @type {Promise<{ items: Exercise[] }>} */
const promiseData = fs
    .access(exercisePath, fs.constants.F_OK)
    .then(() => fs.readFile(exercisePath, 'utf-8'))
    .then(data => JSON.parse(data))

async function save() {
    const data = await promiseData;
    return fs.writeFile(exercisePath, JSON.stringify(data, null, 2));
}

/**
 * @typedef {import('../../client/src/model/exercises').Exercise} Exercise
 */

/**
 * @returns {Promise<Exercise[]>}
 */
async function getAll() {
    const data = await promiseData;
    return data.items.map(x => ({ ...x }));
}

/**
 * @param {number} id
 * @returns {Promise<Exercise>}
 */
async function get(id) {
    const data = await promiseData;
    return data.items.find(item => item.id === id);
}

/**
 * @param {Exercise} exercise
 * @returns {Promise<Exercise>}
 */
async function add(exercise) {
    const data = await promiseData;
    exercise.id = data.items.length + 1;
    data.items.push(exercise);
    await save();
    return exercise;
}

/**
 * @param {Exercise} exercise
 * @returns {Promise<Exercise>}
 */
async function update(exercise) {
    const data = await promiseData;
    const index = data.items.findIndex(item => item.id == exercise.id);
    if (index >= 0) {
        data.items[index] = {
            ...data.items[index],
            ...exercise
        };
        await save()
        return exercise;
    }
    return null;
}

/**
 * @param {number} id
 * @returns {Promise<Exercise | null>}
 */
async function remove(id) {
    const data = await promiseData;
    const index = data.items.findIndex(item => item.id == id);
    if (index >= 0) {
        const deleted = data.items.splice(index, 1);
        await save()
        return deleted[0];
    }
    return null;
}

module.exports = {
    getAll, get, add, update, remove
}
