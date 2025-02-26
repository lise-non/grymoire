<template>
  <header class="mb-8">
    <h1 class="text-3xl font-bold text-navy-900 flex items-center gap-2">
      Bonjour Hibou
      <span class="text-2xl">👋</span>
    </h1>
  </header>

  <!-- Main Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Project Funds -->

    <div class="rounded-lg bg-white p-6 shadow-sm">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold text-navy-900">Argent des les projets</h2>
        <NuxtLink to="/details" class="text-teal-600 hover:text-teal-700">
          Voir en détail
        </NuxtLink>
      </div>

      <div class="flex items-start space-x-8">
        <div class="relative w-48 h-48">
          <svg viewBox="0 0 100 100" class="transform -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#E5E7EB"
              stroke-width="20"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#0F766E"
              stroke-width="20"
              stroke-dasharray="251.2"
              stroke-dashoffset="62.8"
              class="transition-all duration-1000"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#2DD4BF"
              stroke-width="20"
              stroke-dasharray="251.2"
              stroke-dashoffset="125.6"
              class="transition-all duration-1000"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#99F6E4"
              stroke-width="20"
              stroke-dasharray="251.2"
              stroke-dashoffset="188.4"
              class="transition-all duration-1000"
            />
          </svg>
        </div>

        <div class="flex-1 space-y-4">
          <div
            v-for="project in projects"
            :key="project.id"
            class="flex items-center space-x-3"
          >
            <div :class="['w-6 h-6 rounded-full', project.color]"></div>
            <div>
              <div class="text-2xl font-medium">{{ project.amount }} €</div>
              <div class="text-gray-600">{{ project.name }}</div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="mt-12 flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-emerald-800 transition-colors"
      >
        <span class="text-lg">+</span>
        Injecter dans le projet
      </button>
    </div>

    <!-- Balance Section -->
    <div class="space-y-4">
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <div class="flex justify-between items-start mb-6">
          <h2 class="text-2xl font-bold text-navy-900">Mon solde</h2>
          <a
            href="#"
            class="text-teal-600 hover:text-teal-700 underline text-sm"
          >
            Voir en détail
          </a>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-4xl font-bold text-navy-900">349,35 €</span>
          <button
            class="px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-2"
          >
            <span class="text-xl font-bold">+</span>
            <span>Ajouter</span>
          </button>
        </div>
      </div>

      <!-- History Section -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-bold text-navy-900 mb-6">Historique</h2>

        <!-- Scrollable Content -->
        <div
          class="pr-4 space-y-4 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-gray-200"
        >
          <div
            v-for="transaction in transactions"
            :key="transaction.date"
            class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
          >
            <span class="text-navy-900 text-lg">{{ transaction.date }}</span>
            <span class="text-teal-600 font-medium text-lg">{{
              transaction.amount
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Project Section -->
  <div class="mt-8">
    <div class="flex items-center gap-2 mb-6">
      <h2 class="text-2xl font-bold text-navy-900">Projet P</h2>
      <button class="text-gray-400">
        <span class="sr-only">Toggle projet</span>
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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

    <!-- Manuscripts -->
    <div class="bg-white rounded-lg p-6 shadow-sm">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-navy-900">Manuscrits</h3>
        <a href="#" class="text-teal-600 hover:text-teal-700 text-sm"
          >Voir dans le projet</a
        >
      </div>

      <div class="space-y-4">
        <div
          v-for="(manuscript, index) in manuscripts"
          :key="index"
          class="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
        >
          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <span class="font-medium">{{ manuscript.number }}</span>
              <span class="font-medium">{{ manuscript.title }}</span>
            </div>
            <div class="flex items-center gap-2 text-sm">
              <span class="text-red-500">{{ manuscript.status }}</span>
              <span class="text-gray-400">{{ manuscript.date }}</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="flex items-center">
              <img
                v-for="i in 2"
                :key="i"
                :src="`/images/avatar-${i}.png`"
                :alt="`Reader ${i}`"
                class="w-6 h-6 rounded-full border-2 border-white"
              />
              <div
                class="w-6 h-6 bg-emerald-600 rounded-full -ml-2 flex items-center justify-center text-white text-xs"
              >
                +3
              </div>
            </div>
            <span class="text-gray-400"
              >{{ manuscript.corrections }} nouvelles corrections</span
            >
            <button class="text-gray-400 hover:text-gray-600">
              <span class="sr-only">More options</span>
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- candidatures -->
  <div class="max-w-7xl mx-auto p-6 bg-gray-50">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-navy-900">
        Candidatures
        <span class="text-red-400 text-lg ml-1">(5)</span>
      </h1>
      <button class="text-gray-400">
        <span class="sr-only">Collapse</span>
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
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>

    <!-- Search Bar -->
    <div class="relative mb-6">
      <input
        type="text"
        placeholder="Rechercher un nom, un mot clé, un numéro de chapitre..."
        class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
      />
      <div
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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

    <!-- Filters -->
    <div class="flex gap-2 mb-6 flex-wrap">
      <span class="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm">
        Orthographe (2)
      </span>
      <span
        class="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-sm"
      >
        Scénario (1)
      </span>
      <span
        class="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm"
      >
        Cohérence (1)
      </span>
      <span class="px-3 py-1 rounded-full bg-teal-100 text-teal-600 text-sm">
        Commentaire (1)
      </span>
    </div>

    <!-- Applications Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="application in applications"
        :key="application.id"
        class="bg-white rounded-lg p-6 shadow-sm"
      >
        <!-- Chapter and Tag Info -->
        <div class="flex justify-between mb-4">
          <div class="text-sm text-gray-600">
            <span class="text-purple-600">Candidate pour</span>
            <span class="text-navy-900 font-medium ml-1">{{
              application.chapters
            }}</span>
            <span
              class="ml-2 px-2 py-0.5 rounded-full text-xs"
              :class="getTagClass(application.tag)"
            >
              {{ application.tag }}
            </span>
          </div>
          <button class="text-gray-400 hover:text-gray-600">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </button>
        </div>

        <!-- User Info and Rating -->
        <div class="flex gap-4 mb-4">
          <img
            :src="application.avatar"
            alt=""
            class="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 class="font-bold text-navy-900">{{ application.name }}</h3>
            <div class="flex items-center gap-2">
              <div class="flex">
                <template v-for="n in 5" :key="n">
                  <svg
                    class="w-5 h-5"
                    :class="
                      n <= application.rating
                        ? 'text-green-600'
                        : 'text-gray-300'
                    "
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                </template>
              </div>
              <span class="text-red-400 text-sm"
                >(Sur {{ application.totalReviews }} avis)</span
              >
            </div>
          </div>
        </div>

        <!-- Description -->
        <p class="text-gray-600 mb-4 text-sm">
          {{ application.description }}
        </p>

        <!-- Action Buttons -->
        <div class="flex gap-3">
          <button
            class="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm"
          >
            Refuser
          </button>
          <button
            class="flex-1 px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors text-sm"
          >
            Accepter la candidature
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
});

