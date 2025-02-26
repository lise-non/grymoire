<template>
  <div
    class="max-w-full mx-auto transition-all duration-300"
    :class="props.isSidebarOpen ? 'ml-64' : 'ml-16'"
  >
    <Profile v-if="props.isAuthorMode == true"></Profile>
    <DashboardReaderDashboard v-if="props.isAuthorMode == false">
    </DashboardReaderDashboard>
  </div>
</template>

<script setup>
import Profile from "./author/Profile.vue";
const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
});
</script>
