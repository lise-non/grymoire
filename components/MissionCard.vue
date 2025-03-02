<template>
  <div class="border border-gray-200 rounded-lg p-6">
    <div class="flex justify-between items-start mb-4">
      <div class="flex items-center gap-3">
        <span
          :class="[
            'px-3 py-1 rounded-full text-sm',
            missionTypeStyles[mission.type] || 'bg-gray-100 text-gray-700',
          ]"
        >
          {{ mission.type }}
        </span>
        <span class="text-gray-700">{{ mission.chapters }}</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-gray-600">{{ mission.price }}</span>
        <button class="p-1 hover:bg-gray-100 rounded">
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
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
    </div>

    <p class="text-gray-700 mb-4">{{ mission.description }}</p>

    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="flex -space-x-2">
          <img
            v-for="(avatar, index) in mission.betaReaders.avatars"
            :key="index"
            :src="avatar"
            :alt="`Beta lecteur ${index + 1}`"
            class="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
        <span class="text-sm text-gray-600">
          {{ mission.betaReaders.count }} bêta-lecteurs travaillent actuellement
          sur cette mission
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
        >
          Candidatures
          <span
            class="ml-2 px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full text-sm"
          >
            {{ mission.applications }}
          </span>
        </button>
        <button
          class="px-4 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors"
        >
          Voir les Beta.lecteurs
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mission: {
    type: Object,
    required: true,
  },
});

const missionTypeStyles = {
  Orthographe: "bg-pink-100 text-pink-700",
  Scénario: "bg-yellow-100 text-yellow-700",
  Cohérence: "bg-orange-100 text-orange-700",
  Commentaire: "bg-green-100 text-green-700",
};
</script>
