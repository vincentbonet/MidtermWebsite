<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-800 text-gray-200">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-lg">
      <div class="bg-gray-700 p-6 shadow-md rounded-md"> 
        <h2 class="text-xl font-semibold mb-4">Add New User</h2>
        <form @submit.prevent="addNewUser" class="space-y-4">
          <div class="flex flex-col">
            <label for="firstName" class="font-semibold mb-1 text-center">First Name:</label>
            <input type="text" v-model.trim="newUser.firstName" id="firstName" class="input-field bg-gray-800 text-gray-200">

            <label for="lastName" class="font-semibold mb-1 text-center">Last Name:</label>
            <input type="text" v-model.trim="newUser.lastName" id="lastName" class="input-field bg-gray-800 text-gray-200">

            <label for="email" class="font-semibold mb-1 text-center">Email:</label>
            <input type="email" v-model.trim="newUser.email" id="email" class="input-field bg-gray-800 text-gray-200">

            <label for="handle" class="font-semibold mb-1 text-center">Handle:</label>
            <input type="text" v-model.trim="newUser.handle" id="handle" class="input-field bg-gray-800 text-gray-200">

            <label for="isAdmin" class="font-semibold mb-1 text-center">Admin:</label>
            <input type="checkbox" v-model="newUser.isAdmin" id="isAdmin" class="input-field bg-gray-800 text-gray-200 ml-1">
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add User</button>
        </form>
      </div>
      
      <div v-for="(user, index) in users" :key="index" class="bg-gray-900 p-6 shadow-md rounded-md relative">
        <img :src="getUserPicture(user.picture)" :alt="`${user.firstName || ''} ${user.lastName || ''}'s Profile Picture`" class="w-16 h-16 rounded-full mx-auto mb-4">
        <div class="text-center space-y-2"> 
          <p class="text-lg font-semibold">{{ user.firstName || 'Unknown' }} {{ user.lastName || 'User' }}</p>
          <p class="text-gray-500">{{ user.email || 'N/A' }}</p>
          <p class="text-gray-500">{{ user.handle || 'N/A' }}</p>
          <p class="text-gray-500">{{ user.isAdmin ? 'Administrator' : 'Regular User' }}</p>
          <EditAndDelete :index="index" @edit="editUser" @delete="deleteUser" class="absolute bottom-0 left-0 right-0 flex justify-center pb-4"></EditAndDelete>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '../components/Footer.vue';
import EditAndDelete from '../components/EditAndDelete.vue';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';

export default {
  components: {
    EditAndDelete
  },
  data() {
    return {
      users: [
        {
          picture: profile1,
          firstName: 'Robert',
          lastName: 'Bonet',
          email: 'robert.bonet@example.com',
          handle: 'robertbonet',
          isAdmin: true,
        },
        {
          picture: profile2,
          firstName: 'Emily',
          lastName: 'Pickering',
          email: 'emily.pickering@example.com',
          handle: 'emilypickering',
          isAdmin: false,
        },
        {
          picture: profile3,
          firstName: 'Henry',
          lastName: 'Becker',
          email: 'henry.becker@example.com',
          handle: 'henrybecker',
          isAdmin: false,
        },
      ],
      newUser: {
        firstName: '',
        lastName: '',
        email: '',
        handle: '',
        isAdmin: false,
      },
    };
  },
  methods: {
    addNewUser() {
      this.users.push({...this.newUser}); 
      this.newUser = {
        firstName: '',
        lastName: '',
        email: '',
        handle: '',
        isAdmin: false,
      };
      console.log('User added');
    },
    editUser(index, editedUser) {
      this.users.splice(index, 1, editedUser);
      console.log('User edited');
    },
    deleteUser(index) {
      this.users.splice(index, 1);
      console.log('User deleted');
    },
    getUserPicture(picture) {
      return picture;
    }
  }
};
</script>

<style scoped>
</style>
