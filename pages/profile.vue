<template>
  <div
    class="max-w-full mx-auto transition-all duration-300"
    :class="[
      props.isSidebarOpen ? 'ml-64' : 'ml-16',
      props.isNotificationSidebarOpen ? 'mr-72' : 'mr-16',
    ]"
  >
    <Profile></Profile>
  </div>
</template>

<script setup>
import Profile from "./author/Profile.vue";
const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
  isNotificationSidebarOpen: Boolean,
});
</script>
