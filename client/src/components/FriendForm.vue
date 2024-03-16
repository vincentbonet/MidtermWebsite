<template>
    <div>
      <div class="mb-4">
        <label for="name" class="text-base leading-7 text-gray-900">Name:</label>
        <input v-model="newWorkout.name" id="name" type="text" class="px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="distance" class="text-base leading-7 text-gray-900">Distance (miles):</label>
        <input v-model="newWorkout.distance" id="distance" type="number" step="0.1" class="px-4 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label for="duration" class="text-base leading-7 text-gray-900">Duration (hours:min):</label>
        <input v-model="newWorkout.duration" id="duration" type="text" class="px-4 py-2 border rounded-md">
      </div>
      <button @click="submitForm" class="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add Workout</button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const emits = defineEmits(['workoutAdded']);
  
  const newWorkout = ref({
    name: '',
    distance: null,
    duration: '',
  });
  
  const submitForm = () => {
    if (newWorkout.value.name && newWorkout.value.distance !== null && newWorkout.value.duration) {
      emits('workoutAdded', { ...newWorkout.value });
      newWorkout.value = { name: '', distance: null, duration: '' };
    } else {
      alert('Please fill in all workout details.');
    }
  };
  </script>
  