<template>
  <NewUser />
  <UserForm />
  <div class="flex items-center justify-center h-screen bg-gray-800">
    <div class="bg-gray-200 max-w-7xl px-6 lg:px-8 py-8 rounded-lg shadow-xl mt-24"> 
      <div class="text-center">
        <div v-for="(friend, index) in friends" :key="index" class="mb-8">
          <dt class="text-gray-800 text-lg font-semibold mb-2">Stats for {{ friend.name }} today:</dt>
          <div class="flex justify-center items-center">
            <div class="text-5xl font-bold text-gray-800 mr-2">{{ friend.today.miles }}</div>
            <div class="text-sm text-gray-600">miles</div>
          </div>
          <div class="text-gray-600 text-sm">Duration: {{ friend.today.duration }} (min:hours)</div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Footer from '../components/Footer.vue';
const friends = [
  { 
    name: 'Emily', 
    today: { miles: 2.5, duration: '0:45' },
  },
];
</script>

<style scoped>
.bg-gray-200 {
  margin-top: 0;
}
.bg-gray-800 {
  background-color: #111111;
}
</style>
