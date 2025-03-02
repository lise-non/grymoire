<!-- components/CandidaturesSection.vue -->
<template>
  <div class="bg-white rounded-xl shadow-md p-6 mb-6">
    <!-- Header with dropdown arrow -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-[#20214B]">
        Candidatures
        <span class="text-red-400 text-lg">({{ candidates.length }})</span>
      </h2>
      <button class="text-gray-500">
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
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>

    <!-- Search bar -->
    <div class="relative mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Rechercher un nom, un mot clé, un numéro de chapitre..."
        class="w-full border border-gray-300 rounded-lg py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>

    <!-- Filter tags -->
    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm"
        >Orthographe (2)</span
      >
      <span class="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm"
        >Scénario (1)</span
      >
      <span class="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm"
        >Cohérence (1)</span
      >
      <span class="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm"
        >Commentaire (1)</span
      >
    </div>

    <!-- Candidate cards grid -->
    <div class="grid grid-cols-2 gap-4">
      <!-- Candidate cards -->
      <div
        v-for="candidate in filteredCandidates"
        :key="candidate.id"
        class="bg-gray-50 rounded-lg p-4"
      >
        <!-- Chapter and type info -->
        <div class="flex justify-between items-center mb-3">
          <div class="text-gray-600">
            Candidate pour
            <span class="font-medium">{{ candidate.chapters }}</span>
          </div>
          <span
            class="px-3 py-1 rounded-full text-sm"
            :class="{
              'bg-red-200 text-red-800': candidate.type === 'Orthographe',
              'bg-yellow-200 text-yellow-800': candidate.type === 'Scénario',
              'bg-orange-200 text-orange-800': candidate.type === 'Cohérence',
              'bg-green-200 text-green-800': candidate.type === 'Commentaire',
            }"
          >
            {{ candidate.type }}
          </span>
        </div>

        <!-- Candidate profile -->
        <div class="flex justify-between items-start mb-3">
          <div class="flex items-center">
            <img
              :src="candidate.avatar"
              :alt="candidate.name"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="ml-3">
              <h3 class="font-bold text-lg">{{ candidate.name }}</h3>
              <div class="flex items-center">
                <div class="flex">
                  <template v-for="i in 5" :key="i">
                    <svg
                      class="w-5 h-5"
                      :class="
                        i <= Math.floor(candidate.rating)
                          ? 'text-green-600'
                          : 'text-gray-300'
                      "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </template>
                </div>
                <span class="text-red-400 ml-2 text-sm"
                  >(Sur {{ candidate.reviews }} avis)</span
                >
              </div>
            </div>
          </div>
          <button class="text-gray-500">
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
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>

        <!-- Candidate description -->
        <p class="text-gray-700 mb-4">
          {{ candidate.description }}
        </p>

        <!-- Action buttons -->
        <div class="flex gap-3">
          <button
            class="py-2 px-6 border border-[#0B5B50] text-[#0B5B50] rounded-lg hover:bg-gray-100"
          >
            Refuser
          </button>
          <button
            class="py-2 px-6 bg-[#0B5B50] text-white rounded-lg hover:bg-green-800"
          >
            Accepter la candidature
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");

const candidates = ref([
  {
    id: 1,
    name: "Romain I.",
    avatar: "/images/pp-6.jpg",
    rating: 3.5,
    reviews: 24,
    chapters: "Chapitres 3 - 15",
    type: "Orthographe",
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 2,
    name: "Laurent U.",
    avatar: "/images/pp-7.jpg",
    rating: 3.5,
    reviews: 24,
    chapters: "Chapitre 6",
    type: "Scénario",
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 3,
    name: "Nolwenn T.",
    avatar: "/images/pp-9.jpg",
    rating: 3.5,
    reviews: 24,
    chapters: "Chapitres 1 - 7",
    type: "Cohérence",
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 4,
    name: "Laurent U.",
    avatar: "/images/pp-8.jpg",
    rating: 3.5,
    reviews: 24,
    chapters: "Chapitres 8 - 12",
    type: "Orthographe",
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 5,
    name: "Romain I.",
    avatar: "/images/pp-10.jpg",
    rating: 3.5,
    reviews: 24,
    chapters: "Chapitre 16",
    type: "Commentaire",
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
]);

const filteredCandidates = computed(() => {
  if (!searchQuery.value) return candidates.value;

  const query = searchQuery.value.toLowerCase();
  return candidates.value.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(query) ||
      candidate.chapters.toLowerCase().includes(query) ||
      candidate.description.toLowerCase().includes(query)
  );
});
</script>
