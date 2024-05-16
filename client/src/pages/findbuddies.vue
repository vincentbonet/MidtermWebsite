<script setup lang="ts">
import ModalSocial from '../components/ModalSocial.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div>
    <header class="header">
      <h1>Find Your Buddies</h1>
    </header>
    <ModalSocial />
    <Footer></Footer>
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
  color: white; 
}
</style>
