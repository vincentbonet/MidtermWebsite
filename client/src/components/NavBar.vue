<template>
  <nav class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
      </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <a href="/">
              <img class="h-8 w-auto" src="../assets/favicon.ico" alt="Logo for the Website">
            </a>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/noti">
                My Activity
              </a>
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/statistics">
                Statistics
              </a>
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/friendsactivity">
                Friends Activity
              </a>
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/peoplesearch">
                People Search
              </a>
              <div class="relative" @mouseover="showAdminDropdown = true" @mouseout="showAdminDropdown = false">
                <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="#">
                  Admin
                </a>
                <div v-show="showAdminDropdown" class="absolute left-0 mt-2 w-48 bg-gray-900 border rounded-md shadow-lg z-10" @mouseover="showAdminDropdown = true" @mouseout="showAdminDropdown = false">
                  <a href="/admin" class="block px-4 py-2 text-white hover:bg-gray-800">Users</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center">
      <!-- Login/Logout link -->
      <a v-if="!isLoggedInAsRobert" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" @click="toggleDropdown">
        Log In
      </a>
      <a v-else class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" @click="logout">
        Log Out
      </a>
      
      <!-- Dropdown for switching between users -->
      <div v-if="isLoggedInAsRobert || showDropdown" class="relative" @mouseover="showDropdown = true" @mouseout="showDropdown = false">
        <div v-if="isLoggedInAsRobert" class="text-gray-300 text-sm ml-2">Logged in as Robert</div>
        <div v-else class="absolute right-0 top-full mt-2 w-48 bg-gray-900 border rounded-md shadow-lg"
          @mouseover="showDropdown = true" @mouseout="showDropdown = false">
          <a href="/admin" class="block px-4 py-2 text-white hover:bg-gray-900" @click.prevent="loginAsRobert">Log in as Robert</a>
          <a href="/login" class="block px-4 py-2 text-white hover:bg-gray-900">Log in as Emily</a>
        </div>
      </div>
    </div>
  </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let showDropdown = ref(false);
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
</style>