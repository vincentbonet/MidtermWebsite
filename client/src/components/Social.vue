<template>
  <div>
    <h2>Users' Activities</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <strong>{{ user.name }}</strong>: {{ user.activity }}
      </li>
    </ul>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Modal Title</h3>
        <p>This is a modal content</p>
        <button @click="closeModal">Close Modal</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { api } from '../model/myfetch';

const users = ref([]);
const showModal = ref(false);

onMounted(async () => {
  try {
    const data = await api('users');
    users.value = data;
  } catch (error) {
    console.error("Error found: " + error);
  }
});

const closeModal = () => {
  showModal.value = false;
};
</script>

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
