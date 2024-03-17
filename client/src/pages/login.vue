<script setup lang="ts">
</script>

<template>
    <div class="flex justify-center items-center h-screen bg-primary">
        <div class="bg-white p-8 rounded shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Login</h2>
            <form>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" class="w-full border-gray-300 rounded-md p-2" />
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700">Password</label>
                    <input type="password" id="password" class="w-full border-gray-300 rounded-md p-2" />
                </div>
                <button type="submit" class="bg-primary text-white rounded-md py-2 px-4">Login</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>