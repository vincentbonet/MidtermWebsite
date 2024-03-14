<template>
    <div id="app" class="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h1 class="text-2xl font-semibold mb-4">Add New User</h1>
      
      <!-- Button to add new user -->
      <button @click="addUser" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add User
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  const addUser = () => {
    alert('New user added!');
  };
  </script>
  
  <style scoped>
  </style>
  