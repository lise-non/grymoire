<template>
  <div class="w-7xl p-6 space-y-6">
    <!-- Header -->
    <h1 class="text-3xl font-bold text-[#20214B] flex items-center gap-2">
      Bonjour Hibou
      <span class="text-2xl">👋</span>
    </h1>

    <div class="grid grid-flow-row-dense grid-cols-3 gap-6">
      <!-- Balance Card -->
      <div class="bg-white rounded-3xl p-8 space-y-8 h-fit">
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-[#20214B]">Mon solde</h2>
          <div class="text-4xl font-bold">349,35 €</div>
          <button
            class="inline-flex items-center gap-2 px-4 py-2 bg-[#0B5B50] text-white rounded-lg hover:bg-emerald-900 transition-colors"
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
          <h2 class="text-xl font-bold text-[#20214B]">Déjà retiré</h2>
          <div class="text-3xl font-bold text-gray-600">127,53 €</div>
        </div>
      </div>

      <!-- Revenue Chart -->
      <div class="bg-white rounded-3xl p-8 col-span-2">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-[#20214B]">Revenus</h2>
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
    <div class="bg-[#0B5B50] rounded-3xl p-6 flex items-center justify-between">
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
        <h2 class="text-2xl font-bold text-[#20214B] flex items-center gap-2">
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
      <div class="grid grid-cols-2 gap-6">
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
              src="/public/images/pp-1.jpg"
              alt="Marion R"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Marion R</span>
          </div>

          <h3 class="font-bold mb-3 text-[#20214B]">Ceux Qui Servent</h3>

          <p class="text-gray-700 text-sm mb-6">
            J’ai été séduite par l’atmosphère froide et implacable de Norrasq,
            qui contraste avec la chaleur des liens entre les personnages. Sunie
            est un personnage marquant, et l’univers semble taillé pour de
            grandes aventures. Une belle réussite malgré un démarrage un peu
            lent.
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 4"
                :key="i"
                :src="`/images/pp-${i}.jpg`"
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
              class="px-4 py-2 bg-[#0B5B50] text-white rounded-lg hover:bg-emerald-900 text-sm"
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
              src="/public/images/pp-3.jpg"
              alt="Marion R"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Marion R</span>
          </div>

          <h3 class="font-bold mb-3 text-[#20214B]">Ceux Qui Servent</h3>

          <p class="text-gray-700 text-sm mb-6">
            Nous recherchons un regard critique sur le développement des
            personnages principaux de notre roman fantastique. Votre mission est
            d'évaluer si leur évolution psychologique reste cohérente face aux
            événements magiques qui bouleversent leur quotidien. Portez une
            attention particulière aux réactions émotionnelles des protagonistes
            et identifiez les moments où leurs comportements pourraient sembler
            forcés ou insuffisamment justifiés par l'intrigue.
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 4"
                :key="i"
                :src="`/images/pp-${i}.jpg`"
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
              class="px-4 py-2 bg-[#0B5B50] text-white rounded-lg hover:bg-emerald-900 text-sm"
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
              src="/public/images/pp-2.jpg"
              alt="Marion R"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Marion R</span>
          </div>

          <h3 class="font-bold mb-3 text-[#20214B]">Ceux Qui Servent</h3>

          <p class="text-gray-700 text-sm mb-6">
            Votre mission consiste à analyser le rythme narratif de ce thriller
            médical. Identifiez les passages qui ralentissent inutilement
            l'action ou, au contraire, les moments où les révélations
            s'enchaînent trop rapidement pour être pleinement assimilées. Nous
            attendons des suggestions concrètes pour améliorer la fluidité du
            récit tout en maintenant la tension nécessaire à ce genre
            littéraire.
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 4"
                :key="i"
                :src="`/images/pp-${i}.jpg`"
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
              class="px-4 py-2 bg-[#0B5B50] text-white rounded-lg hover:bg-emerald-900 text-sm"
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
              src="/public/images/pp-3.jpg"
              alt="Frank herbert"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Frank herbert</span>
          </div>

          <h3 class="font-bold mb-3 text-[#20214B]">Dune</h3>

          <p class="text-gray-700 text-sm mb-6">
            Pour ce roman historique se déroulant pendant la Première Guerre
            mondiale, nous vous demandons d'examiner l'authenticité des
            descriptions d'époque. Relevez toute incohérence ou anachronisme
            dans les dialogues, les objets mentionnés, ou les comportements
            sociaux décrits. Vos connaissances historiques seront précieuses
            pour garantir la crédibilité du cadre temporel de notre récit.
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 2"
                :key="i"
                :src="`/images/pp-${i}.jpg`"
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
              class="px-4 py-2 bg-[#0B5B50] text-white rounded-lg hover:bg-emerald-900 text-sm"
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
        <h2 class="text-2xl font-bold text-[#20214B] flex items-center gap-2">
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
      <div class="grid grid-cols-2 gap-6">
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
              src="/public/images/pp-3.jpg"
              alt="Marion R"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Marion R</span>
          </div>

          <h3 class="font-bold mb-3 text-[#20214B]">Ceux Qui Servent</h3>

          <p class="text-gray-700 text-sm mb-6">
            Passionné de fantasy depuis plus de vingt ans, Marc a dévoré les
            œuvres majeures comme les séries moins connues du genre. Sa
            connaissance approfondie des tropes, archétypes et mécanismes
            narratifs propres à la fantasy lui permet d'identifier rapidement
            les clichés à éviter et d'apprécier les innovations.
            Particulièrement sensible à la cohérence des systèmes magiques et
            des univers créés, il saura repérer les incohérences dans la
            construction du monde et suggérer des améliorations pertinentes qui
            respectent les codes du genre tout en encourageant l'originalité.
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 4"
                :key="i"
                :src="`/images/pp-${i}.jpg`"
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
              Se rétracter
            </button>
            <button
              class="px-4 py-2 bg-[#0B5B50] text-white rounded-lg hover:bg-emerald-900 text-sm"
            >
              Rejoindre le projet
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
              src="/public/images/pp-2.jpg"
              alt="Frank herbert"
              class="w-8 h-8 rounded-full"
            />
            <span class="font-medium text-gray-900">Frank herbert</span>
          </div>

          <h3 class="font-bold mb-3 text-[#20214B]">Dune</h3>

          <p class="text-gray-700 text-sm mb-6">
            Professeure de littérature à la retraite, Sylvie possède une
            sensibilité exceptionnelle aux nuances du langage. Elle excelle dans
            l'analyse du style, de la voix narrative et du rythme des phrases.
            Sa lecture minutieuse permet de repérer les répétitions, les
            maladresses stylistiques et les ruptures de ton. Sans imposer un
            style académique, elle sait identifier ce qui fonctionne ou non dans
            la prose d'un auteur et propose des ajustements qui respectent sa
            voix unique tout en la rendant plus efficace. Particulièrement utile
            pour les manuscrits littéraires ou les textes où le style occupe une
            place importante.
          </p>

          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <img
                v-for="i in 2"
                :key="i"
                :src="`/images/pp-${i}.jpg`"
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
              Se rétracter
            </button>
            <button
              class="px-4 py-2 bg-[#0B5B50] text-white rounded-lg hover:bg-emerald-900 text-sm"
            >
              Rejoindre le projet
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
