<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-lg">
      <!-- Form to add a new user -->
      <div class="bg-white p-4 shadow-md rounded-md">
        <h2 class="text-xl font-semibold mb-4">Add New User</h2>
        <form @submit.prevent="addNewUser" class="space-y-4">
          <div>
            <label for="firstName" class="block font-semibold">First Name:</label>
            <input type="text" v-model="newUser.firstName" id="firstName" class="input-field">
          </div>
          <div>
            <label for="lastName" class="block font-semibold">Last Name:</label>
            <input type="text" v-model="newUser.lastName" id="lastName" class="input-field">
          </div>
          <div>
            <label for="email" class="block font-semibold">Email:</label>
            <input type="email" v-model="newUser.email" id="email" class="input-field">
          </div>
          <div>
            <label for="handle" class="block font-semibold">Handle:</label>
            <input type="text" v-model="newUser.handle" id="handle" class="input-field">
          </div>
          <div>
            <label for="isAdmin" class="block font-semibold">Is Admin:</label>
            <input type="checkbox" v-model="newUser.isAdmin" id="isAdmin">
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add User</button>
        </form>
      </div>

      <!-- Display existing users -->
      <div v-for="(user, index) in users" :key="index" class="bg-white p-4 shadow-md rounded-md">
        <img :src="user.picture" :alt="`${user.firstName} ${user.lastName}'s Profile Picture`" class="w-16 h-16 rounded-full mx-auto mb-4">
        <div class="text-center">
          <p class="text-lg font-semibold">{{ user.firstName }}</p>
          <p class="text-lg font-semibold">{{ user.lastName }}</p>
          <p class="text-gray-500">{{ user.email }}</p>
          <p class="text-gray-500">{{ user.handle }}</p>
          <p class="text-gray-500">{{ user.isAdmin ? 'Administrator' : 'Regular User' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
            picture: 'path-to-image',
            firstName: 'Robert',
            lastName: 'Bonet',
            email: 'robert.bonet@example.com',
            handle: 'robertbonet',
            isAdmin: true,
        },
        {
            picture: 'path-to-image',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            handle: 'johndoe',
            isAdmin: false,
        },
        {
            picture: 'path-to-image',
            firstName: 'John',
            lastName: 'Smith',
            email: 'john.smith@example.com', 
            handle: 'johnsmith',
            isAdmin: false,
        },
        {
            picture: 'path-to-image',
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            handle: 'janesmith',
            isAdmin: false,
        },
      ],
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        handle: '',
        isAdmin: false
      }
    };
  },
  methods: {
    addNewUser() {
      // Add validation logic if required
      this.users.push({...this.newUser, picture: 'path-to-image'});
      // Clear the form after adding user
      this.clearForm();
    },
    clearForm() {
      this.newUser = {
        firstName: '',
        lastName: '',
        email: '',
        handle: '',
        isAdmin: false
      };
    }
  }
};
</script>

<style scoped>
.input-field {
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 100%;
}
</style>
