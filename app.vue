<template>
  <div>
    <!-- <header>
      <nav>
        <NuxtLink v-if="user" to="/tableau-de-bord">Dashboard</NuxtLink>
        <NuxtLink v-if="user" to="/beta/reader-comment">Dashboard</NuxtLink>
        <NuxtLink v-if="!user" to="/connexion">Login</NuxtLink>
        <NuxtLink v-if="!user" to="/inscription">Signup</NuxtLink>
        <NuxtLink v-if="user" to="/connexion">Logout</NuxtLink>
      </nav>
    </header> -->

    <main class="bg-gray-100">
      <SideBar v-model="isSidebarOpen" v-model:mode="isAuthorMode"></SideBar>
      <NuxtPage :isSidebarOpen="isSidebarOpen" :isAuthorMode="isAuthorMode" />
      <MessageBar></MessageBar>
    </main>
  </div>
</template>

<script setup>
import { useAuth } from "~/composables/useAuth";
import { ref, onMounted } from "vue";

const { user, signOut } = useAuth();
const isAuthenticated = ref(false);

const isSidebarOpen = ref(false);
const isAuthorMode = ref(false);

onMounted(() => {
  isAuthenticated.value = user.value;
});

const logout = async () => {
  await signOut();
  isAuthenticated.value = false;
  window.location.reload(); // to refresh the user state
};
</script>

<style scoped>
/* Global Styles */
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #b6b6b6;
  color: white;
}

nav {
  display: flex;
  gap: 1rem;
}

main {
  padding: 2rem;
}

footer {
  padding: 1rem;
  text-align: center;
  background-color: #333;
  color: white;
}
</style>
