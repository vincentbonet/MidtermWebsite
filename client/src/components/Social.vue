<!-- SocialModal.vue -->
<template>
    <div>
      <button @click="openModal">Open</button>
      <Modal v-if="showModal" @close="closeModal">
        <SocialMediaButtons :friends="friends" />
      </Modal>
    </div>
  </template>
  .
  <script setup lang="ts">
  import { ref } from 'vue';

  const showModal = ref(false);
  const friends = ref([]);
  
  const openModal = async () => {
    friends.value = await getUsersData();
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  </script>
  
  <!-- App.vue -->
  <template>
    <div class="flex items-center justify-center h-screen bg-gray-800">
      <div class="bg-gray-200 max-w-7xl px-6 lg:px-8 py-8 rounded-lg shadow-xl">
      </div>
    </div>
    <Footer />
  </template>
  
  <script setup lang="ts">
  import Footer from '../components/Footer.vue';
  </script>
  
  <style scoped>
  .bg-gray-800 {
    background-color: #111111;
  }
  </style>
  