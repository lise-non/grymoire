<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- Background overlay -->
    <div
      class="absolute inset-0 bg-gray-900 bg-opacity-50"
      @click="closeModal"
    ></div>

    <!-- Mission card container -->
    <div
      class="relative z-10 w-full max-w-lg mx-4 bg-white rounded-lg shadow-xl p-8"
    >
      <!-- Header and close button -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-[#20214B]">Ajouter une mission</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mission type selection -->
      <div class="flex flex-wrap gap-2 mb-6">
        <button
          class="px-4 py-2 rounded-full text-sm bg-red-200 text-red-700 font-medium"
        >
          Orthographe -
        </button>
        <button
          class="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
        >
          Scénario +
        </button>
        <button
          class="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
        >
          Cohérence +
        </button>
        <button
          class="px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
        >
          Commentaire +
        </button>
      </div>

      <!-- Description textarea -->
      <div class="mb-6">
        <textarea
          class="w-full p-4 border border-gray-300 rounded-lg text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          rows="4"
          placeholder="Ajoutez une description ici"
        ></textarea>
      </div>

      <!-- Chapter range -->
      <div class="flex items-center gap-4 mb-6">
        <span class="text-[#20214B] font-medium">Du chapitre</span>
        <input
          type="text"
          class="w-16 p-2 border border-gray-300 rounded-lg text-center"
          placeholder="..."
        />
        <span class="text-[#20214B] font-medium">à</span>
        <input
          type="text"
          class="w-16 p-2 border border-gray-300 rounded-lg text-center"
          placeholder="..."
        />
      </div>

      <!-- Beta reader compensation -->
      <div class="mb-6">
        <h3 class="text-lg font-medium text-[#20214B] mb-4">
          Rémunération du beta lecteur par chapitre
        </h3>
        <div class="flex items-center gap-2 mb-2">
          <button
            class="w-10 h-10 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-xl font-bold"
          >
            -
          </button>
          <div class="flex items-baseline">
            <span class="text-3xl font-bold text-[#20214B]">0.5 €</span>
            <span class="text-gray-500 ml-1">/page</span>
          </div>
          <button
            class="w-10 h-10 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-xl font-bold"
          >
            +
          </button>
        </div>
        <div
          class="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm inline-block"
        >
          Prix recommandé : 0.3 € - 0.5 €
        </div>
      </div>

      <!-- Number of beta readers -->
      <div class="mb-8">
        <h3 class="text-lg font-medium text-[#20214B] mb-4">
          Nombre de Beta lecteur.s
        </h3>
        <div class="flex items-center gap-2">
          <button
            class="w-10 h-10 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-xl font-bold"
          >
            -
          </button>
          <span class="text-3xl font-bold text-[#20214B]">1</span>
          <button
            class="w-10 h-10 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-xl font-bold"
          >
            +
          </button>
        </div>
      </div>

      <!-- Publish button -->
      <button
        class="w-full py-4 bg-[#0B5B50] text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors"
      >
        Publier cette mission
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  showMissionCard: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:showMissionCard"]);

// Local state that syncs with the prop
const show = ref(props.showMissionCard);

// Watch for changes to the prop
watch(
  () => props.showMissionCard,
  (newVal) => {
    show.value = newVal;
  }
);

// Function to close the modal
const closeModal = () => {
  show.value = false;
  emit("update:showMissionCard", false);
};
</script>
