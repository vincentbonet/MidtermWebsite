<template>
  <div class="flex items-center justify-center h-screen bg-gray-800">
    <div class="bg-gray-200 max-w-7xl px-6 lg:px-8 py-8 rounded-lg shadow-xl">
      <div class="text-center">
        <button @click="openSocialModal" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Find Buddies
        </button>
        <SocialModal :is-open="isModalOpen" :social-data="socialData" @close="closeModal" />
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SocialModal from '../components/SocialModal.vue';
import Footer from '../components/Footer.vue';

const isModalOpen = ref(false);
const socialData = ref(null);

function openSocialModal() {
  isModalOpen.value = true;
  // Fetch social data from server and assign it to socialData
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<style scoped>
.bg-gray-800 {
  background-color: #111111;
}
</style>
