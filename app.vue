<template>
  <div>
    <main class="bg-gray-100">
      <!-- Only show SideBar when user is authenticated -->
      <SideBar
        v-if="isAuthenticated"
        v-model="isSidebarOpen"
        v-model:mode="isAuthorMode"
        v-model:auth="isAuthenticated"
      ></SideBar>
      <!-- Pass isSidebarOpen and isAuthorMode props only when authenticated -->
      <NuxtPage
        v-if="isAuthenticated"
        :isSidebarOpen="isSidebarOpen"
        :isAuthorMode="isAuthorMode"
        :isNotificationSidebarOpen="isNotificationSidebarOpen"
      />

      <!-- Show only the page content when not authenticated -->
      <NuxtPage v-else />

      <!-- Only show MessageBar when authenticated and showMessageBar is true -->
      <MessageBar
        v-if="isAuthenticated && showMessageBar"
        v-model:messagebar="isNotificationSidebarOpen"
      ></MessageBar>
    </main>
  </div>
</template>

<script setup>
import { useAuth } from "~/composables/useAuth";
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { user, signOut } = useAuth();
const isAuthenticated = ref(false);
const isSidebarOpen = ref(false);
const isAuthorMode = ref(false);
const showMessageBar = ref(true);
const showSideBar = ref(true);
const isNotificationSidebarOpen = ref(true);

// Initialize authentication state
onMounted(() => {
  isAuthenticated.value = !!user.value; // Convert to boolean

  // If not authenticated, redirect to login page
  if (!isAuthenticated.value) {
    router.push("/connexion");
  }
});

// Watch for changes in user state
watch(
  () => user.value,
  (newUser) => {
    isAuthenticated.value = !!newUser;

    // If user becomes unauthenticated, redirect to login
    if (!newUser) {
      router.push("/connexion");
    }
  }
);

const logout = async () => {
  await signOut();
  isAuthenticated.value = false;

  // Redirect to login page after logout
  router.push("/connexion");
};
</script>
