// pages/projects.vue
<template>
  <div
    class="max-w-7xl mx-auto transition-all duration-300"
    :class="props.isSidebarOpen ? 'ml-64 mr-64' : 'ml-16 mr-64'"
  >
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold text-navy-900">Mes projets</h1>
      <div class="flex gap-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Rechercher un projet..."
            class="pl-4 pr-10 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <span class="absolute right-3 top-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
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
          </span>
        </div>
        <NuxtLink to="NewProject">
          <button
            class="bg-[#0B5B50] text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            Nouveau projet
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </NuxtLink>
      </div>
    </div>

    <!-- Project Sections -->
    <div class="space-y-8">
      <!-- Drafts Section -->
      <section>
        <h2 class="text-2xl font-bold text-navy-900 mb-4">
          Brouillons
          <span class="text-sm font-normal text-red-500">(1)</span>
        </h2>
        <ProjectCard
          status="draft"
          :project="{
            title: 'Nom du projet',
            tags: ['Fantaisie', 'Magie', 'Empire'],
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            cover: '/images/empty.png',
          }"
          :is-author-mode="props.isAuthorMode"
        />
      </section>

      <!-- In Progress Section -->
      <section>
        <h2 class="text-2xl font-bold text-navy-900 mb-4">
          En cours
          <span class="text-sm font-normal text-red-500">(1)</span>
        </h2>
        <ProjectCard
          status="in-progress"
          :project="{
            title: 'Ceux qui servent',
            tags: ['Animaux fantastiques', 'Magie'],
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            readers: 2,
            cover: '/images/cover.png',
          }"
          :is-author-mode="props.isAuthorMode"
        />
      </section>

      <!-- Completed Section -->
      <section>
        <h2 class="text-2xl font-bold text-navy-900 mb-4">
          Terminés
          <span class="text-sm font-normal text-red-500">(2)</span>
        </h2>
        <div class="space-y-4">
          <ProjectCard
            v-for="(_, index) in 2"
            :key="index"
            status="completed"
            :project="{
              title: `Tarot ${index + 1}`,
              tags: ['Fantastique', 'Objets magiques', 'Aventure'],
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
              readers: 2,
              cover: '/images/tarot.png',
            }"
            :is-author-mode="props.isAuthorMode"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "~/components/ProjectCard.vue";

const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
});
</script>
