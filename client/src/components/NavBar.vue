<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

</script>
<nav></nav>

  
</template>

<style scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.navbar {
    background-color: black;
    color: white;
  }
</style>