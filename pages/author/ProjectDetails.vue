<template>
  <div
    class="min-h-screen bg-gray-50 py-6"
    :class="[
      props.isSidebarOpen ? 'ml-64' : 'ml-16',
      props.isNotificationSidebarOpen ? 'mr-72' : 'mr-16',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <!-- Hero Section avec les détails du livre -->
      <div class="bg-white shadow mb-6 rounded-lg">
        <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row gap-8">
            <!-- Image du livre -->
            <div class="w-full md:w-1/4">
              <img
                src="/public/images/cover.png"
                alt="Ceux Qui Servent"
                class="w-full rounded-lg shadow-lg"
              />
            </div>

            <!-- Détails du livre -->
            <div class="w-full md:w-3/4">
              <div class="flex justify-between items-start">
                <div>
                  <h1 class="text-3xl font-bold text-[#20214B]">
                    Ceux Qui Servent
                    <span class="text-sm text-red-400 ml-2">(En cours)</span>
                  </h1>
                  <p class="text-gray-600 mt-2">Par Hibou Quinne</p>
                </div>
                <!-- Actions -->
                <div class="flex space-x-2">
                  <button class="p-2 hover:bg-gray-100 rounded-full">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H19C19.5523 21 20 20.5523 20 20V10.5714C20 10.0191 20.4477 9.57143 21 9.57143C21.5523 9.57143 22 10.0191 22 10.5714V20C22 21.6569 20.6569 23 19 23H3C1.34315 23 0 21.6569 0 20V4C0 2.34315 1.34315 1 3 1H12.4286C12.9809 1 13.4286 1.44772 13.4286 2C13.4286 2.55228 12.9809 3 12.4286 3H3Z"
                        fill="#20214B"
                      />
                      <path
                        d="M22.71 4.0425C23.1 3.6525 23.1 3.0025 22.71 2.6325L20.37 0.2925C20 -0.0975 19.35 -0.0975 18.96 0.2925L17.12 2.1225L20.87 5.8725M5 14.2525V18.0025H8.75L19.81 6.9325L16.06 3.1825L5 14.2525Z"
                        fill="#20214B"
                      />
                    </svg>
                  </button>
                  <button class="p-2 hover:bg-gray-100 rounded-full">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
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
              </div>

              <!-- Tags -->
              <div class="flex gap-2 mt-4">
                <span
                  class="px-3 py-1 bg-[#D6E3E2] text-[#384273] rounded-lg text-sm"
                  >Magie</span
                >
                <span
                  class="px-3 py-1 bg-[#D6E3E2] text-[#384273] rounded-lg text-sm"
                  >Animaux fantastiques</span
                >
                <span
                  class="px-3 py-1 bg-[#D6E3E2] text-[#384273] rounded-lg text-sm"
                  >Rébellion</span
                >
              </div>

              <!-- Description -->
              <p class="mt-6 text-gray-700 leading-relaxed">
                Dans un monde où les griffons règnent sur les cieux, les humains
                ne sont que des serviteurs. Mais tandis qu'une rébellion gronde,
                l'équilibre millénaire vacille. Entre alliances fragiles,
                trahisons et batailles épiques, Ceux qui servent vous plonge
                dans un univers où le destin se joue au rythme des ailes
                déployées. Qui choisirez-vous de suivre : les maîtres du ciel ou
                ceux qui rêvent de liberté ?
              </p>

              <!-- Beta lecteurs -->
              <div class="mt-6 flex items-center gap-2">
                <div class="flex -space-x-2">
                  <img
                    src="/public/images/pp-7.jpg"
                    class="w-8 h-8 rounded-full border-2 border-white"
                    alt="Beta reader"
                  />
                  <img
                    src="/public/images/pp-1.jpg"
                    class="w-8 h-8 rounded-full border-2 border-white"
                    alt="Beta reader"
                  />
                </div>
                <span class="text-gray-600 text-sm">
                  2 bêta lecteurs travaillent sur ce projet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenu Principal -->
      <!-- Section Beta lecteurs -->
      <div class="bg-white rounded-lg shadow">
        <div class="p-6">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold text-[#20214B]">Bêta-lecteurs</h2>
            <NuxtLink to="Collaborators">
              <button
                class="bg-[#0B5B50] text-white px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors"
              >
                Gérer les collaborateurs
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <!-- En-tête Missions -->
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-[#20214B]">
            Missions
            <span class="text-sm text-gray-500 ml-1">(7)</span>
          </h2>
          <button class="p-2">
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <!-- Filtres -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span
            class="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-700"
          >
            Orthographe (2)
          </span>
          <span
            class="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700"
          >
            Scénario (2)
          </span>
          <span
            class="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-700"
          >
            Cohérence (3)
          </span>
          <span
            class="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700"
          >
            Commentaire (0)
          </span>
          <span
            class="px-3 py-1 rounded-full text-sm bg-[#D6E3E2] text-[#384273]"
          >
            Ouvertes (4)
          </span>
          <span
            class="px-3 py-1 rounded-full text-sm bg-[#D6E3E2] text-[#384273]"
          >
            Fermées (3)
          </span>
        </div>

        <!-- Grid des missions -->
        <div class="grid grid-cols-2 gap-4">
          <!-- Carte Ajouter une mission -->
          <div
            class="bg-emerald-100 rounded-lg p-8"
            @click="showMissionCard = true"
          >
            <div class="flex flex-col items-center justify-center h-full">
              <img
                src="/public/images/mission.png"
                alt="Ajouter une mission"
                class="w-auto h-32 mb-4"
              />
              <span class="text-lg font-medium text-emerald-800">
                Ajouter une mission
              </span>
            </div>
          </div>

          <!-- Cartes de mission -->
          <div
            v-for="mission in missions"
            :key="mission.id"
            class="bg-white rounded-lg border border-gray-200 p-4"
          >
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center gap-2">
                <span
                  :class="[
                    'px-3 py-1 rounded-full text-sm',
                    missionTypeStyles[mission.type],
                  ]"
                >
                  {{ mission.type }}
                </span>
                <span class="text-gray-700">{{ mission.chapters }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-gray-600 text-sm">{{ mission.price }}</span>
                <button class="p-1">
                  <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <p class="text-gray-600 text-sm mb-4">
              {{ mission.description }}
            </p>

            <div class="flex items-center gap-2 mb-4">
              <div class="flex -space-x-2">
                <img
                  v-for="(reader, index) in mission.betaReaders.pps"
                  :key="index"
                  :src="reader"
                  :alt="'Beta lecteur'"
                  class="w-6 h-6 rounded-full border-2 border-white"
                />
              </div>
              <span class="text-sm text-gray-600">
                {{ mission.betaReaders.count }} bêta lecteurs travaillent
                actuellement sur cette mission
              </span>
            </div>

            <div class="flex gap-2">
              <button
                class="flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50"
              >
                Candidatures
                <span
                  class="ml-2 px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full"
                >
                  {{ mission.applications }}
                </span>
              </button>
              <button
                class="px-4 py-2 bg-[#0B5B50] text-white rounded-lg text-sm hover:bg-emerald-800"
              >
                Voir les Beta.lecteurs
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow p-6">
        <!-- En-tête -->
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold text-[#20214B]">
            Gérer les manuscrits
            <span class="text-sm text-gray-500 ml-1">(8)</span>
          </h2>
          <button class="p-2">
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <!-- Filtres -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span
            class="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-700"
          >
            En correction (3)
          </span>
          <span
            class="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700"
          >
            Clôturer (2)
          </span>
          <span class="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700">
            Commentaire (0)
          </span>
        </div>

        <!-- Bouton Ajouter -->
        <NuxtLink to="../NewManuscrit">
          <div
            class="bg-emerald-100 rounded-lg p-4 mb-6 hover:bg-emerald-50 transition-colors"
          >
            <div class="flex items-center gap-2 text-[#0B5B50]">
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span class="font-medium">Ajouter un manuscrit</span>
            </div>
          </div>
        </NuxtLink>

        <!-- Liste des manuscrits -->
        <div class="space-y-2">
          <div
            v-for="manuscript in manuscripts"
            :key="manuscript.id"
            class="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
          >
            <NuxtLink to="author-comment">
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-medium text-navy-900">
                      {{ manuscript.number.toString().padStart(2, "0") }}
                      {{ manuscript.title }}
                    </h3>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="text-sm text-gray-600">
                        {{ manuscript.corrections }} corrections validées
                      </span>
                      <span
                        v-if="manuscript.status"
                        class="text-sm text-pink-500"
                      >
                        ({{ manuscript.status }})
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span
                      v-if="manuscript.notificationCount"
                      class="w-6 h-6 flex items-center justify-center bg-pink-100 text-pink-700 rounded-full text-sm"
                    >
                      {{ manuscript.notificationCount }}
                    </span>
                    <button class="p-1">
                      <svg
                        class="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                        />
                      </svg>
                    </button>
                    <button v-if="manuscript.isComplete" class="p-1">
                      <svg
                        class="w-5 h-5 text-emerald-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p class="text-sm text-gray-500 mt-1">{{ manuscript.date }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <MissionCard
      :showMissionCard="showMissionCard"
      @update:showMissionCard="showMissionCard = $event"
    >
    </MissionCard>
  </div>
</template>

<script setup>
import MissionCard from "~/components/MissionCard.vue";

const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
  isNotificationSidebarOpen: Boolean,
});

const currentMission = computed(() => missions.value[1]);

const showMissionCard = ref(false);
const missions = ref([
  {
    id: 1,
    type: "Orthographe",
    chapters: "Chapitres 12 - 16",
    price: "0.5 € / Page",
    description:
      "Cette romance contemporaine joue sur l'alternance des points de vue entre les deux protagonistes. Votre mission est d'évaluer si chaque personnage possède une voix narrative distincte et authentique. Les perspectives différentes sur les mêmes événements enrichissent-elles la compréhension des relations ou créent-elles des redondances ? Nous attendons des suggestions pour renforcer l'unicité de chaque point de vue.",
    betaReaders: {
      count: 2,
      pps: ["/images/pp-4.jpg", "/images/pp-12.jpg"],
    },
    applications: 3,
  },
  {
    id: 2,
    type: "Cohérence",
    chapters: "Chapitres 12 - 16",
    price: "0.5 € / Page",
    description:
      "Pour ce manuscrit de fantasy urbaine, nous recherchons un regard critique sur l'intégration des éléments fantastiques dans un cadre contemporain. Évaluez si la coexistence du surnaturel et du quotidien est crédible et cohérente. Les réactions des personnages face aux phénomènes extraordinaires sont-elles réalistes ? L'équilibre entre familiarité du monde moderne et étrangeté des éléments fantastiques est-il réussi ?",
    betaReaders: {
      count: 2,
      pps: ["/images/pp-9.jpg", "/images/pp-8.jpg"],
    },
    applications: 3,
  },
]);

const missionTypeStyles = {
  Orthographe: "bg-pink-100 text-pink-700",
  Scénario: "bg-yellow-100 text-yellow-700",
  Cohérence: "bg-orange-100 text-orange-700",
  Commentaire: "bg-green-100 text-green-700",
};

const manuscripts = ref([
  {
    id: 4,
    number: 4,
    title: "PAR L’EMBRASURE",
    status: "En correction",
    date: "16/02/25",
    corrections: "214 corrections validées",
    notificationCount: null,
    isComplete: false,
  },
  {
    id: 3,
    number: 3,
    title: "CEUX DE LA LUNE",
    status: "Terminé",
    date: "12/09/24",
    corrections: "169 corrections validées",
    notificationCount: null,
    isComplete: true,
  },
  {
    id: 2,
    number: 2,
    title: "PAR L’EMBRASURE",
    status: "En correction",
    date: "16/02/25",
    corrections: "284 corrections validées",
    notificationCount: null,
    isComplete: true,
  },
  {
    id: 1,
    number: 1,
    title: "À L’HORIZON",
    status: "Terminé",
    date: "09/09/24",
    corrections: "148 corrections validées",
    notificationCount: null,
    isComplete: true,
  },
]);
</script>
