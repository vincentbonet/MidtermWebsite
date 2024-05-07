<template>
  <div class="flex items-center justify-center h-screen bg-gray-800">
    <div class="bg-gray-200 max-w-7xl px-6 lg:px-8 py-8 rounded-lg shadow-xl">
      <div class="text-center">
        <Social />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Social from '../components/Social.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped>
.bg-gray-800 {
  background-color: #111111;
}
</style>