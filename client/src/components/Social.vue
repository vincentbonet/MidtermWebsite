<template>
  <div>
    <h2>Users' Activities</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <strong>{{ user.name }}</strong>: {{ user.activity }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/data/users');
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error(error);
  }
});

fetchData();
</script>

<style scoped>
/* Add your scoped styles here if needed */
</style>

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

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
