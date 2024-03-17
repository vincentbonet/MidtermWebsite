<template>
  <nav class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo and Navbar -->
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center">
            <img class="h-8 w-auto mr-2" src="../assets/favicon.ico" alt="Logo for the Website">
            <span class="text-white text-lg font-semibold">Bonet's Barbel</span>
          </a>
        </div>
        <!-- Navigation Links -->
        <div class="hidden sm:block">
          <div class="flex space-x-4">
            <a class="nav-link" href="/noti">My Activity</a>
            <a class="nav-link" href="/statistics">Statistics</a>
            <a class="nav-link" href="/friendsactivity">Friends Activity</a>
            <a class="nav-link" href="/peoplesearch">People Search</a>
            <div class="relative" @mouseover="showAdminDropdown = true" @mouseout="showAdminDropdown = false">
              <a class="nav-link">Admin</a>
              <div v-show="showAdminDropdown" class="absolute left-0 mt-2 w-48 bg-gray-900 border rounded-md shadow-lg z-10" @mouseover="showAdminDropdown = true" @mouseout="showAdminDropdown = false">
                <a href="/admin" class="block px-4 py-2 text-white hover:bg-gray-800">Users</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Login/Logout Dropdown -->
        <div class="relative" @mouseover="showDropdown = true" @mouseout="showDropdown = false">
          <template v-if="!isLoggedInAsRobert">
            <a class="nav-link" @click="toggleDropdown">Log In</a>
          </template>
          <template v-else>
            <a class="nav-link" @click="logout">Log Out</a>
          </template>
          <div v-if="isLoggedInAsRobert || showDropdown" class="absolute right-0 top-full mt-2 w-48 bg-gray-900 border rounded-md shadow-lg" @mouseover="showDropdown = true" @mouseout="showDropdown = false">
            <template v-if="isLoggedInAsRobert">
              <div class="px-4 py-2 text-gray-300">Logged in as Robert</div>
            </template>
            <a href="/admin" class="block px-4 py-2 text-white hover:bg-gray-800" @click.prevent="loginAsRobert">Log in as Robert</a>
            <a href="/login" class="block px-4 py-2 text-white hover:bg-gray-800">Log in as Emily</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let showDropdown = ref(false);
let showAdminDropdown = ref(false);
let isLoggedInAsRobert = ref(false); 

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function loginAsRobert() {
  console.log("Logged in as Robert");
  isLoggedInAsRobert.value = true; 
  showDropdown.value = false;
}

function logout() {
  console.log("Logged out");
  isLoggedInAsRobert.value = false; 
}
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: #d1d5db;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.nav-link:hover {
  background-color: #374151;
}
</style>
