<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-xl">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <!-- Back Button -->
        <div class="mb-6">
          <button type="button" class="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
        </div>

        <!-- Title -->
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Connexion</h2>

        <!-- Google Button -->
        <div class="mb-6">
          <button
            type="button"
            class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <img
              class="h-5 w-5 mr-2"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google logo"
            />
            Continuer avec Google
          </button>
        </div>

        <!-- Divider -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">ou</span>
          </div>
        </div>

        <!-- Login Form -->
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Adresse mail</label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email"
                v-model="email"
                type="email"
                autocomplete="email"
                placeholder="jean@exemple.com"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Mot de passe</label
            >
            <div class="mt-1">
              <input
                id="password"
                name="password"
                v-model="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div class="flex items-center justify-end">
            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-[#647896] hover:text-[#647896] underline"
                >Mot de passe oublié ?</a
              >
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0B5B50] hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Se connecter
            </button>
          </div>
        </form>

        <!-- Sign Up Link -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Vous n'avez pas de compte ?
            <NuxtLink
              to="/inscription"
              class="font-medium text-[#647896] hover:text-[#647896] underline"
            >
              Créer votre compte
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref(null);
const isLoading = ref(false);
const { signIn, signInWithGoogle } = useAuth();
const router = useRouter();

const handleLogin = async () => {
  try {
    isLoading.value = true;
    errorMessage.value = null;

    await signIn(email.value, password.value);

    // Redirect after successful login
    await router.push("/dashboard");
  } catch (error) {
    errorMessage.value =
      typeof error === "string"
        ? error
        : "Une erreur s'est produite lors de la connexion. Veuillez réessayer.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.login-button:hover {
  background-color: #0056b3;
}

.error-message {
  color: #d9534f;
  margin-top: 0.5rem;
}
</style>
