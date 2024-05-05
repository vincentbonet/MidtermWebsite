const fs = require('fs/promises');
const path = require('path');

class User {
    constructor() {
        this.filePath = path.join(__dirname, '../data/users.json');
    }
//Get All Users
    async getAllUsers() {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading users data:', error);
            return [];
        }
    }
//Get User by ID
    async getUserById(id) {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            const users = JSON.parse(data);
            return users.find(user => user.id === id);
        } catch (error) {
            console.error('Error reading users data:', error);
            return null;
        }
    }
//Add User
    async addUser(user) {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            const users = JSON.parse(data);
            users.push(user);
            await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
            return user;
        } catch (error) {
            console.error('Error adding user:', error);
            return null;
        }
    }
//Update User
    async updateUser(id, updatedUser) {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            let users = JSON.parse(data);
            const index = users.findIndex(user => user.id === id);
            if (index !== -1) {
                users[index] = { ...users[index], ...updatedUser };
                await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
                return users[index];
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            return null;
        }
    }
//Delete User
    async deleteUser(id) {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            let users = JSON.parse(data);
            const index = users.findIndex(user => user.id === id);
            if (index !== -1) {
                const deletedUser = users.splice(index, 1)[0];
                await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
                return deletedUser;
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            return null;
        }
    }
}
//Export User
module.exports = User;