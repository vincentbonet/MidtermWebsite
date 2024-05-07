<script setup lang="ts">
import { ref, onMounted } from 'vue';

const users = ref([]);
const showModal = ref(false);

onMounted(async () => {
  const response = await fetch('./data/users.json');
  users.value = await response.json();
});

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <button @click="openModal">Show Users</button>

  <div v-if="showModal" class="modal">
    <button @click="closeModal">Close</button>

    <div v-for="user in users" :key="user.id">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <!-- Add more fields as necessary -->
    </div>
  </div>
</template>

<style scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal button {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .modal div {
        background-color: white;
        padding: 20px;
        margin-bottom: 10px;
    }
</style>