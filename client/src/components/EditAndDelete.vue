<template>
    <div>
      <!-- Edit Button -->
      <button @click="editUser" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
      <!-- Delete Button -->
      <button @click="deleteUser" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      index: {
        type: Number,
        required: true
      }
    },
    methods: {
      editUser() {
        this.$emit('edit', this.index);
      },
      deleteUser() {
        this.$emit('delete', this.index);
      }
    }
  };
  </script>
  