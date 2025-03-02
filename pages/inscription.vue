<!-- pages/inscription/index.vue -->
<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <!-- Back Button -->
        <div class="mb-6">
          <button type="button" class="text-gray-700" @click="$router.back()">
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
        <h2 class="text-3xl font-bold text-gray-800 mb-8">
          Création de compte
        </h2>

        <!-- Google Button -->
        <div class="mb-6">
          <button
            type="button"
            @click="handleGoogleSignup"
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

        <!-- Registration Form -->
        <form class="space-y-6" @submit.prevent="continueToSpecialties">
          <!-- Error message display -->
          <div
            v-if="errorMessage"
            class="p-2 bg-red-100 text-red-700 rounded text-sm"
          >
            {{ errorMessage }}
          </div>

          <!-- Email Address -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Adresse mail <span class="text-green-500">*</span>
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="Hibou.quinne@gmail.com"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <!-- Username -->
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
            >
              Nom d'utilisateur.trice
            </label>
            <div class="text-xs text-gray-500 mb-1">
              Vous serez visible auprès des autres utilisateurs à travers ce nom
            </div>
            <div class="mt-1">
              <input
                id="username"
                v-model="username"
                name="username"
                type="text"
                autocomplete="username"
                placeholder="Jean Exemple"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Définir un mot de passe <span class="text-green-500">*</span>
            </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                required
                @input="checkPasswordMatch"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-gray-700"
            >
              Valider le mot de passe <span class="text-green-500">*</span>
            </label>
            <div class="mt-1 relative">
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                @input="checkPasswordMatch"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                :class="{
                  'border-green-500': passwordsMatch && confirmPassword,
                }"
              />
              <!-- Checkmark icon -->
              <div
                v-if="passwordsMatch && confirmPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-[#0B5B50]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Continue Button - Changed to a regular button outside the form -->
          <div>
            <button
              type="button"
              @click="continueToSpecialties"
              :disabled="isLoading || !formValid"
              :class="[
                'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
                passwordsMatch && password && confirmPassword
                  ? 'text-white bg-[#0B5B50] hover:bg-green-700 focus:ring-green-500'
                  : 'text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-gray-400',
              ]"
            >
              <span v-if="isLoading">Chargement...</span>
              <span v-else>Continuer</span>
            </button>
          </div>
        </form>

        <!-- Login Link -->
        <div class="mt-6">
          <p class="text-sm text-gray-600">
            Vous avez déjà un compte ?
            <NuxtLink
              to="/connexion"
              class="font-medium text-[#647896] underline hover:text-[#647896] underline"
            >
              Connectez-vous
            </NuxtLink>
          </p>
        </div>

        <!-- Required Fields Note -->
        <div class="mt-4 text-xs text-gray-500">
          <span class="text-green-500">*</span> Champs obligatoires
        </div>

        <!-- Terms and Conditions -->
        <div class="mt-6 text-sm text-gray-500">
          En cliquant sur "Continuer avec Google" ou "Continuer", vous acceptez
          <a
            href="#"
            class="text-[#647896] underline hover:text-[#647896] underline"
            >nos termes d'utilisation</a
          >
          et notre
          <a
            href="#"
            class="text-[#647896] underline hover:text-[#647896] underline"
            >politique de confidentialité</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");
const isLoading = ref(false);
const passwordsMatch = ref(false);

// For debugging
onMounted(() => {
  console.log("Registration page mounted");
});

// Check if passwords match
const checkPasswordMatch = () => {
  if (password.value && confirmPassword.value) {
    passwordsMatch.value = password.value === confirmPassword.value;
  } else {
    passwordsMatch.value = false;
  }
};

// Computed property to determine if form is valid
const formValid = computed(() => {
  return (
    email.value &&
    password.value &&
    confirmPassword.value &&
    passwordsMatch.value &&
    password.value.length >= 8
  );
});

// Continue to specialties selection step
const continueToSpecialties = () => {
  console.log("Continue button clicked");

  try {
    // Reset error message
    errorMessage.value = "";

    // Basic validation
    if (!formValid.value) {
      if (!passwordsMatch.value) {
        errorMessage.value = "Les mots de passe ne correspondent pas.";
      } else if (password.value.length < 8) {
        errorMessage.value =
          "Le mot de passe doit contenir au moins 8 caractères.";
      } else {
        errorMessage.value = "Veuillez remplir tous les champs obligatoires.";
      }
      return;
    }

    isLoading.value = true;

    // Store form data temporarily
    const userData = {
      email: email.value,
      username: username.value,
      password: password.value,
    };

    localStorage.setItem("tempUserData", JSON.stringify(userData));
    console.log("User data stored:", userData);

    // Navigate to specialties selection page
    // Using direct navigation instead of router.push for more compatibility
    router.push("/specialite");
  } catch (error) {
    console.error("Error in continueToSpecialties:", error);
    errorMessage.value =
      typeof error === "string"
        ? error
        : "Une erreur s'est produite. Veuillez réessayer.";
    isLoading.value = false;
  }
};

// Handle Google signup
const handleGoogleSignup = () => {
  console.log("Google sign up button clicked");

  try {
    errorMessage.value = "";
    isLoading.value = true;

    // Store a marker that we're using Google auth
    localStorage.setItem(
      "tempUserData",
      JSON.stringify({
        provider: "google",
      })
    );

    console.log("Google auth data stored");

    // Navigate to specialties selection page using direct navigation
    window.location.href = "/inscription/specialite";
  } catch (error) {
    console.error("Error in handleGoogleSignup:", error);
    errorMessage.value =
      typeof error === "string"
        ? error
        : "Une erreur s'est produite lors de la connexion avec Google. Veuillez réessayer.";
    isLoading.value = false;
  }
};
</script>
