<template>
  <div>
    <div class="content">
      <div class="activities">
        <h2>Activities</h2>
        <ul>
          <li v-for="activity in activities" :key="activity.id">{{ activity.name }}</li>
        </ul>
      </div>
      <div class="users">
        <h2>Users</h2>
        <ul>
          <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const activities = ref([]);
const users = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('api/v1/activities');
    const activityData = await response.json();
    activities.value = activityData;

    const userResponse = await fetch('api/v1/users');
    const userData = await userResponse.json();
    users.value = userData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style scoped>
.header {
  font-family: 'Gothic', sans-serif;
  text-align: center;
  margin-top: 20px;
}

.content {
  display: flex;
  justify-content: space-around;
}

.activities,
.users {
  width: 45%;
}

.activities h2,
.users h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.activities ul,
.users ul {
  list-style: none;
  padding: 0;
}

.activities li,
.users li {
  margin-bottom: 8px;
}
</style>
