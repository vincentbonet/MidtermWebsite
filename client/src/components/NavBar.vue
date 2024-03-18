<template>
  <nav class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center">
            <img class="h-8 w-auto mr-2" src="../assets/favicon.ico" alt="Logo for the Website">
            <span class="text-white text-lg font-semibold">Building Better</span>
          </a>
        </div>
        <div class="hidden sm:block">
          <div class="flex space-x-5">
            <a class="nav-link" href="/noti">My Activity</a>
            <a class="nav-link" href="/statistics">Statistics</a>
            <a class="nav-link" href="/friendsactivity">Friends Activity</a>
            <a class="nav-link" href="/peoplesearch">People Search</a>
            <a class="nav-link" href="/noti">Admin</a>
          </div>
        </div>
        <div class="flex items-center">
          <a href="/signup" class="nav-link">Sign Up</a>
          <div class="relative" @mouseover="showDropdown = true" @mouseleave="showDropdown = false" v-if="!isLoggedInAsRobert">
            <a class="nav-link" @click="toggleDropdown">{{ loginText }}</a>
            <div v-if="showDropdown" class="absolute right-0 top-full mt-2 w-48 bg-gray-900 border rounded-md shadow-lg" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
              <a :href="userLink" class="block px-4 py-2 text-white hover:bg-gray-800" @click.prevent="login">Log in as Robert</a>
              <a href="/login" class="block px-4 py-2 text-white hover:bg-gray-800">Log in as other user</a>
            </div>
          </div>
          <div v-else>
            <span class="text-white mr-2">Logged in as Robert</span>
            <a class="nav-link" @click="logout">Log out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

let showDropdown = ref(false);
let showAdminDropdown = ref(false);
const store = useStore();

function login() {
  store.commit('loginAsRobert');
}

const isLoggedInAsRobert = store.state.isLoggedInAsRobert;

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

const userLink = computed(() => isLoggedInAsRobert ? '/admin' : '/login');
const loginText = computed(() => isLoggedInAsRobert ? 'Logged in as Robert' : 'Log in');
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: #d1d5db;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem; 
}

.nav-link:hover {
  background-color: #374151;
}

.nav-dropdown {
  border-radius: 0.375rem; 
}
</style>
