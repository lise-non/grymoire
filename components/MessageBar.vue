// components/NotificationsSidebar.vue
<script setup>
import { ref, computed } from "vue";

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
    avatar: "/images/pp-1.jpg",
  },
  {
    id: 2,
    name: "Manon B.",
    time: "1h",
    message: "Bonjour, je voulais savoir si vous auriez bes...",
    read: true,
    avatar: "/images/pp-2.jpg",
  },
  {
    id: 3,
    name: "Projet : Ceux qui servent",
    time: "3h",
    message: "Ok 👍",
    read: false,
    avatar: "/images/pp-3.jpg",
  },
  {
    id: 4,
    name: "Florian M.",
    time: "3h",
    message: "Okok, on se redit ça alors :^)",
    read: false,
    avatar: "/images/pp-4.jpg",
  },
  {
    id: 6,
    name: "Cassandre L.",
    time: "23h",
    message: "D'accord.",
    read: false,
    avatar: "/images/pp-6.jpg",
  },
  {
    id: 7,
    name: "Laura P.",
    time: "1j",
    message: "Salut, tu vas accepter un de mes retours ou je...",
    read: true,
    avatar: "/images/pp-7.jpg",
  },
  {
    id: 8,
    name: "Projet",
    time: "1j",
    message: "Salut vous avez vu le projet là ca avance de fo...",
    read: true,
    avatar: "/images/pp-8.jpg",
  },
  {
    id: 9,
    name: "Romain I.",
    time: "4j",
    message: "Salut Romain, merci pour ta demande, je vois...",
    read: true,
    avatar: "/images/pp-9.jpg",
  },
  {
    id: 10,
    name: "Nolwenn T.",
    time: "4j",
    message: "On dit galette",
    read: true,
    avatar: "/images/pp-10.jpg",
  },
  {
    id: 11,
    name: "Laurent U.",
    time: "12j",
    message: "Moi la lecture c'est mon truc OK, je lis je lis je li...",
    read: true,
    avatar: "/images/pp-11.jpg",
  },
  {
    id: 12,
    name: "Sarah O.",
    time: "12j",
    message: "ACCEPTE MOI ACCEPTE MOI ACCEPTE MOI A...",
    read: true,
    avatar: "/images/pp-12.jpg",
  },
]);

const searchQuery = ref("");

// Props for v-model binding
const props = defineProps({
  messagebar: {
    type: Boolean,
    default: false,
  },
});

// Emit events for v-model
const emit = defineEmits(["update:messagebar"]);

// Use the prop value for isOpen state
const isOpen = computed({
  get() {
    return props.messagebar;
  },
  set(value) {
    emit("update:messagebar", value);
  },
});

// Toggle sidebar
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="relative">
    <!-- Collapsed sidebar view -->
    <div
      v-if="!isOpen"
      class="fixed top-0 right-0 w-16 bg-gray-50 shadow-sm flex flex-col items-center py-4 z-40 mr-4 my-4 rounded-lg max-h-[calc(100vh-2rem)] overflow-auto"
    >
      <!-- Back/toggle button -->
      <button
        @click="toggleSidebar"
        class="mb-4 p-2 text-navy-900"
        aria-label="Open notifications"
      >
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
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </button>

      <!-- Notification count -->
      <div class="relative mb-4">
        <div
          class="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium"
        >
          {{ notifications.filter((n) => !n.read).length }}
        </div>
      </div>

      <!-- Divider -->
      <div class="w-8 h-px bg-gray-200 mb-4"></div>

      <!-- Message avatars -->
      <div
        class="flex flex-col items-center space-y-4 overflow-y-auto max-h-[80vh] w-full px-4"
      >
        <div
          v-for="message in messages"
          :key="message.id"
          class="relative cursor-pointer"
          @click="toggleSidebar"
        >
          <img
            :src="message.avatar"
            :alt="message.name"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div
            v-if="!message.read"
            class="absolute -top-1 -right-1 bg-pink-500 w-3 h-3 rounded-full"
          ></div>
        </div>
      </div>
    </div>

    <!-- Expanded Sidebar -->
    <div
      class="fixed top-0 right-0 max-h-[calc(100vh-2rem)] bg-white shadow-sm p-4 overflow-y-auto z-40 transition-all duration-300 py-4 z-40 mr-4 my-4 rounded-xl"
      :class="
        isOpen
          ? 'w-64 max-w-md opacity-100'
          : 'w-0 opacity-0 pointer-events-none'
      "
    >
      <!-- Close button -->
      <button
        @click="toggleSidebar"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        aria-label="Close notifications"
      >
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Sidebar content -->
      <div
        :class="{ 'opacity-0': !isOpen, 'opacity-100': isOpen }"
        class="transition-opacity duration-300"
      >
        <!-- Barre de recherche -->
        <div class="flex items-center mb-6 mt-10">
          <div class="relative flex-1">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher une discu.."
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
        </div>

        <!-- Section Notifications -->
        <div class="mb-6">
          <div class="flex items-center mb-4">
            <h2 class="text-2xl font-bold text-navy-900">Notifications</h2>
            <div
              class="ml-2 bg-pink-100 text-pink-600 rounded-full px-2 py-0.5 text-xs font-medium"
            >
              {{ notifications.filter((n) => !n.read).length }}
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
                  <p class="text-xs text-pink-500">
                    {{ notification.message }}
                  </p>
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
              {{ messages.filter((m) => !m.read).length }}
            </div>
          </div>

          <div class="">
            <NuxtLink to="/messages/chat">
              <div
                v-for="message in messages"
                :key="message.id"
                class="flex items-start justify-between group py-2"
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
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
