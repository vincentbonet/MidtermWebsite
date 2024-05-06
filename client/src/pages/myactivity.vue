<script setup lang = 'ts'>
import Footer from '../components/Footer.vue'
</script>
<template>
  <div class="flex items-center justify-center h-screen bg-gray-800">
    <div class="bg-gray-200 max-w-7xl px-6 lg:px-8 py-8 rounded-lg shadow-xl">
      <div class="text-center">
        <div class="mb-8">
          <dt class="text-gray-800 text-lg font-semibold mb-2">Stats for Robert today:</dt>
          <div class="flex justify-center items-center">
            <div class="text-5xl font-bold text-gray-800 mr-2">1.3</div>
            <div class="text-sm text-gray-600">miles</div>
          </div>
          <div class="text-gray-600 text-sm">Duration: 0:21 (min:hours)</div>
        </div>

        <div class="mb-8">
          <dt class="text-gray-800 text-lg font-semibold mb-2">Stats for Robert this week:</dt>
          <div class="flex justify-center items-center">
            <div class="text-5xl font-bold text-gray-800 mr-2">9.3</div>
            <div class="text-sm text-gray-600">miles</div>
          </div>
          <div class="text-gray-600 text-sm">Duration: 1:54 (min:hours)</div>
        </div>

        <div class="mb-8">
          <dt class="text-gray-800 text-lg font-semibold mb-2">Stats for Robert this month:</dt>
          <div class="flex justify-center items-center">
            <div class="text-5xl font-bold text-gray-800 mr-2">40.3</div>
            <div class="text-sm text-gray-600">miles</div>
          </div>
          <div class="text-gray-600 text-sm">Duration: 7:21 (min:hours)</div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style scoped>
.bg-gray-900{
  background-color: #111111;
}
</style>
