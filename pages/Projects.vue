// pages/projects.vue
<template>
  <div
    class="max-w-7xl mx-auto transition-all duration-300 p-6"
    :class="[
      props.isSidebarOpen ? 'ml-64' : 'ml-16',
      props.isNotificationSidebarOpen ? 'mr-72' : 'mr-16',
    ]"
  >
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold text-[#20214B]">Mes projets</h1>
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
        <NuxtLink to="NewProject" v-if="isAuthorMode">
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
        <h2 class="text-2xl font-bold text-[#20214B] mb-4">
          Brouillons
          <span class="text-sm font-normal text-red-500">(1)</span>
        </h2>
        <ProjectCard
          status="draft"
          :project="{
            title: 'Nom du projet',
            tags: ['Fantaisie', 'Magie', 'Empire'],
            description: '',
            cover: '/images/empty.png',
          }"
          :is-author-mode="props.isAuthorMode"
        />
      </section>

      <!-- In Progress Section -->
      <section>
        <h2 class="text-2xl font-bold text-[#20214B] mb-4">
          En cours
          <span class="text-sm font-normal text-red-500">(1)</span>
        </h2>
        <ProjectCard
          status="in-progress"
          :project="{
            title: 'Ceux qui servent',
            tags: ['Animaux fantastiques', 'Magie'],
            description: `La mèche du destin s’est allumée. Le futur marche sur Norrasq, et ni le froid ni la montagne ne l’arrêteront ; ne reste plus que la commandante Sunie Tersola, qui chevauche avant tout ses principes et son devoir. Une interdiction de vol, un sursaut éthique, et la voilà tutoyant les sommets avec Teli. L’humaine et le griffon se feront rempart, ensemble. Les griffons font tant la fierté que l’efficacité de la Légion ; son bastion septentrional de Norrasq est oublié, à la`,
            cover: '/images/cover.png',
          }"
          :is-author-mode="props.isAuthorMode"
        />
      </section>

      <!-- Completed Section -->
      <section>
        <h2 class="text-2xl font-bold text-[#20214B] mb-4">
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
              description: `Rune Saint-John, dernier descendant de la cour déchue du Soleil, se voit engagé pour enquêter sur la disparition d'Addam, fils de dame Justice, en Nouvelle-Atlantide, la ville-île où les Atlantes se sont établis après la destruction de leur terre d'origine par les humains. `,
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
  isNotificationSidebarOpen: Boolean,
});
</script>
