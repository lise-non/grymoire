<template>
  <div
    class="max-w-7xl mx-auto transition-all duration-300"
    :class="props.isSidebarOpen ? 'ml-64 mr-64' : 'ml-16 mr-64'"
  >
    <!-- Project Header -->
    <div class="flex gap-6 mb-8 bg-white rounded-3xl shadow-sm p-8 mb-6">
      <img
        alt="Project cover"
        src="/public/images/cover.png"
        class="w-48 h-auto rounded-lg object-cover bg-gray-100"
      />

      <div class="flex-1">
        <div class="flex justify-between items-start">
          <div>
            <div class="flex items-center gap-2">
              <h1 class="text-2xl font-bold text-navy-900">Ceux Qui Servent</h1>
              <span class="text-sm text-red-500">(En cours)</span>
            </div>
            <p class="text-sm text-gray-600 mt-1">Par Hibou Guinée</p>
          </div>
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
              />
            </svg>
          </button>
        </div>

        <div class="flex gap-2 mt-4">
          <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Magie</span>
          <span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >Animaux fantastiques</span
          >
          <span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >Rébellion</span
          >
        </div>

        <p class="mt-4 text-gray-700">
          Dans un monde où les griffons règnent sur les cieux, les humains ne
          sont que des serviteurs. Mais tandis qu'une rébellion grandit,
          l'équilibre millénaire vacille. Entre alliances fragiles, trahisons et
          batailles épiques, Ceux qui servent vous plonge dans un univers où le
          destin se joue au rythme des ailes déployées. Qui choisirez-vous de
          suivre : les maîtres du ciel ou ceux qui rêvent de liberté ?
        </p>

        <div class="flex items-center gap-2 mt-4">
          <div class="flex -space-x-2">
            <img
              src="/public/images/avatar-4.png"
              alt="Reader 1"
              class="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
            />
            <img
              src="/public/images/avatar-1.png"
              alt="Reader 2"
              class="w-8 h-8 rounded-full border-2 border-white bg-gray-300"
            />
          </div>
          <span class="text-sm text-gray-600"
            >2 bêta lecteurs travaillent sur ce projet</span
          >
        </div>
      </div>
    </div>

    <!-- Missions Section -->
    <div class="bg-white rounded-3xl shadow-sm p-8 mb-6">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-2">
          <h2 class="text-2xl font-bold text-navy -900">Mes missions</h2>
          <span class="text-red-400">(2)</span>
        </div>
        <button class="p-2 hover:bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div class="flex flex-wrap gap-3 mb-8">
        <span class="px-4 py-2 bg-red-50 text-red-700 rounded-xl text-sm">
          Orthographe (1)
        </span>
        <span class="px-4 py-2 bg-amber-50 text-amber-700 rounded-xl text-sm">
          Scénario (1)
        </span>
        <span class="px-4 py-2 bg-orange-50 text-orange-700 rounded-xl text-sm">
          Cohérence (0)
        </span>
        <span
          class="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm"
        >
          Commentaire (0)
        </span>
      </div>

      <!-- Mission Cards -->
      <div class="space-y-6">
        <!-- Orthography Mission -->
        <div class="bg-gray-50 rounded-2xl p-6">
          <div class="flex items-start gap-4 mb-4">
            <span
              class="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm whitespace-nowrap"
            >
              Orthographe
            </span>
            <span class="text-gray-600">Chapitres 12 - 16</span>
            <span class="ml-auto text-gray-600">0.5 € / Page</span>
          </div>

          <p class="text-gray-700 mb-4">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit.
          </p>

          <div class="flex items-center gap-3">
            <div class="flex -space-x-2">
              <img
                src="/public/images/avatar-1.png"
                alt="Reader 1"
                class="w-6 h-6 rounded-full border-2 border-white bg-gray-200"
              />
              <img
                src="/public/images/avatar-3.png"
                alt="Reader 2"
                class="w-6 h-6 rounded-full border-2 border-white bg-gray-300"
              />
            </div>
            <span class="text-sm text-gray-600"
              >2 bêta lecteurs travaillent actuellement sur cette mission</span
            >
          </div>
        </div>

        <!-- Script Mission -->
        <div class="bg-gray-50 rounded-2xl p-6">
          <div class="flex items-start gap-4 mb-4">
            <span
              class="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-sm whitespace-nowrap"
            >
              Scénario
            </span>
            <span class="text-gray-600">Chapitres 12 - 16</span>
            <span class="ml-auto text-gray-600">0.5 € / Page</span>
          </div>

          <p class="text-gray-700 mb-4">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit.
          </p>

          <div class="flex items-center gap-3">
            <div class="flex -space-x-2">
              <img
                src="/public/images/avatar-2.png"
                alt="Reader 1"
                class="w-6 h-6 rounded-full border-2 border-white bg-gray-200"
              />
              <img
                src="/public/images/avatar-4.png"
                alt="Reader 2"
                class="w-6 h-6 rounded-full border-2 border-white bg-gray-300"
              />
            </div>
            <span class="text-sm text-gray-600"
              >2 bêta lecteurs travaillent actuellement sur cette mission</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Manuscripts Section -->
    <div class="bg-white rounded-lg shadow-sm p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <h2 class="text-xl font-bold text-navy-900">Manuscrits</h2>
          <button class="hover:bg-gray-100 rounded-lg p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 12l7-7 7 7"></path>
            </svg>
          </button>
        </div>
        <span class="text-gray-500">(5)</span>
      </div>

      <div class="space-y-2">
        <NuxtLink to="reader-comment">
          <!-- Active Manuscripts -->
          <div
            class="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
          >
            <div>
              <div class="flex items-center gap-2">
                <span class="font-medium">08</span>
                <span class="font-medium">Titre du manuscrit</span>
                <span class="text-sm text-gray-500">15/08/2023</span>
              </div>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-sm text-gray-600"
                  >13 corrections validées</span
                >
                <span class="text-sm text-red-500">(En correction)</span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span
                class="px-2 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                >+9</span
              >
              <button class="p-2 hover:bg-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </NuxtLink>

        <!-- Other manuscripts (collapsed) -->
        <div
          v-for="i in 4"
          :key="i"
          class="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
        >
          <div>
            <div class="flex items-center gap-2">
              <span class="font-medium">0{{ 7 - i }}</span>
              <span class="font-medium">Titre du manuscrit</span>
              <span class="text-sm text-gray-500">00/00/00</span>
            </div>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-sm text-gray-600"
                >{{ 50 + i * 20 }} corrections validées</span
              >
            </div>
          </div>
          <button class="p-2 hover:bg-gray-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
});
</script>
