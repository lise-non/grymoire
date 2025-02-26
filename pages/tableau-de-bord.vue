// layouts/default.vue
<template>
  <div class="flex min-h-screen">
    <main
      class="flex-grow transition-all duration-300 bg-gray-100"
      :class="props.isSidebarOpen ? 'ml-64' : 'ml-16'"
    >
      <div v-if="props.isAuthorMode">
        <h2>Mode Auteur</h2>
        <authorComment />
      </div>

      <div v-else>
        <h2>Mode Beta Lecteur</h2>
        <readerComment :sidebar-open="props.isSidebarOpen" />
      </div>

      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import readerComment from "./beta/reader-comment.vue";
import authorComment from "./author/author-comment.vue";

const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
});

// Watch for mode changes if you need to perform additional actions
watch(props.isAuthorMode, (newValue) => {
  console.log("Author mode changed:", newValue);
  // Add any additional logic you need when the mode changes
});
</script>