interface Transaction {
  date: string;
  amount: string;
}

interface Manuscript {
  number: string;
  title: string;
  status: string;
  date: string;
  corrections: string;
}

const transactions = ref<Transaction[]>([
  { date: "28 nov. 2024", amount: "+ 70 €" },
  { date: "04 oct. 2024", amount: "+ 120 €" },
  { date: "26 jul. 2024", amount: "+ 150 €" },
  { date: "3 jan. 2024", amount: "+ 300 €" },
  { date: "28 nov. 2024", amount: "+ 70 €" },
  { date: "04 oct. 2024", amount: "+ 120 €" },
  { date: "26 jul. 2024", amount: "+ 150 €" },
  { date: "3 jan. 2024", amount: "+ 300 €" },
]);

const manuscripts = ref<Manuscript[]>([
  {
    number: "00",
    title: "Titre du manuscrit",
    status: "(En correction)",
    date: "00/00/00",
    corrections: "1",
  },
  {
    number: "00",
    title: "Titre du manuscrit",
    status: "(En correction)",
    date: "00/00/00",
    corrections: "8",
  },
  {
    number: "00",
    title: "Titre du manuscrit",
    status: "(En correction)",
    date: "00/00/00",
    corrections: "12",
  },
  {
    number: "00",
    title: "Titre du manuscrit",
    status: "(En correction)",
    date: "00/00/00",
    corrections: "5",
  },
]);

const projects = ref([
  {
    id: 1,
    name: "Projet P",
    amount: "349,35",
    color: "bg-teal-800",
  },
  {
    id: 2,
    name: "Projet J",
    amount: "355,29",
    color: "bg-teal-500",
  },
  {
    id: 3,
    name: "Projet K",
    amount: "139,70",
    color: "bg-teal-200",
  },
]);

interface Application {
  id: number;
  chapters: string;
  tag: string;
  avatar: string;
  name: string;
  rating: number;
  totalReviews: number;
  description: string;
}

const applications = ref<Application[]>([
  {
    id: 1,
    chapters: "Chapitres 3 - 15",
    tag: "Orthographe",
    avatar: "/images/profil-picture-2.png",
    name: "Romain I.",
    rating: 3,
    totalReviews: 24,
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 2,
    chapters: "Chapitres 1 - 7",
    tag: "Cohérence",
    avatar: "/images/profil-picture-1.png",
    name: "Nolwenn T.",
    rating: 3,
    totalReviews: 24,
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 3,
    chapters: "Chapitre 16",
    tag: "Commentaire",
    avatar: "/images/profil-picture-3.png",
    name: "Romain I.",
    rating: 3,
    totalReviews: 24,
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 4,
    chapters: "Chapitres 8 - 12",
    tag: "Orthographe",
    avatar: "/images/profil-picture-2.png",
    name: "Laurent U.",
    rating: 3,
    totalReviews: 24,
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 5,
    chapters: "Chapitre 6",
    tag: "Scénario",
    avatar: "/images/profil-picture-1.png",
    name: "Laurent U.",
    rating: 3,
    totalReviews: 24,
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
]);

const getTagClass = (tag: string) => {
  switch (tag) {
    case "Orthographe":
      return "bg-red-100 text-red-600";
    case "Scénario":
      return "bg-yellow-100 text-yellow-600";
    case "Cohérence":
      return "bg-orange-100 text-orange-600";
    case "Commentaire":
      return "bg-teal-100 text-teal-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
</script>
<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: green;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: transparent;
}

.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: #e5e7eb;
}
</style>
