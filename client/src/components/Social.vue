<script setup lang="ts">
import { ref, onMounted } from 'vue';
import usersData from '../data/users.json';

const users = ref([]);

onMounted(() => {
    users.value = usersData;
});
</script>

<template>
    <div>
        <button @click="openModal">Open Social Modal</button>

        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <h2>Social</h2>
                <ul>
                    <li v-for="user in users" :key="user.id">
                        {{ user.name }} - {{ user.activity }}
                    </li>
                </ul>
                <button @click="closeModal">Close</button>
            </div>
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

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}

button {
    margin-top: 10px;
}
</style>