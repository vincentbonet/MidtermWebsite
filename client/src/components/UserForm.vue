<template>
    <div class="mt-4">
      <h2 class="text-lg font-semibold mb-2">New User Form</h2>
      <!-- Your form fields go here -->
      <form @submit.prevent="submitForm">
        <!-- Form fields go here -->
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">
          Submit
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  
  const emits = defineEmits(['userAdded']);
  
  const submitForm = () => {
    // Handle form submission here
    // Once the user is added, emit an event to notify the parent component
    emits('userAdded');
  };
  </script>
  
  <style scoped>
  </style>
  