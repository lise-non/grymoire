<!-- pages/inscription/specialite.vue -->
<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-xl">
      <div
        class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-blue-200 border-dashed"
      >
        <!-- Back Button -->
        <div class="mb-6">
          <button type="button" class="text-gray-700" @click="goBack">
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
        <h2 class="text-3xl font-bold text-gray-800 mb-6">
          Création de compte
        </h2>

        <!-- Speciality Selection Section -->
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-800 mb-2">
            Quelle est votre spécialité ?
          </h3>
          <p class="text-gray-600 mb-6">
            Vous pouvez sélectionner plusieurs spécialités. Vous pourrez
            toujours modifier vos spécialités dans votre profil
          </p>

          <div class="grid grid-cols-2 gap-4">
            <!-- Author Option -->
            <div
              class="border rounded-lg p-4 flex flex-col items-center justify-center h-48 cursor-pointer transition-all"
              :class="{
                'border-gray-300 hover:border-gray-400':
                  !selectedSpecialties.includes('author'),
                'border-[#0B5B50] bg-green-50':
                  selectedSpecialties.includes('author'),
              }"
              @click="toggleSpecialty('author')"
            >
              <div class="relative w-full flex justify-end mb-2">
                <div
                  class="w-6 h-6 rounded border"
                  :class="{
                    'border-gray-400': !selectedSpecialties.includes('author'),
                    'bg-[#0B5B50] border-[#0B5B50]':
                      selectedSpecialties.includes('author'),
                  }"
                >
                  <svg
                    v-if="selectedSpecialties.includes('author')"
                    class="w-6 h-6 text-white"
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

              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.8333 0.166738C46.8333 0.166738 29.0066 -0.696595 14.96 18.5534C4.17996 33.3234 0.166626 46.8334 0.166626 46.8334L4.69329 44.5001C8.05329 38.6667 9.80329 36.2634 13.0933 32.8334C18.9966 34.5601 25.1566 34.3501 30.5 28.1667C25.8333 26.8601 22.1 27.1634 16.5933 27.7234C22.7766 23.5001 27 22.5667 32.8333 23.5001L35.1666 18.8334C30.9666 18.0401 28.1666 17.9701 24.0133 18.9267C28.61 15.6834 31.8066 13.8634 37.5 14.1667L40.3233 9.66341C36.6833 9.40674 34.49 9.80341 30.3133 10.8301C34.07 7.42341 37.5 5.88341 42.4933 5.58007C42.4933 5.58007 44.9433 1.17007 46.8333 0.166738Z"
                  fill="#003530"
                />
              </svg>

              <span class="text-center font-medium text-gray-800"
                >Auteur.trice</span
              >
            </div>

            <!-- Beta Reader Option -->
            <div
              class="border rounded-lg p-4 flex flex-col items-center justify-center h-48 cursor-pointer transition-all"
              :class="{
                'border-gray-300 hover:border-gray-400':
                  !selectedSpecialties.includes('betaReader'),
                'border-[#0B5B50] border-[#0B5B50] bg-green-50':
                  selectedSpecialties.includes('betaReader'),
              }"
              @click="toggleSpecialty('betaReader')"
            >
              <div class="relative w-full flex justify-end mb-2">
                <div
                  class="w-6 h-6 rounded border"
                  :class="{
                    'border-gray-400':
                      !selectedSpecialties.includes('betaReader'),
                    'bg-[#0B5B50] border-[#0B5B50]':
                      selectedSpecialties.includes('betaReader'),
                  }"
                >
                  <svg
                    v-if="selectedSpecialties.includes('betaReader')"
                    class="w-6 h-6 text-white"
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

              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 46.8333C15.1 46.8333 14.1666 45.9 14.1666 44.5V37.5H4.83329C2.26663 37.5 0.166626 35.4 0.166626 32.8333V4.83329C0.166626 2.26663 2.26663 0.166626 4.83329 0.166626H42.1666C44.7333 0.166626 46.8333 2.26663 46.8333 4.83329V32.8333C46.8333 35.4 44.7333 37.5 42.1666 37.5H27.9333L19.3 46.1333C18.8333 46.6 18.3666 46.8333 17.6666 46.8333H16.5ZM18.8333 32.8333V40.0666L26.0666 32.8333H42.1666V4.83329H4.83329V32.8333H18.8333ZM37.5 28.1666V9.49996H25.8333V28.1666L31.6666 24.6666L37.5 28.1666Z"
                  fill="#003530"
                />
              </svg>

              <span class="text-center font-medium text-gray-800"
                >Beta lecteur.trice</span
              >
            </div>
          </div>
        </div>

        <!-- Create Account Button -->
        <div class="mb-6">
          <button
            @click="createAccount"
            :disabled="selectedSpecialties.length === 0 || isLoading"
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0B5B50] hover:bg-[#0B5B50] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-[#0B5B50]"
          >
            <span v-if="isLoading">Création en cours...</span>
            <span v-else>Créer mon compte</span>
          </button>
        </div>

        <!-- Login Link -->
        <div>
          <p class="text-sm text-gray-600">
            Vous avez déjà un compte ?
            <a
              href="/connexion"
              class="font-medium text-[#647896] underline hover:text-[#647896] underline"
            >
              Connectez-vous
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Since we might not have router access in all environments, we'll use window.location
const goBack = () => {
  window.location.href = "/inscription";
};

const selectedSpecialties = ref([]);
const isLoading = ref(false);
const hasUserData = ref(false);

// Check if we have user data on mount
onMounted(() => {
  console.log("Specialty selection page mounted");

  try {
    const tempData = localStorage.getItem("tempUserData");
    if (tempData) {
      hasUserData.value = true;
      console.log("Found temporary user data");
    } else {
      console.warn("No temporary user data found, redirecting to first step");
      // Redirect to first step if no data
      setTimeout(() => {
        window.location.href = "/inscription";
      }, 1000);
    }
  } catch (e) {
    console.error("Error checking for user data:", e);
  }
});

// Toggle specialty selection
const toggleSpecialty = (specialty) => {
  console.log("Toggling specialty:", specialty);

  const index = selectedSpecialties.value.indexOf(specialty);
  if (index === -1) {
    selectedSpecialties.value.push(specialty);
  } else {
    selectedSpecialties.value.splice(index, 1);
  }

  console.log("Selected specialties:", selectedSpecialties.value);
};

// Create account with selected specialties
const createAccount = async () => {
  console.log("Create account button clicked");

  if (selectedSpecialties.value.length === 0) {
    console.warn("No specialties selected");
    return;
  }

  try {
    isLoading.value = true;
    console.log(
      "Creating account with specialties:",
      selectedSpecialties.value
    );

    // Get temp user data from local storage
    let userRegistrationData = {};
    try {
      userRegistrationData = JSON.parse(
        localStorage.getItem("tempUserData") || "{}"
      );
      console.log("Retrieved user data:", userRegistrationData);
    } catch (e) {
      console.error("Error parsing user data:", e);
    }

    // Add specialties to user data
    userRegistrationData.specialties = selectedSpecialties.value;

    // In a real app, you would call your API here
    // For now, simulate an API call with a timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store the complete user data (in a real app, this would come from your backend)
    const userData = {
      id: "user_" + Date.now(),
      email: userRegistrationData.email || "user@example.com",
      username: userRegistrationData.username || "New User",
      specialties: selectedSpecialties.value,
      createdAt: new Date().toISOString(),
    };

    // Save the complete user data
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("User account created:", userData);

    // Clear temporary data
    localStorage.removeItem("tempUserData");

    // Redirect to dashboard
    window.location.href = "/tableau-de-bord";
  } catch (error) {
    console.error("Error creating account:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
