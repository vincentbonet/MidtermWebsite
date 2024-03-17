<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-800 text-gray-200 mt-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-lg">
      <div class="bg-gray-900 p-6 shadow-md rounded-md"> 
        <h2 class="text-xl font-semibold mb-4">Add New User</h2>
        <form @submit.prevent="addNewUser" class="space-y-4">
          <div class="flex flex-col">
            <label for="firstName" class="font-semibold mb-1">First Name:</label>
            <input type="text" v-model.trim="newUser.firstName" id="firstName" class="input-field bg-gray-800 text-gray-200"> 
          </div>
          <div class="flex flex-col">
            <label for="lastName" class="font-semibold mb-1">Last Name:</label>
            <input type="text" v-model.trim="newUser.lastName" id="lastName" class="input-field bg-gray-800 text-gray-200"> 
          </div>
          <div class="flex flex-col">
            <label for="email" class="font-semibold mb-1">Email:</label>
            <input type="email" v-model.trim="newUser.email" id="email" class="input-field bg-gray-800 text-gray-200"> 
          </div>
          <div class="flex flex-col">
            <label for="handle" class="font-semibold mb-1">Handle:</label>
            <input type="text" v-model.trim="newUser.handle" id="handle" class="input-field bg-gray-800 text-gray-200"> 
          </div>
          <div class="flex items-center">
            <input type="checkbox" v-model="newUser.isAdmin" id="isAdmin" class="mr-2">
            <label for="isAdmin" class="text-sm">Is Admin</label>
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add User</button>
        </form>
      </div>

      <div v-for="(user, index) in users" :key="index" class="bg-gray-900 p-6 shadow-md rounded-md"> 
        <img :src="user.picture" :alt="`${user.firstName} ${user.lastName}'s Profile Picture`" class="w-16 h-16 rounded-full mx-auto mb-4">
        <div class="text-center space-y-2"> 
          <p class="text-lg font-semibold">{{ user.firstName }} {{ user.lastName }}</p>
          <p class="text-gray-500">{{ user.email }}</p>
          <p class="text-gray-500">{{ user.handle }}</p>
          <p class="text-gray-500">{{ user.isAdmin ? 'Administrator' : 'Regular User' }}</p>
          <EditAndDelete :index="index" @edit="editUser" @delete="deleteUser"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditAndDelete from '../components/EditAndDelete.vue';
export default {
  components: {
    EditAndDelete
  },
  data() {
    return {
      users: [
        {
            picture: '../assets/favicon.ico',
            firstName: 'Robert',
            lastName: 'Bonet',
            email: 'robert.bonet@example.com',
            handle: 'robertbonet',
            isAdmin: true,
        },
        {
            picture: '../assets/favicon.ico',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            handle: 'johndoe',
            isAdmin: false,
        },
        {
            picture: '../assets/favicon.ico',
            firstName: 'John',
            lastName: 'Smith',
            email: 'john.smith@example.com', 
            handle: 'johnsmith',
            isAdmin: false,
        },
        {
            picture: '../assets/favicon.ico',
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
    editUser(index) {
      this.users.splice(index, 1, editedUser);
      console.log('User edited');
    },
    deleteUser(index) {
      this.users.splice(index, 1);
      console.log('User deleted');
    },
    addNewUser() {
      this.users.push({...this.newUser, picture: '../assets/favicon.ico'});
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
.mt-8{
  margin-top: 1rem;
  background-color: rgb(17, 24, 39);
}
.input-field {
  border: 1px solid rgb(17, 24, 39);
  padding: 0.5rem;
  width: 100%;
}
</style>
