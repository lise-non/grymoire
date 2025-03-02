<!-- components/CollaboratorCard.vue -->
<template>
  <div class="bg-gray-50 rounded-lg p-4">
    <!-- Collaborator header -->
    <div class="flex justify-between items-start mb-2">
      <div class="flex items-center">
        <img
          :src="collaborator.avatar"
          :alt="collaborator.name"
          class="w-12 h-12 rounded-full object-cover"
        />
        <div class="ml-3">
          <h3 class="font-bold text-lg">{{ collaborator.name }}</h3>
          <div class="flex items-center">
            <div class="flex">
              <template v-for="i in 5" :key="i">
                <svg
                  class="w-5 h-5"
                  :class="
                    i <= Math.floor(collaborator.rating)
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
              >(Sur {{ collaborator.reviews }} avis)</span
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

    <!-- Mission sections -->
    <template
      v-for="(mission, index) in collaborator.missions"
      :key="`mission-${index}`"
    >
      <div
        :class="{
          'border-b border-gray-200 pb-4 mb-4':
            index < collaborator.missions.length - 1,
        }"
      >
        <div class="flex justify-between items-center mb-1">
          <div>
            <div class="font-medium">{{ mission.name }}</div>
            <div class="text-gray-600 text-sm">{{ mission.duration }}</div>
          </div>
          <span
            class="px-3 py-1 rounded-full text-sm"
            :class="{
              'bg-red-200 text-red-800': mission.type === 'Orthographe',
              'bg-yellow-200 text-yellow-800': mission.type === 'Scénario',
              'bg-orange-200 text-orange-800': mission.type === 'Cohérence',
              'bg-green-200 text-green-800': mission.type === 'Commentaire',
            }"
          >
            {{ mission.type }}
          </span>
        </div>
        <div class="flex gap-2 mt-2">
          <span class="bg-[#D6E3E2] text-[#384273] px-3 py-1 rounded-lg text-sm"
            >{{ mission.validated }} validés</span
          >
          <span class="bg-[#D6E3E2] text-[#384273] px-3 py-1 rounded-lg text-sm"
            >{{ mission.pending }} en attente</span
          >
          <span class="bg-[#D6E3E2] text-[#384273] px-3 py-1 rounded-lg text-sm"
            >{{ mission.rejected }} refusés</span
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  collaborator: {
    type: Object,
    required: true,
  },
});
</script>
