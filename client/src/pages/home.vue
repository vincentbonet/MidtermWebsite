<script setup lang="ts">

</script>

<template>
    <div>
        <div class="bg-black-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt class="text-base leading-7 text-gray-600">Stats for Robert today:</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">1.3 <span class = "text-sm text-gray-500"> miles</span></dd>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">0:21 <span class="text-sm text-gray-500">duration (min:hours)</span></dd>

                </div>
                <div class="mx-auto flex max-w-xs flex-col gap-y-4"> <!--CHANGE TO INCLUDE SOMETHING ELSE, LOOK ON BS FOR MOSHE EXMAPLE-->
                    <dt class="text-base leading-7 text-gray-600">Stats for Robert this week:</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">9.3 <span class = "text-sm text-gray-500"> miles</span></dd>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">1:54 <span class="text-sm text-gray-500">duration (min:hours)</span></dd>
                </div>
                <div>
                    <dt class="text-base leading-7 text-gray-600">Stats for Robert this month:</dt>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">40.3 <span class = "text-sm text-gray-500"> miles</span></dd>
                    <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">7:21 <span class="text-sm text-gray-500">duration (min:hours)</span></dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<style scoped>

</style>