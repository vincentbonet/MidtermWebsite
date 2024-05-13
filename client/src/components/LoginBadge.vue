<template>
    <div class="flex items-center space-x-2" v-if="session.user">
        <div class="text-sm font-medium text-gray-900">{{ session.user.firstName }} {{ session.user.lastName }}</div>
        <div class="text-sm text-gray-500">{{ session.user.email }}</div>
        <button @click="doLogout" class="px-2 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700">Not You?</button>
    </div>
    <div v-else>
        <button class="px-2 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">Sign up</button>
        <div class="relative inline-block text-left">
            <div>
                <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Login
                </button>
            </div>
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a v-for="user in users" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" @click="doLogin(user)">{{ user.firstName }} {{ user.lastName }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getUsers, type User } from '../model/users';
import { refSession, useLogin } from '../viewModel/session';
import { ref } from 'vue';

const session = refSession();

const users = ref([] as User[])
getUsers()
    .then((data) => users.value = data.slice(0, 5))
    .catch((error) => console.error(error));

const { login, logout } = useLogin();

function doLogin(user: User) {
    login(user);
}

function doLogout() {
    logout();
}
</script>

<style scoped>
</style>