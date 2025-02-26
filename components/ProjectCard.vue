// components/ProjectCard.vue
<template>
  <NuxtLink :to="userDashboardLink">
    <div
      class="bg-white rounded-lg p-4 flex gap-4 border hover:shadow-lg transition-shadow duration-200 my-2"
    >
      <!-- Project thumbnail -->
      <img :src="props.project.cover" alt="" class="w-32 h-34" />

      <!-- Project details -->
      <div class="flex-1">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-semibold text-navy-900">
            {{ props.project.title }}
            <span class="text-sm font-normal text-red-500">
              ({{
                status === "draft"
                  ? "Brouillon"
                  : status === "in-progress"
                  ? "En cours"
                  : "Terminé"
              }})
            </span>
          </h3>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-3">
          <span
            v-for="(tag, index) in props.project.tags"
            :key="index"
            class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-gray-600 mb-4">{{ props.project.description }}</p>

        <!-- Readers info -->
        <div v-if="props.project.readers" class="flex items-center gap-2">
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
            {{ props.project.readers }} bêta lecteurs travaillent sur ce projet
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    required: true,
    validator: (value) => ["draft", "in-progress", "completed"].includes(value),
  },
  isAuthorMode: Boolean,
});

const userDashboardLink = computed(() => {
  if (props.isAuthorMode == true) {
    return "/author/ProjectDetails";
  }
  if (props.isAuthorMode == false) {
    return "/beta/ProjectDetails";
  }
});
</script>
