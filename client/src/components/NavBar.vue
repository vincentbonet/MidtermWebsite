<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

</script>

<template>
  <nav
    :class="{ 'bg-black': isActive, 'text-white': isActive }"
    id="navbarBasicExample"
    class="navbar-menu"
  >
    <div class="navbar-start">
      <RouterLink
        to="/home"
        class="navbar-item text-white hover:text-gray-300"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/documentation"
        class="navbar-item text-white hover:text-gray-300"
      >
        Documentation
      </RouterLink>

      <RouterLink
        to="/products"
        class="navbar-item text-white hover:text-gray-300"
      >
        Products
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link text-white hover:text-gray-300">
          More
        </a>

        <div class="navbar-dropdown bg-black">
          <RouterLink
            to="/about"
            class="navbar-item text-white hover:text-gray-300"
          >
            About
          </RouterLink>
          <a class="navbar-item text-white hover:text-gray-300">Jobs</a>
          <a class="navbar-item text-white hover:text-gray-300">Contact</a>
          <hr class="navbar-divider border-white">
          <a class="navbar-item text-white hover:text-gray-300">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a
            class="button is-primary bg-white text-black"
          >
            <strong>Sign up</strong>
          </a>
          <a class="button is-light text-white hover:text-gray-300">
            Log in
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.navbar {
    background-color: black;
    color: white;
  }
</style>