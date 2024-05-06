<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import { useStore } from 'vuex';
import { refSession } from './viewModel/session';

const session = refSession();

</script>

<template>
  <NavBar />
  <div class="container mx-auto">
    <RouterView /> 
  </div>

</template>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>