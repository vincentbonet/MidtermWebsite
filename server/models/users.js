const fs = require('fs/promises');
const userPath = __dirname + '/../data/users.json'

/** @type { Promise< { items: import('../../client/src/model/users').User[] } > } */
const promiseData = fs 
    .access(userPath, fs.constants.F_OK)
    .then(() => fs.readFile(userPath, 'utf-8'))
    .then(data => JSON.parse(data))


async function save() {
    const data = await promiseData;
    return fs.writeFile(userPath, JSON.stringify(data, null, 2));
}
/**
 * @typedef {import('../../client/src/model/users').User} User
 * */

/**
 * @returns {Promise<User[]>}
 * */

async function getAll() {
    const data = await promiseData;
    return data.items.map(x=> ({
        ...x, password: undefined, phone: undefined
    }))
}

/**
 * @param {number} id
 * @returns {Promise<User>}
 * */


async function get(id) {
    const data = await promiseData;
    return data.items.find(item => item.id === id);
}

/**
 * 
 * @param {string} q
 * @returns {Promise<User[]>}
 */

async function search(q) {
    return (await getAll()).filter(item =>
        new RegExp(q, 'i').test(item.firstName) ||
        new RegExp(q, 'i').test(item.lastName) ||
        new RegExp(q, 'i').test(item.email)
    )
}

/**
 * 
 * @param {User} user 
 * @returns {Promise<User>}
 */

async function add(user) {
    const data = await promiseData;
    user.id = data.items.length + 1;
    data.items.push(user);
    await save();
    return user;
}
/**
 * @param {User} user
 * @returns {Promise<User>}
 * */
async function update(user) {
    const data = await promiseData;
    const index = data.items.findIndex(item => item.id == user.id);
    if (index >= 0) {
        data.items[index] = {
            ...data.items[index],
            ...user
        };
        await save()
        return user;
    }
    return null;
}
/**
 * @param {number} id
 * @returns {Promise<User | null>}
 * */
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

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 * */
async function login(email, password) {
    const data = await promiseData;
    const user = data.items.find(item => item.email === email && item.password === password);
    if (!user) {
        throw new Error("Invalid email or password");
    }
    return user;
}

module.exports = {
    getAll, get, search, add, update, remove, login
}