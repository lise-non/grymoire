<template>
  <div
    class="max-w-7xl mx-auto p-6"
    :class="[
      props.isSidebarOpen ? 'ml-64' : 'ml-16',
      props.isNotificationSidebarOpen ? 'mr-72' : 'mr-16',
    ]"
  >
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-2xl font-bold text-[#20214B]">Créer un projet :</h1>
        <div class="flex items-center mt-2">
          <div v-if="isEditingTitle" class="flex items-center">
            <input
              v-model="projectTitle"
              class="text-4xl font-bold text-[#20214B] border-b-2 border-[#0B5B50] focus:outline-none bg-transparent"
              @keyup.enter="isEditingTitle = false"
              @blur="isEditingTitle = false"
              ref="titleInput"
              type="text"
            />
          </div>
          <h2 v-else class="text-4xl font-bold text-[#20214B]">
            {{ projectTitle || "Projet sans nom" }}
          </h2>
          <button
            @click="editTitle"
            class="ml-2 text-[#0B5B50] hover:text-gray-800"
          >
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 3.5C2.44772 3.5 2 3.94772 2 4.5V20.5C2 21.0523 2.44772 21.5 3 21.5H19C19.5523 21.5 20 21.0523 20 20.5V11.0714C20 10.5191 20.4477 10.0714 21 10.0714C21.5523 10.0714 22 10.5191 22 11.0714V20.5C22 22.1569 20.6569 23.5 19 23.5H3C1.34315 23.5 0 22.1569 0 20.5V4.5C0 2.84315 1.34315 1.5 3 1.5H12.4286C12.9809 1.5 13.4286 1.94772 13.4286 2.5C13.4286 3.05228 12.9809 3.5 12.4286 3.5H3Z"
                fill="#0B5B50"
              />
              <path
                d="M22.71 4.5425C23.1 4.1525 23.1 3.5025 22.71 3.1325L20.37 0.7925C20 0.4025 19.35 0.4025 18.96 0.7925L17.12 2.6225L20.87 6.3725M5 14.7525V18.5025H8.75L19.81 7.4325L16.06 3.6825L5 14.7525Z"
                fill="#0B5B50"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex gap-4">
        <button
          @click="createProject(true)"
          class="px-6 py-3 border border-[#0B5B50] text-[#0B5B50] rounded-lg hover:bg-green-50"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? "Enregistrement..." : "Enregistrer en brouillon" }}
        </button>
        <button
          @click="createProject(false)"
          class="px-6 py-3 bg-[#0B5B50] text-white rounded-lg hover:bg-green-800"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? "Publication..." : "Publier" }}
        </button>
      </div>
    </div>

    <div class="bg-white rounded-3xl shadow-sm p-8">
      <div class="flex">
        <!-- Left side: Upload area -->
        <div
          @click="triggerFileUpload"
          class="w-72 flex-shrink-0 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:bg-gray-200 relative overflow-hidden mr-8"
          style="min-height: 450px"
        >
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            class="hidden"
            @change="handleFileUpload"
          />

          <template v-if="!coverImage">
            <div class="flex flex-col items-center justify-center h-full">
              <svg
                width="39"
                height="46"
                viewBox="0 0 39 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.833252 45.3333H38.1666V40H0.833252M38.1666 16H27.4999V0H11.4999V16H0.833252L19.4999 34.6667L38.1666 16Z"
                  fill="#8092AD"
                />
              </svg>

              <p class="text-gray-500 font-medium">Télécharger une</p>
              <p class="text-gray-500 font-medium">couverture</p>
            </div>
          </template>

          <img
            v-else
            :src="coverImage"
            alt="Cover image"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <!-- Right side: Tags and description textarea -->
        <div class="flex-1 flex flex-col">
          <h3 class="text-2xl font-bold text-[#20214B] mb-6">Description</h3>

          <div class="mb-6">
            <div class="flex gap-2 mb-6">
              <span class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700"
                >Nouveau</span
              >
              <button
                @click="showTagInput = !showTagInput"
                class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 flex items-center gap-1 hover:bg-gray-200"
              >
                <span>+ ajouter un tag</span>
              </button>
            </div>

            <div v-if="showTagInput" class="mb-4">
              <div class="flex items-center gap-2">
                <input
                  v-model="newTag"
                  type="text"
                  class="border border-gray-200 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  placeholder="Nouveau tag"
                  @keyup.enter="addTag"
                />
                <button
                  @click="addTag"
                  class="px-3 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
                >
                  Ajouter
                </button>
              </div>
            </div>

            <div v-if="tags.length > 0" class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="(tag, index) in tags"
                :key="index"
                class="px-3 py-1 bg-gray-100 rounded-lg text-gray-700 flex items-center gap-1"
              >
                {{ tag }}
                <button
                  @click="removeTag(index)"
                  class="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </span>
            </div>
          </div>

          <textarea
            v-model="description"
            class="w-full flex-grow border border-gray-200 rounded-xl p-4 text-gray-700 resize-none focus:outline-none focus:ring-1 focus:ring-gray-200"
            placeholder="Écrivez la description ici"
            style="min-height: 300px"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- Missions section -->
    <div class="bg-white rounded-3xl shadow-sm p-8 mt-6">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-2xl font-bold text-[#20214B]">
          Gérer les missions <span class="text-red-500 text-sm">(0)</span>
        </h3>
        <button class="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
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
          <img src="/public//images/mission.png" alt="" />
          <p class="text-gray-700 font-medium mt-4">Ajouter une mission</p>
        </div>
      </div>
    </div>

    <!-- Status notifications -->
    <div
      v-if="notification.show"
      class="fixed bottom-4 right-4 p-4 rounded-lg shadow-lg"
      :class="
        notification.type === 'success'
          ? 'bg-green-100 text-green-800'
          : 'bg-red-100 text-red-800'
      "
    >
      {{ notification.message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNuxtApp, useRouter } from "#imports";

const router = useRouter();
const { $supabase } = useNuxtApp();

// Project data
const projectTitle = ref("Projet sans nom");
const isEditingTitle = ref(false);
const titleInput = ref(null);
const description = ref("");
const coverImage = ref(null);
const fileInput = ref(null);
const tags = ref([]);
const newTag = ref("");
const showTagInput = ref(false);
const isSubmitting = ref(false);

const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
  isNotificationSidebarOpen: Boolean,
});

