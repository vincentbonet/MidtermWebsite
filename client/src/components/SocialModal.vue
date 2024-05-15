<template>
  <div v-if="isOpen" class="social-modal">
    <div class="modal-content">
      <div v-if="socialData" v-for="post in socialData.posts" :key="post.id" class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <p>Author: {{ post.author }}</p>
        <hr>
      </div>
      <div>
        <button @click="closeModal" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    socialData: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.social-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.post {
  margin-bottom: 20px;
}
</style>
