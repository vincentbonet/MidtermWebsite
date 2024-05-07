<template>
  <div>
    <button @click="openModal">Open</button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h2>Users' Activities</h2>
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.name }}: {{ user.activity }}
          </li>
        </ul>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const users = ref([]);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const fetchData = async () => {
  try {
    const response = await fetch('./data/users.json');
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error(error);
  }
};

fetchData();
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
