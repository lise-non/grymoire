<!-- pages/collaborators.vue -->
<template>
  <div
    class="bg-gray-100 min-h-screen p-6"
    :class="[
      props.isSidebarOpen ? 'ml-64' : 'ml-16',
      props.isNotificationSidebarOpen ? 'mr-72' : 'mr-16',
    ]"
  >
    <!-- Header -->
    <div class="mb-10">
      <h1 class="text-4xl font-bold text-[#20214B]">
        Gérer les collaborateurs
      </h1>
      <p class="text-lg text-gray-700 mt-1">"Projet G"</p>
    </div>

    <!-- Collaborators Section -->
    <div class="bg-white rounded-xl shadow-md p-6 mb-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-[#20214B]">
          Collaborateurs
          <span class="text-red-400 text-lg">({{ collaborators.length }})</span>
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <!-- Search bar -->
      <div class="relative mb-6">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher un collaborateur"
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
        <span
          v-for="filter in filters"
          :key="filter.name"
          class="px-3 py-1 rounded-full text-sm cursor-pointer"
          :class="{
            'bg-red-200 text-red-800': filter.color === 'red',
            'bg-yellow-200 text-yellow-800': filter.color === 'yellow',
            'bg-orange-200 text-orange-800': filter.color === 'orange',
            'bg-green-200 text-green-800': filter.color === 'green',
          }"
          >{{ filter.name }}</span
        >
      </div>

      <!-- Collaborator cards grid -->
      <div class="grid grid-cols-2 gap-4">
        <CollaboratorCard
          v-for="collaborator in filteredCollaborators"
          :key="collaborator.id"
          :collaborator="collaborator"
        />
      </div>
    </div>

    <Candidatures></Candidatures>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CollaboratorCard from "~/components/CollaboratorCard.vue";
import Candidatures from "~/components/Candidatures.vue";
const searchQuery = ref("");

const filters = [
  { name: "Orthographe", color: "red" },
  { name: "Scénario", color: "yellow" },
  { name: "Cohérence", color: "orange" },
  { name: "Commentaire", color: "green" },
];

const collaborators = ref([
  {
    id: 1,
    name: "Melvin P.",
    avatar: "/images/pp-2.jpg",
    rating: 3.5,
    reviews: 24,
    missions: [
      {
        name: "Scène de combat",
        duration: "Depuis 6 jours",
        type: "Orthographe",
        validated: 156,
        pending: 34,
        rejected: 12,
      },
      {
        name: "Avis chapitre 5 - 6",
        duration: "Depuis 3 semaines",
        type: "Scénario",
        validated: 156,
        pending: 34,
        rejected: 12,
      },
    ],
  },
  {
    id: 2,
    name: "Florian M.",
    avatar: "/images/pp-11.jpg",
    rating: 3.5,
    reviews: 24,
    missions: [
      {
        name: "Cohérance personnages",
        duration: "Depuis 5 semaines",
        type: "Orthographe",
        validated: 56,
        pending: 49,
        rejected: 0,
      },
    ],
  },
  {
    id: 3,
    name: "Ronald",
    avatar: "/images/pp-6.jpg",
    rating: 3,
    reviews: 24,
    missions: [
      {
        name: "Relectrure chapitre 1 - 4",
        duration: "Depuis 3 semaines",
        type: "Orthographe",
        validated: 16,
        pending: 5,
        rejected: 12,
      },
    ],
  },
  {
    id: 4,
    name: "Peter",
    avatar: "/images/pp-9.jpg",
    rating: 3.5,
    reviews: 24,
    missions: [
      {
        name: "Relecture personnage",
        duration: "Depuis 1 semaines",
        type: "Orthographe",
        validated: 156,
        pending: 34,
        rejected: 12,
      },
    ],
  },
]);

const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
  isNotificationSidebarOpen: Boolean,
});

const filteredCollaborators = computed(() => {
  if (!searchQuery.value) return collaborators.value;

  const query = searchQuery.value.toLowerCase();
  return collaborators.value.filter((collaborator) =>
    collaborator.name.toLowerCase().includes(query)
  );
});
</script>
