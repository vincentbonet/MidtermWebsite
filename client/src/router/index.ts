import { createRouter, createWebHistory } from 'vue-router';
import home from '../pages/home.vue';
import admin from '../pages/admin.vue';
import friendsactivity from '../pages/friendsactivity.vue';
import myactivity from '../pages/myactivity.vue';
import statistics from '../pages/statistics.vue';
import peoplesearch from '../pages/peoplesearch.vue';
import signup from '../pages/signup.vue';
import login from '../pages/login.vue';
import noti from '../pages/noti.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/friendsactivity',
    name: 'friendsactivity',
    component: friendsactivity
  },
  {
    path: '/myactivity',
    name: 'myactivity',
    component: myactivity
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: statistics
  },
  {
    path: '/peoplesearch',
    name: 'peoplesearch',
    component: peoplesearch
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/noti',
    name: 'noti',
    component: noti
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// API functions
const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const postData = async (url: string, data: any) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Data envelopes
const createDataEnvelope = (data: any) => {
  return {
    data,
    timestamp: Date.now(),
  };
};

const extractDataFromEnvelope = (envelope: any) => {
  return envelope.data;
};

export { fetchData, postData, createDataEnvelope, extractDataFromEnvelope };
export default router;
