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
    };
  },
};
</script>

<template>
    <div class="flex items-center justify-center min-h-screen">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-lg">
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

<style scoped>
@media (max-width: 640px) {
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
