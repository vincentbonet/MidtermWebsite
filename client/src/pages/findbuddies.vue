<script setup lang="ts">
import ModalSocial from '../components/ModalSocial.vue';
</script>

<template>
  <div>
    <header class="header">
      <h1>Find Your Buddies</h1>
    </header>
    <ModalSocial />
  </div>
</template>

<style scoped>
.header {
  font-family: 'Gothic', sans-serif;
  text-align: center;
  margin-top: 20px;
}

.header h1 {
  font-size: 32px;
  font-weight: bold;
  color: #333; 
}
</style>
