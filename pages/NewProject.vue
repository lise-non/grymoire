// pages/projects/new.vue
<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-2xl font-bold text-navy-900">Créer un projet :</h1>
        <h2 class="text-3xl font-bold text-navy-900 mt-2">Projet sans nom</h2>
      </div>
      <div class="flex gap-4">
        <button
          class="px-4 py-2 border border-green-700 text-green-700 rounded-lg hover:bg-green-50"
        >
          Enregistrer en brouillon
        </button>
        <button
          class="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
        >
          Publier
        </button>
      </div>
    </div>

    <div class="bg-white rounded-3xl shadow-sm p-8">
      <h3 class="text-2xl font-bold text-navy-900 mb-6">Description</h3>

      <div class="flex gap-2 mb-6">
        <span class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700"
          >Nouveau</span
        >
        <button
          class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 flex items-center gap-1 hover:bg-gray-200"
        >
          <span>+ ajouter un tag</span>
        </button>
      </div>

      <div class="flex gap-8">
        <!-- Upload area -->
        <div
          class="w-60 h-72 bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-center p-6"
        >
          <div class="w-12 h-12 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              class="text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <span class="text-gray-500 font-medium"
            >Télécharger une couverture</span
          >
        </div>

        <!-- Description textarea -->
        <div class="flex-1">
          <textarea
            class="w-full h-24 border border-gray-200 rounded-2xl p-4 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Écrivez la description ici"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- Rest of the component remains the same -->
    <div class="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-bold text-navy-900">Gérer les missions</h3>
        <span class="text-gray-500">(0)</span>
      </div>

      <div class="flex gap-2 mb-6">
        <button class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
          Orthographe (0)
        </button>
        <button
          class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm"
        >
          Scénario (0)
        </button>
        <button
          class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
        >
          Cohérence (0)
        </button>
        <button
          class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
        >
          Commentaire (0)
        </button>
      </div>

      <div class="bg-emerald-50 rounded-lg p-8 text-center">
        <div class="max-w-[200px] mx-auto">
          <img alt="Add mission" class="w-full mb-4" />
          <span class="text-gray-700">Ajouter une mission</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNuxtApp, useRuntimeConfig } from "#app";

const { $supabase } = useNuxtApp();
const projectTitle = ref("Projet sans nom");
const description = ref("");
const coverImage = ref(null);

async function createProject(isDraft = true) {
  try {
    const { data, error } = await $supabase
      .from("projects")
      .insert([
        {
          title: projectTitle.value,
          description: description.value,
          status: isDraft ? "draft" : "published",
          cover_image: coverImage.value,
        },
      ])
      .select();

    if (error) throw error;
    navigateTo(`/projects/${data[0].id}`);
  } catch (error) {
    console.error("Error creating project:", error.message);
  }
}

async function handleFileUpload(event) {
  const file = event.target.files[0];
  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random()}.${fileExt}`;

  try {
    const { error: uploadError } = await $supabase.storage
      .from("covers")
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const {
      data: { publicUrl },
    } = $supabase.storage.from("covers").getPublicUrl(fileName);

    coverImage.value = publicUrl;
  } catch (error) {
    console.error("Error uploading file:", error.message);
  }
}
</script>
