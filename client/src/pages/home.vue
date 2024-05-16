<template>
  <div>
    <div class="flex items-center justify-center h-screen bg-gray-800">
      <div class="text-center" ref="animationTarget">
        <h1 class="text-3xl font-semibold text-gray-100 mb-4">Welcome!</h1>
        <h2 class="text-lg text-gray-200 mb-8">To use Building Better, Login on the top right.</h2>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.bg-gray-800 {
  background-color: #111111;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import anime from 'animejs';

import Footer from '../components/Footer.vue';

import * as THREE from 'three';

export default {
  setup() {
    const animationTarget = ref(null);

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

      //something extra I wanted to add to the landing page
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    });

    return { animationTarget };
  }
};
</script>
