<template>
  <div>
    <h2>Inscription</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Mot de passe"
        required
      />
      <button type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<script setup>
import { useAuth } from "~/composables/useAuth";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const { signUp } = useAuth();

const register = async () => {
  try {
    await signUp(email.value, password.value);
    alert("Inscription réussie !");
  } catch (error) {
    alert("Erreur : " + error.message);
  }
};
</script>