// Notification system
const notification = ref({
  show: false,
  message: "",
  type: "success",
});

function showNotification(message, type = "success") {
  notification.value = {
    show: true,
    message,
    type,
  };

  setTimeout(() => {
    notification.value.show = false;
  }, 5000);
}

function triggerFileUpload() {
  fileInput.value.click();
}

function editTitle() {
  isEditingTitle.value = true;
  // Wait for the DOM to update before focusing
  setTimeout(() => {
    if (titleInput.value) {
      titleInput.value.focus();
    }
  }, 50);
}

function addTag() {
  if (newTag.value.trim()) {
    tags.value.push(newTag.value.trim());
    newTag.value = "";
  }
}

function removeTag(index) {
  tags.value.splice(index, 1);
}

async function createProject(isDraft = true) {
  if (isSubmitting.value) return;
  isSubmitting.value = true;

  try {
    // Validate that at least title exists
    if (!projectTitle.value.trim()) {
      projectTitle.value = "Projet sans nom";
    }

    const { data, error } = await $supabase
      .from("Project")
      .insert([
        {
          title: projectTitle.value,
          sumery: description.value,
          cover_url: coverImage.value,
          tags: tags.value,
          created_at: new Date(),
        },
      ])
      .select();

    if (error) throw error;

    showNotification(
      isDraft ? "Projet enregistré en brouillon" : "Projet publié avec succès"
    );

    // Navigate to the project detail or list view after successful creation
    setTimeout(() => {
      router.push("/projects/" + data[0].id);
    }, 1500);
  } catch (error) {
    console.error("Error creating project:", error.message);
    showNotification(
      "Erreur lors de la création du projet: " + error.message,
      "error"
    );
  } finally {
    isSubmitting.value = false;
  }
}

async function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Validate file type and size
  const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  if (!validTypes.includes(file.type)) {
    showNotification(
      "Seules les images sont acceptées (JPG, PNG, GIF, WEBP)",
      "error"
    );
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    // 5MB limit
    showNotification("L'image ne doit pas dépasser 5 Mo", "error");
    return;
  }

  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.floor(
    Math.random() * 1000
  )}.${fileExt}`;

  try {
    const { error: uploadError } = await $supabase.storage
      .from("covers")
      .upload(fileName, file);

    if (uploadError) throw uploadError;

    const { data } = $supabase.storage.from("covers").getPublicUrl(fileName);
    coverImage.value = data.publicUrl;

    showNotification("Image de couverture téléchargée avec succès");
  } catch (error) {
    console.error("Error uploading file:", error.message);
    showNotification(
      "Erreur lors du téléchargement: " + error.message,
      "error"
    );
  }
}
</script>
