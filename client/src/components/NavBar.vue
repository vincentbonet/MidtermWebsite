<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false);
let showDropdown = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<template>
  <nav class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="" alt="Logo for the Website">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a class="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                <RouterLink to="/home">Home</RouterLink>
              </a>
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                <RouterLink to="/myactivity">My Activity</RouterLink>
              </a>
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                <RouterLink to="/statistics">Statistics</RouterLink>
              </a>
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                <RouterLink to="/friendsactivity">Friends Activity</RouterLink>
              </a>
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                <RouterLink to="/peoplesearch">People Search</RouterLink>
              </a>
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                <RouterLink to="/admin">Admin</RouterLink>
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <RouterLink to="/signup">Sign Up</RouterLink>
          </a>
          <div class="relative" @mouseover="showDropdown = true" @mouseout="showDropdown = false">
            <button class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" @click="toggleDropdown">
              Log In
            </button>
            <div v-if="showDropdown" class="absolute right-0 mt-2 w-48 bg-gray-900 border rounded-md shadow-lg" 
              @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
              <RouterLink to="/admin" class="block px-4 py-2 text-white hover:bg-gray-900">Robert</RouterLink>
              <RouterLink to="/login/user2" class="block px-4 py-2 text-white hover:bg-gray-900">Emily</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
</style>
