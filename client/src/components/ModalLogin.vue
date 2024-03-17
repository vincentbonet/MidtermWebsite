<script setup lang="ts">
import { ref } from 'vue';

const showModal = ref(false);
const username = ref('');
const password = ref('');

const login = () => {
    // Perform login logic here
};

const closeModal = () => {
    showModal.value = false;
};

const openModal = () => {
    showModal.value = true;
};
</script>

<template>
    <div>
        <button @click="openModal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Open Modal
        </button>

        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>

                <h2 class="text-2xl font-bold mb-4">Login</h2>

                <form @submit.prevent="login">
                    <label for="username" class="block mb-2">Username:</label>
                    <input type="text" id="username" v-model="username" required class="border border-gray-300 px-4 py-2 rounded">

                    <label for="password" class="block mb-2">Password:</label>
                    <input type="password" id="password" v-model="password" required class="border border-gray-300 px-4 py-2 rounded">

                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    width: 100%;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>