<template>
  <div class="flex items-center space-x-4">
    <div v-if="session.user" class="flex items-center space-x-2">
      <div class="text-sm font-medium text-gray-200">{{ session.user.firstName }} {{ session.user.lastName }}</div>
      <div class="text-sm text-gray-400">{{ session.user.email }}</div>
      <button @click="doLogout" class="px-2 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700">Not You?</button>
    </div>
    <div v-else>
      <RouterLink to="/signup" class="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-400 rounded hover:bg-gray-700 hover:border-gray-500">Sign up</RouterLink>
      <div class="relative inline-block text-left">
        <button
          type="button"
          class="inline-flex justify-center w-24 h-10 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          @click="toggleDropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Login
        </button>
        <div v-show="dropdownOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a v-for="user in users" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900" role="menuitem" @click="doLogin(user)">{{ user.firstName }} {{ user.lastName }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getUsers, type User } from '../model/users';
import { refSession, useLogin } from '../viewModel/session';

const session = refSession();
const users = ref([] as User[]);
const dropdownOpen = ref(false);

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

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}
</script>

<style scoped>
</style>
