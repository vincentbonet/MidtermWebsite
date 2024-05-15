<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "../src/components/NavBar.vue"
import { ref } from 'vue';
import { refSession } from './viewModel/session';
import '@fortawesome/fontawesome-free/css/all.css'

const session = refSession();
const isLoading = ref(false); 

setTimeout(() => {
  isLoading.value = false;
}, 2000);

</script>

<template>
  <NavBar></NavBar>
  <div class="container mx-auto">
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
    <div v-else>
      <RouterView /> 
    </div>
  </div>
</template>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  background-color: #111111 !important;
}
</style>