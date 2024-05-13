<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white max-w-7xl px-6 lg:px-8">
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
      <button @click="addWorkout" class="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add Workout</button>
      <div class="text-center">
        <div v-for="(workout, index) in workouts" :key="index" class="mb-8">
          <dt class="text-base leading-7 text-gray-900">{{ `Stats for ${workout.name} today:` }}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ `${workout.distance} miles` }}</dd>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ `${workout.duration} duration (hours:min)` }}</dd>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { api } from "../viewModel/session";
import { Activity } from "../model/activity";

export default {
  setup() {
    const workouts = ref([]);
    const newWorkout = ref({
      date: '',
      duration: null,
      exerciseData: {
        steps: null,
        caloriesBurned: null,
        image: '',
        description: '',
      },
    });

    const addWorkout = async () => {
      if (newWorkout.value.date && newWorkout.value.duration !== null && newWorkout.value.exerciseData) {
        try {
          const data = await api<Activity>("activity", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWorkout.value),
          });

          workouts.value.unshift(data);
          newWorkout.value = { date: '', duration: null, exerciseData: { steps: null, caloriesBurned: null, image: '', description: '' } };
        } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
        }
      } else {
        alert('Please fill in all workout details.');
      }
    };

    return {
      workouts,
      newWorkout,
      addWorkout
    };
  }
};
</script>