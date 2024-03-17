<script setup lang="ts">
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-gray-800">
    <div class="bg-gray-200 max-w-7xl px-6 lg:px-8 py-8 rounded-lg shadow-xl mt-24"> 
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