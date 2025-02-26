// components/NotificationsSidebar.vue
<script setup>
import { ref } from "vue";

const notifications = ref([
  {
    id: 1,
    project: "Ceux Qui Servent",
    time: "6m",
    message: "63 retours non lues",
    read: false,
  },
  {
    id: 2,
    project: "Dune",
    time: "12h",
    message: "5 candidatures",
    read: false,
  },
]);

const messages = ref([
  {
    id: 1,
    name: "Melvin P.",
    time: "12m",
    message: "Ah oui, au temps pour moi",
    read: false,
    avatar: "/avatars/melvin.jpg",
  },
  {
    id: 2,
    name: "Manon B.",
    time: "1h",
    message: "Bonjour, je voulais savoir si vous auriez bes...",
    read: false,
    avatar: "/avatars/manon.jpg",
  },
  {
    id: 3,
    name: "Projet : Ceux qui servent",
    time: "3h",
    message: "Ok 👍",
    read: false,
    avatar: "/avatars/ceux-qui-servent.jpg",
  },
  {
    id: 4,
    name: "Florian M.",
    time: "3h",
    message: "Okok, on se redit ça alors :^)",
    read: false,
    avatar: "/avatars/florian.jpg",
  },
  {
    id: 5,
    name: "Pouty",
    time: "12h",
    message: "Waf",
    read: false,
    avatar: "/avatars/pouty.jpg",
  },
  {
    id: 6,
    name: "Cassandre L.",
    time: "23h",
    message: "D'accord.",
    read: false,
    avatar: "/avatars/cassandre.jpg",
  },
  {
    id: 7,
    name: "Laura P.",
    time: "1j",
    message: "Salut, tu vas accepter un de mes retours ou je...",
    read: false,
    avatar: "/avatars/laura.jpg",
  },
  {
    id: 8,
    name: "Projet",
    time: "1j",
    message: "Salut vous avez vu le projet là ca avance de fo...",
    read: false,
    avatar: "/avatars/projet.jpg",
  },
  {
    id: 9,
    name: "Romain I.",
    time: "4j",
    message: "Salut Romain, merci pour ta demande, je vois...",
    read: false,
    avatar: "/avatars/romain.jpg",
  },
  {
    id: 10,
    name: "Nolwenn T.",
    time: "4j",
    message: "On dit galette",
    read: false,
    avatar: "/avatars/nolwenn.jpg",
  },
  {
    id: 11,
    name: "Laurent U.",
    time: "12j",
    message: "Moi la lecture c'est mon truc OK, je lis je lis je li...",
    read: false,
    avatar: "/avatars/laurent.jpg",
  },
  {
    id: 12,
    name: "Sarah O.",
    time: "12j",
    message: "ACCEPTE MOI ACCEPTE MOI ACCEPTE MOI A...",
    read: false,
    avatar: "/avatars/sarah.jpg",
  },
]);

const searchQuery = ref("");
</script>

<template>
  <div
    class="fixed top-0 right-0 h-screen w-64 max-w-md bg-white rounded-lg shadow-sm p-4 overflow-y-auto z-50"
  >
    <!-- Barre de recherche -->
    <div class="flex items-center mb-6">
      <div class="relative flex-1">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher une discussion, une notifi..."
          class="w-full py-2 px-4 border border-gray-300 rounded-full text-gray-600 focus:outline-none focus:border-indigo-500"
        />
        <div class="absolute right-3 top-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
      <button class="ml-2 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    <!-- Section Notifications -->
    <div class="mb-6">
      <div class="flex items-center mb-4">
        <h2 class="text-2xl font-bold text-navy-900">Notifications</h2>
        <div
          class="ml-2 bg-pink-100 text-pink-600 rounded-full px-2 py-0.5 text-xs font-medium"
        >
          1
        </div>
      </div>

      <div class="space-y-4">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          class="flex items-start justify-between group"
        >
          <div class="flex items-start space-x-3">
            <button class="text-gray-400 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div>
              <div class="flex items-center">
                <span class="font-semibold text-navy-900">{{
                  notification.project
                }}</span>
                <span class="ml-2 text-gray-500 text-sm"
                  >• {{ notification.time }}</span
                >
              </div>
              <p class="text-xs text-pink-500">{{ notification.message }}</p>
            </div>
          </div>
          <div class="w-2 h-2 rounded-full bg-pink-500"></div>
        </div>
      </div>
    </div>

    <!-- Section Messages -->
    <div>
      <div class="flex items-center mb-4">
        <h2 class="text-2xl font-bold text-navy-900">Vos messages</h2>
        <div
          class="ml-2 bg-pink-100 text-pink-600 rounded-full px-2 py-0.5 text-xs font-medium"
        >
          4
        </div>
      </div>

      <div class="space-y-4">
        <div
          v-for="message in messages"
          :key="message.id"
          class="flex items-start justify-between group"
        >
          <div class="flex items-start space-x-3">
            <img
              :src="message.avatar"
              :alt="message.name"
              class="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <div class="flex items-center">
                <span class="text-sm font-semibold text-navy-900">{{
                  message.name
                }}</span>
                <span class="ml-2 text-gray-500 text-sm"
                  >• {{ message.time }}</span
                >
              </div>
              <p class="text-sm text-gray-600">{{ message.message }}</p>
            </div>
          </div>
          <div
            class="w-2 h-2 rounded-full"
            :class="{
              'bg-pink-500': !message.read,
              'bg-transparent': message.read,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
