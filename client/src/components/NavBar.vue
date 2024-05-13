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
          <LoginBadge />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang = "ts">
import { RouterLink } from 'vue-router';
import { LoginBadge } from '../components/LoginBadge.vue';

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
