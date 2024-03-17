<script setup lang="ts">
import { ref } from 'vue';
const workouts = ref([]);

</script>

<template>
  <div class="flex items-center justify-center h-screen bg-gray-900">
    <div class="bg-gray-800 max-w-7xl px-6 lg:px-8 py-8 rounded-lg shadow-xl">
      <div class="text-center">
        <!-- Statistics for Emily -->
        <div v-for="workout in workouts" :key="workout.name" v-if="workout.name === 'Emily'" class="mb-8">
          <dt class="text-gray-200 text-lg font-semibold mb-2">Stats for {{ workout.name }} today:</dt>
          <div class="flex justify-center items-center">
            <div class="text-4xl font-bold text-white mr-2">{{ workout.distance }}</div>
            <div class="text-sm text-gray-400">miles</div>
          </div>
          <div class="text-gray-400 text-sm">Duration: {{ workout.duration }}</div>
        </div>

        <!-- Statistics for Nita -->
        <div v-for="workout in workouts" :key="workout.name" v-if="workout.name === 'Nita'" class="mb-8">
          <dt class="text-gray-200 text-lg font-semibold mb-2">Stats for {{ workout.name }} today:</dt>
          <div class="flex justify-center items-center">
            <div class="text-4xl font-bold text-white mr-2">{{ workout.distance }}</div>
            <div class="text-sm text-gray-400">miles</div>
          </div>
          <div class="text-gray-400 text-sm">Duration: {{ workout.duration }}</div>
        </div>

        <!-- Statistics for Chico -->
        <div v-for="workout in workouts" :key="workout.name" v-if="workout.name === 'Chico'" class="mb-8">
          <dt class="text-gray-200 text-lg font-semibold mb-2">Stats for {{ workout.name }} today:</dt>
          <div class="flex justify-center items-center">
            <div class="text-4xl font-bold text-white mr-2">{{ workout.distance }}</div>
            <div class="text-sm text-gray-400">miles</div>
          </div>
          <div class="text-gray-400 text-sm">Duration: {{ workout.duration }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
