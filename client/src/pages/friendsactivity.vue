<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white max-w-7xl px-6 lg:px-8">
      <FriendForm @workoutAdded="addWorkout" />
      
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
import FriendForm from 'client/src/components/FriendForm.vue'

const workouts = ref([]);

const addWorkout = (newWorkout) => {
  workouts.unshift({ ...newWorkout });
};
</script>
