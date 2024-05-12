<template>
    <div class="mt-4">
      <h2 class="text-lg font-semibold mb-2">New User Form</h2>
      <form @submit.prevent="submitForm">
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
    emits('userAdded');
  };
  </script>
  
  <style scoped>
  </style>
  