<template>
  <nav class="bg-black">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <img class="h-8 w-auto mr-2" src="../assets/favicon.ico" alt="Logo for the Website">
            <span class="text-white text-lg font-semibold">Building Better</span>
          </router-link>
        </div>
        <div class="hidden sm:block">
          <div class="flex space-x-5">
            <router-link :to="myActivityLink" class="nav-link">My Activity</router-link>
            <router-link to="/statistics" class="nav-link">Statistics</router-link>
            <router-link :to="friendsLink" class="nav-link">Friends Activity</router-link>
            <router-link to="/findbuddies" class="nav-link">Find Buddies</router-link>
            <router-link :to="adminLink" class="nav-link">Admin</router-link>
          </div>
        </div>
        <div class="flex items-center">
          <router-link v-if="!isLoggedIn" to="/signup" class="nav-link">Sign Up</router-link>
          <div v-if="!isLoggedIn">
            <div class="relative" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
              <a class="nav-link" @click="toggleDropdown">Log in</a>
              <div v-if="showDropdown" class="absolute right-0 top-full mt-2 w-48 bg-black border rounded-md shadow-lg" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
                <a @click="loginAsRobert" class="block px-4 py-2 text-white hover:bg-black">Log in as Robert</a>
                <router-link to="/login" class="block px-4 py-2 text-white hover:bg-black">Log in as other user</router-link>
              </div>
            </div>
          </div>
          <div v-else class="flex items-center">
            <span class="text-white mr-2">Logged in as Robert</span>
            <img src="../assets/profile1.jpg" alt="robertprofile" class="h-8 w-8 rounded-full">
            <a @click="logout" class="nav-link ml-4">Log out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import axios from 'axios';

let showDropdown = ref(false);

async function loginAsRobert() {
  try {
    const response = await axios.post('/api/users/login', {
      email: 'robert@example.com',
      password: 'password'
    });
    if (response.status === 200) {
      isLoggedIn.value = true;
    }
  } catch (error) {
    console.error("Login failed:", error.message);
  }
}

async function logout() {
  try {
    const response = await axios.post('/api/users/logout');
    if (response.status === 200) {
      isLoggedIn.value = false;
    }
  } catch (error) {
    console.error("Logout failed:", error.message);
  }
}

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

const isLoggedIn = ref(false);
//const friendsLink = computed(() => isLoggedIn.value ? '/friendsactivity': '/noti')
const myActivityLink = computed(() => isLoggedIn.value ? '/myactivity' : '/noti');
const adminLink = computed(() => isLoggedIn.value ? '/admin' : '/noti');
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: #d1d5db;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem; 
}

.nav-link:hover {
  background-color: #374151;
}

.nav-dropdown {
  border-radius: 0.375rem; 
}
</style>
