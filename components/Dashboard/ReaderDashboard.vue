<template>
  <div class="max-w-full p-6 space-y-6">
    <!-- Header -->
    <h1 class="text-3xl font-bold text-navy-900 flex items-center gap-2">
      Bonjour Hibou
      <span class="text-2xl">👋</span>
    </h1>

    <div class="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Balance Card -->
      <div class="bg-white rounded-3xl p-8 space-y-8 h-fit">
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-navy-900">Mon solde</h2>
          <div class="text-4xl font-bold">349,35 €</div>
          <button
            class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Retirer
          </button>
        </div>

        <div class="space-y-2">
          <h2 class="text-xl font-bold text-navy-900">Déjà retiré</h2>
          <div class="text-3xl font-bold text-gray-600">127,53 €</div>
        </div>
      </div>

      <!-- Revenue Chart -->
      <div class="bg-white rounded-3xl p-8 col-span-2">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-navy-900">Revenus</h2>
          <div class="flex gap-2">
            <button class="p-2 rounded-lg hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button class="p-2 rounded-lg hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="h-64">
          <RevenuCharts />
        </div>

        <div class="flex gap-2 mt-4">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-emerald-800"></span>
            <span class="font-medium text-sm">367,12 €</span>
            <span class="text-gray-600 text-sm">Ceux Qui Servent</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-emerald-600"></span>
            <span class="font-medium text-sm">195,67 €</span>
            <span class="text-gray-600 text-sm">Tarot</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-emerald-200"></span>
            <span class="font-medium text-sm">129,30 €</span>
            <span class="text-gray-600 text-sm">Torat</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Current Reading -->
    <div
      class="bg-emerald-800 rounded-3xl p-6 flex items-center justify-between"
    >
      <div class="flex items-center gap-6">
        <img
          src="/public/images/cover.png"
          alt="Book cover"
          class="w-24 h-24 rounded-lg object-cover"
        />
        <div class="space-y-2">
          <h2 class="text-2xl font-bold text-white">Reprendre ma lecture</h2>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <span class="text-white uppercase text-sm font-medium"
                >CEUX QUI SERVENT</span
              >
              <span class="text-emerald-200">17 Point mort</span>
            </div>
            <span
              class="px-3 py-1 bg-emerald-700 text-white rounded-full text-sm"
              >7/12 pages</span
            >
          </div>
        </div>
      </div>
      <button
        class="px-6 py-3 bg-emerald-100 text-emerald-800 rounded-xl hover:bg-emerald-200 transition-colors flex items-center gap-2"
      >
        Continuer maintenant
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Detailed Missions Section -->
    <div class="bg-white rounded-3xl shadow-sm p-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-navy-900 flex items-center gap-2">
          Mes missions
          <span class="text-red-400">(2)</span>
        </h2>
        <button class="p-2 hover:bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- Mission Type Filters -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span class="px-4 py-2 bg-red-50 text-red-700 rounded-xl text-sm">
          Orthographe (2)
        </span>
        <span class="px-4 py-2 bg-amber-50 text-amber-700 rounded-xl text-sm">
          Scénario (1)
        </span>
        <span class="px-4 py-2 bg-orange-50 text-orange-700 rounded-xl text-sm">
          Cohérence (1)
        </span>
        <span
          class="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm"
        >
          Commentaire (0)
        </span>
      </div>

      <!-- Mission Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Orthography Mission 1 -->
        <div class="bg-gray-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span
              class="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm whitespace-nowrap"
            >
              Orthographe
            </span>
            <span class="text-gray-600">Chapitres 2 - 16</span>
            <span class="ml-auto text-gray-600 whitespace-nowrap"
              >0.5 € / Page</span
            >
          </div>

          <div class="flex items-center gap-3 mb-4">
            <img
              src="/public/images/profil-picture-1.png"
              alt="Marion R"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Marion R</span>
          </div>

          <h3 class="font-bold mb-3 text-navy-900">Ceux Qui Servent</h3>

          <p class="text-gray-700 text-sm mb-6">
            Dans un monde où les griffons règnent sur les cieux, les humains ne
            sont que des serviteurs. Mais tandis qu'une rébellion gronde,
            l'équilibre millénaire vacille. Entre alliances fragiles, trahisons
            et batailles épiques, Ceux qui servent vous plonge dans un univers
            où le destin se joue au rythme des ailes déployées...
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 4"
                :key="i"
                :src="`/images/avatar-${i}.png`"
                :alt="`Reader ${i}`"
                class="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <span class="text-sm text-gray-600">
              4 bêta lecteurs travaillent actuellement sur cette mission
            </span>
          </div>

          <div class="flex gap-3">
            <button
              class="px-4 py-2 border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-50 text-sm"
            >
              Voir le projet
            </button>
            <button
              class="px-4 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 text-sm"
            >
              Reprendre la beta lecture
            </button>
          </div>
        </div>

        <!-- Orthography Mission 2 -->
        <div class="bg-gray-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span
              class="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm whitespace-nowrap"
            >
              Orthographe
            </span>
            <span class="text-gray-600">Chapitres 17 - 24</span>
            <span class="ml-auto text-gray-600 whitespace-nowrap"
              >0.5 € / Page</span
            >
          </div>

          <div class="flex items-center gap-3 mb-4">
            <img
              src="/public/images/profil-picture-3.png"
              alt="Marion R"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Marion R</span>
          </div>

          <h3 class="font-bold mb-3 text-navy-900">Ceux Qui Servent</h3>

          <p class="text-gray-700 text-sm mb-6">
            Dans un monde où les griffons règnent sur les cieux, les humains ne
            sont que des serviteurs. Mais tandis qu'une rébellion gronde,
            l'équilibre millénaire vacille. Entre alliances fragiles, trahisons
            et batailles épiques, Ceux qui servent vous plonge dans un univers
            où le destin se joue au rythme des ailes déployées...
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 4"
                :key="i"
                :src="`/images/avatar-${i}.png`"
                :alt="`Reader ${i}`"
                class="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <span class="text-sm text-gray-600">
              4 bêta lecteurs travaillent actuellement sur cette mission
            </span>
          </div>

          <div class="flex gap-3">
            <button
              class="px-4 py-2 border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-50 text-sm"
            >
              Voir le projet
            </button>
            <button
              class="px-4 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 text-sm"
            >
              Reprendre la beta lecture
            </button>
          </div>
        </div>

        <!-- Coherence Mission -->
        <div class="bg-gray-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span
              class="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm whitespace-nowrap"
            >
              Cohérence
            </span>
            <span class="text-gray-600">Chapitres 12 - 16</span>
            <span class="ml-auto text-gray-600 whitespace-nowrap"
              >0.7 € / Page</span
            >
          </div>

          <div class="flex items-center gap-3 mb-4">
            <img
              src="/public/images/profil-picture-2.png"
              alt="Marion R"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Marion R</span>
          </div>

          <h3 class="font-bold mb-3 text-navy-900">Ceux Qui Servent</h3>

          <p class="text-gray-700 text-sm mb-6">
            Dans un monde où les griffons règnent sur les cieux, les humains ne
            sont que des serviteurs. Mais tandis qu'une rébellion gronde,
            l'équilibre millénaire vacille. Entre alliances fragiles, trahisons
            et batailles épiques, Ceux qui servent vous plonge dans un univers
            où le destin se joue au rythme des ailes déployées...
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 4"
                :key="i"
                :src="`/images/avatar-${i}.png`"
                :alt="`Reader ${i}`"
                class="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <span class="text-sm text-gray-600">
              4 bêta lecteurs travaillent actuellement sur cette mission
            </span>
          </div>

          <div class="flex gap-3">
            <button
              class="px-4 py-2 border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-50 text-sm"
            >
              Voir le projet
            </button>
            <button
              class="px-4 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 text-sm"
            >
              Continuer la beta lecture
            </button>
          </div>
        </div>

        <!-- Scenario Mission -->
        <div class="bg-gray-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span
              class="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-sm whitespace-nowrap"
            >
              Scénario
            </span>
            <span class="text-gray-600">Chapitres 12 - 16</span>
            <span class="ml-auto text-gray-600 whitespace-nowrap"
              >0.65 € / Page</span
            >
          </div>

          <div class="flex items-center gap-3 mb-4">
            <img
              src="/public/images/profil-picture-3.png"
              alt="Frank herbert"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Frank herbert</span>
          </div>

          <h3 class="font-bold mb-3 text-navy-900">Dune</h3>

          <p class="text-gray-700 text-sm mb-6">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit.
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 2"
                :key="i"
                :src="`/images/avatar-${i}.png`"
                :alt="`Reader ${i}`"
                class="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <span class="text-sm text-gray-600">
              2 bêta lecteurs travaillent actuellement sur cette mission
            </span>
          </div>

          <div class="flex gap-3">
            <button
              class="px-4 py-2 border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-50 text-sm"
            >
              Voir le projet
            </button>
            <button
              class="px-4 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 text-sm"
            >
              Continuer la beta lecture
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Candidature Section -->
    <div class="bg-white rounded-3xl shadow-sm p-8">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-navy-900 flex items-center gap-2">
          Candidatures à valider
          <span class="text-red-400">(2)</span>
        </h2>
        <button class="p-2 hover:bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <!-- Mission Type Filters -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span class="px-4 py-2 bg-red-50 text-red-700 rounded-xl text-sm">
          Orthographe (2)
        </span>
        <span class="px-4 py-2 bg-amber-50 text-amber-700 rounded-xl text-sm">
          Scénario (1)
        </span>
        <span class="px-4 py-2 bg-orange-50 text-orange-700 rounded-xl text-sm">
          Cohérence (1)
        </span>
        <span
          class="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm"
        >
          Commentaire (0)
        </span>
      </div>

      <!-- Mission Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Orthography Mission 1 -->
        <div class="bg-gray-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span
              class="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm whitespace-nowrap"
            >
              Orthographe
            </span>
            <span class="text-gray-600">Chapitres 2 - 16</span>
            <span class="ml-auto text-gray-600 whitespace-nowrap"
              >0.5 € / Page</span
            >
          </div>

          <div class="flex items-center gap-3 mb-4">
            <img
              src="/public/images/profil-picture-3.png"
              alt="Marion R"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Marion R</span>
          </div>

          <h3 class="font-bold mb-3 text-navy-900">Ceux Qui Servent</h3>

          <p class="text-gray-700 text-sm mb-6">
            Dans un monde où les griffons règnent sur les cieux, les humains ne
            sont que des serviteurs. Mais tandis qu'une rébellion gronde,
            l'équilibre millénaire vacille. Entre alliances fragiles, trahisons
            et batailles épiques, Ceux qui servent vous plonge dans un univers
            où le destin se joue au rythme des ailes déployées...
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 4"
                :key="i"
                :src="`/images/avatar-${i}.png`"
                :alt="`Reader ${i}`"
                class="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <span class="text-sm text-gray-600">
              4 bêta lecteurs travaillent actuellement sur cette mission
            </span>
          </div>

          <div class="flex gap-3">
            <button
              class="px-4 py-2 border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-50 text-sm"
            >
              Voir le projet
            </button>
            <button
              class="px-4 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 text-sm"
            >
              Reprendre la beta lecture
            </button>
          </div>
        </div>

        <!-- Scenario Mission -->
        <div class="bg-gray-50 rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <span
              class="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-sm whitespace-nowrap"
            >
              Scénario
            </span>
            <span class="text-gray-600">Chapitres 12 - 16</span>
            <span class="ml-auto text-gray-600 whitespace-nowrap"
              >0.65 € / Page</span
            >
          </div>

          <div class="flex items-center gap-3 mb-4">
            <img
              src="/public/images/profil-picture-2.png"
              alt="Frank herbert"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Frank herbert</span>
          </div>

          <h3 class="font-bold mb-3 text-navy-900">Dune</h3>

          <p class="text-gray-700 text-sm mb-6">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit.
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 2"
                :key="i"
                :src="`/images/avatar-${i}.png`"
                :alt="`Reader ${i}`"
                class="w-6 h-6 rounded-full border-2 border-white"
              />
            </div>
            <span class="text-sm text-gray-600">
              2 bêta lecteurs travaillent actuellement sur cette mission
            </span>
          </div>

          <div class="flex gap-3">
            <button
              class="px-4 py-2 border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-50 text-sm"
            >
              Voir le projet
            </button>
            <button
              class="px-4 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 text-sm"
            >
              Continuer la beta lecture
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RevenuCharts from "../RevenuCharts.vue";
</script>
