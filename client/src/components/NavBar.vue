<script setup lang="ts">
import { ref } from 'vue';

let showDropdown = ref(false);

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
            <img class="h-8 w-auto" src= "../assets/favicon.ico "alt="Logo for the Website">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a class="bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" href="/home">
                Home
              </a>
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/myactivity">
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
              <a class="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/admin">
                Admin
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href="/signup">
            Sign Up
          </a>
          <div class="relative" @mouseover="showDropdown = true" @mouseout="showDropdown = false">
            <button class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" @click="toggleDropdown">
              Log In
            </button>
            <div v-if="showDropdown" class="absolute right-0 mt-2 w-48 bg-gray-900 border rounded-md shadow-lg" 
              @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
              <a href="/admin" class="block px-4 py-2 text-white hover:bg-gray-900">Robert</a>
              <a href="/login/user2" class="block px-4 py-2 text-white hover:bg-gray-900">Emily</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped>
</style>
