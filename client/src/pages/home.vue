<template>
  <div class="flex items-center justify-center h-screen bg-gray-800">
    <div class="text-center" ref="animationTarget">
      <h1 class="text-3xl font-semibold text-gray-100 mb-4">Welcome!</h1>
      <h2 class="text-lg text-gray-200 mb-8">To use Building Better, Login on the top right.</h2>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.bg-gray-800 {
  background-color: #111111;
}
</style>

<script lang="ts">
import { onMounted } from 'vue';
import anime from 'animejs';
import Footer from '../components/Footer.vue';

export default {
  setup() {
    onMounted(() => {
      // Anime.js animation
      anime({
        targets: ['.text-center'],
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad',
        delay: 500
      });
    });

    return {};
  }
};
</script>
