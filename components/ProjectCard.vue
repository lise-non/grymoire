<!-- components/ProjectCard.vue -->
<template>
  <NuxtLink :to="userDashboardLink">
    <div
      class="bg-white rounded-lg p-4 border hover:shadow-lg transition-shadow duration-200 my-2 h-64 flex"
    >
      <!-- Left side: Project thumbnail with fixed dimensions -->
      <div class="flex-shrink-0 mr-4">
        <img
          :src="props.project.cover"
          alt=""
          class="w-40 h-full rounded-lg object-cover"
        />
      </div>

      <!-- Right side: Project details with fixed layout -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Title section -->
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

        <!-- Tags section with flex-wrap -->
        <div class="flex flex-wrap gap-2 mb-2">
          <span
            v-for="(tag, index) in props.project.tags"
            :key="index"
            class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Description section with fixed height and scroll -->
        <div class="overflow-y-auto flex-grow mb-2">
          <p class="text-gray-600">{{ props.project.description }}</p>
        </div>

        <!-- Readers info section fixed at bottom -->
        <div
          v-if="props.project.readers"
          class="flex items-center gap-2 mt-auto"
        >
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
