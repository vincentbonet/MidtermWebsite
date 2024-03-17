<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Home from './pages/home.vue';
import FriendActivity from './pages/friendsactivity.vue';
import Admin from './pages/admin.vue';
import MyActivity from './pages/myactivity.vue';
import PeopleSearch from './pages/peoplesearch.vue';
import Statistics from './pages/statistics.vue';
import Login from './pages/login.vue';
import Signup from './pages/signup.vue';

const routes = {
  '/': Home,
  '/friend-activity': FriendActivity,
  '/admin': Admin,
  '/my-activity': MyActivity,
  '/people-search': PeopleSearch,
  '/statistics': Statistics,
  '/login': Login,
  '/signup': Signup,
};

let currentRoute = window.location.pathname;

// Function to update the current route
const updateRoute = () => {
  currentRoute = window.location.pathname;
};
window.addEventListener('popstate', updateRoute);
</script>

<template>
  <NavBar />
  <div class="container mx-auto">
    <component :is="routes[currentRoute] || NotFound" /> 
  </div>
</template>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
