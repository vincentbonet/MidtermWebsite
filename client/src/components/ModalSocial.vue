<template>
    <transition name="modal">
      <div class="modal" v-if="isOpen" @click.self="closeModal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h2>Social Data</h2>
          <div v-if="socialData">
            <ul>
              <li v-for="(activity, index) in socialData" :key="index">{{ activity }}</li>
            </ul>
          </div>
          <div v-else>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isOpen = ref(false);
  const socialData = ref<string[] | null>(null);
  
  const props = defineProps<{
    isOpen: boolean;
    socialData: string[] | null;
  }>();
  
  function closeModal() {
    isOpen.value = false;
  }
  </script>
  
  <style scoped>
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  .modal-enter {
    opacity: 0;
  }
  .modal-leave-active {
    opacity: 0;
  }
  .modal-enter-active,
  .modal-leave-to {
    transition: opacity 0.5s;
  }
  </style>
  