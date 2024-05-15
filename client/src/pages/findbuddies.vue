<template>
  <div>
    <div class="flex items-center justify-center h-screen bg-gray-800">
        <div class="text-center">
          <button @click="openModalSocial" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4">
            Find Buddies
          </button>
          <ModalSocial :is-open="isModalOpen" :social-data="socialData" @close="closeModal" />
        </div>
      </div>
    </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ModalSocial from '../components/ModalSocial.vue';
import Footer from '../components/Footer.vue';

const isModalOpen = ref(false);
const socialData = ref(null);

async function openModalSocial() {
  isModalOpen.value = true;
  try {
    const response = await fetch('/api/v1/activities');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    socialData.value = await response.json();
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  openModalSocial();
});

function closeModal() {
  isModalOpen.value = false;
}
</script>

<style scoped>
.bg-gray-800 {
  background-color: #111111;
}
</style>
