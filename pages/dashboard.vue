<template>
  <div
    class="max-w-7xl mx-auto transition-all duration-300"
    :class="props.isSidebarOpen ? 'ml-64 mr-64' : 'ml-16 mr-64'"
  >
    <DashboardAuthorDashboard
      v-if="props.isAuthorMode"
    ></DashboardAuthorDashboard>
    <DashboardReaderDashboard v-if="props.isAuthorMode == false">
    </DashboardReaderDashboard>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
});

interface Transaction {
  date: string;
  amount: string;
}

interface Manuscript {
  number: string;
  title: string;
  status: string;
  date: string;
  corrections: string;
}

const transactions = ref<Transaction[]>([
  { date: "28 nov. 2024", amount: "+ 70 €" },
  { date: "04 oct. 2024", amount: "+ 120 €" },
  { date: "26 jul. 2024", amount: "+ 150 €" },
  { date: "3 jan. 2024", amount: "+ 300 €" },
  { date: "28 nov. 2024", amount: "+ 70 €" },
  { date: "04 oct. 2024", amount: "+ 120 €" },
  { date: "26 jul. 2024", amount: "+ 150 €" },
  { date: "3 jan. 2024", amount: "+ 300 €" },
]);

const manuscripts = ref<Manuscript[]>([
  {
    number: "00",
    title: "Titre du manuscrit",
    status: "(En correction)",
    date: "00/00/00",
    corrections: "00 nouvelles corrections",
  },
  {
    number: "00",
    title: "Titre du manuscrit",
    status: "(En correction)",
    date: "00/00/00",
    corrections: "00 nouvelles corrections",
  },
  {
    number: "00",
    title: "Titre du manuscrit",
    status: "(En correction)",
    date: "00/00/00",
    corrections: "00 nouvelles corrections",
  },
  {
    number: "00",
    title: "Titre du manuscrit",
    status: "(En correction)",
    date: "00/00/00",
    corrections: "00 nouvelles corrections",
  },
]);

const projects = ref([
  {
    id: 1,
    name: "Projet P",
    amount: "349,35",
    color: "bg-teal-800",
  },
  {
    id: 2,
    name: "Projet J",
    amount: "355,29",
    color: "bg-teal-500",
  },
  {
    id: 3,
    name: "Projet K",
    amount: "139,70",
    color: "bg-teal-200",
  },
]);

interface Application {
  id: number;
  chapters: string;
  tag: string;
  avatar: string;
  name: string;
  rating: number;
  totalReviews: number;
  description: string;
}

const applications = ref<Application[]>([
  {
    id: 1,
    chapters: "Chapitres 3 - 15",
    tag: "Orthographe",
    avatar: "/placeholder-avatar-1.jpg",
    name: "Romain I.",
    rating: 3,
    totalReviews: 24,
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 2,
    chapters: "Chapitres 1 - 7",
    tag: "Cohérence",
    avatar: "/placeholder-avatar-2.jpg",
    name: "Nolwenn T.",
    rating: 3,
    totalReviews: 24,
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 3,
    chapters: "Chapitre 16",
    tag: "Commentaire",
    avatar: "/placeholder-avatar-1.jpg",
    name: "Romain I.",
    rating: 3,
    totalReviews: 24,
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 4,
    chapters: "Chapitres 8 - 12",
    tag: "Orthographe",
    avatar: "/placeholder-avatar-3.jpg",
    name: "Laurent U.",
    rating: 3,
    totalReviews: 24,
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    id: 5,
    chapters: "Chapitre 6",
    tag: "Scénario",
    avatar: "/placeholder-avatar-3.jpg",
    name: "Laurent U.",
    rating: 3,
    totalReviews: 24,
    description:
      "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
]);

const getTagClass = (tag: string) => {
  switch (tag) {
    case "Orthographe":
      return "bg-red-100 text-red-600";
    case "Scénario":
      return "bg-yellow-100 text-yellow-600";
    case "Cohérence":
      return "bg-orange-100 text-orange-600";
    case "Commentaire":
      return "bg-teal-100 text-teal-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
</script>
<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: green;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: transparent;
}

.custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: #e5e7eb;
}
</style>
