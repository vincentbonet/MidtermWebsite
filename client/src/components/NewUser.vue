<template>
    <div id="app" class="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h1 class="text-2xl font-semibold mb-4">Add New User</h1>
      
      <!-- Button to toggle the form -->
      <button @click="toggleForm" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add User
      </button>
  
      <!-- User form (initially hidden) -->
      <UserForm v-if="showForm" @userAdded="userAddedHandler" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import UserForm from './UserForm.vue';
  
  const showForm = ref(false);
  
  const toggleForm = () => {
    showForm.value = !showForm.value;
  };
  
  const userAddedHandler = () => {
    showForm.value = false;
  };
  </script>
  
  <style scoped>
  </style>
  