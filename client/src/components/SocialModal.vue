<template>
  <div class="social-modal">
    <div v-if="socialData" class="modal-content">
      <h2>Social Data</h2>
      <div v-for="post in socialData.posts" :key="post.id" class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <p>Author: {{ post.author }}</p>
        <hr>
      </div>
      <button @click="closeModal">Close</button>
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

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

.post {
  margin-bottom: 20px;
}

button {
  margin-top: 10px;
}
</style>
