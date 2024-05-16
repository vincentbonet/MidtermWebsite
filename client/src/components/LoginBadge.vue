<template>
  <div class="flex items-center space-x-4">
    <div v-if="session.user" class="flex items-center space-x-2">
      <div class="text-sm font-medium text-gray-200">{{ session.user.firstName }} {{ session.user.lastName }}</div>
      <div v-if="session.user.image" class="w-8 h-8">
        <img :src="session.user.image" :alt="session.user.firstName + ' ' + session.user.lastName + ' avatar'" class="rounded-full">
      </div>
      <div class="text-sm text-gray-400">{{ session.user.email }}</div>
      <button @click="doLogout" class="px-2 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700">Not You?</button>
    </div>
    <div v-else>
      <router-link to="/signup" class="px-4 py-2 text-sm font-medium text-white bg-transparent border border-gray-400 rounded hover:bg-gray-700 hover:border-gray-500" style="min-width: 100px;">Sign up</router-link>
      <div class="relative inline-block dropdown-container" @click="toggleDropdown">
        <button
          type="button"
          class="inline-flex justify-center w-24 h-10 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Login
        </button>
        <div v-show="dropdownOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900" role="menuitem" @click="doLogin(robertUser)">Login as Robert</a>
            <router-link to="/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900" role="menuitem">Log in as other User</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { type User } from '../model/users';
import { refSession, useLogin } from '../viewModel/session';
import profile1 from '../assets/profile1.jpg';

const session = refSession();
const dropdownOpen = ref(false);

const { login, logout } = useLogin();

const robertUser: User = {
  id: 0,
  firstName: 'Robert',
  lastName: 'Bonet',
  email: 'robert@example.com',
  image: profile1,
  username: 'robertbonet',
  password: '',
  age: 21,
  phone: '1234567890',
  birthDate: '2000-01-01',
  role: 'admin',
  admin: true,
};

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
/* Add any necessary scoped styles here */
</style>
