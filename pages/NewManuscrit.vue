<template>
  <div
    class="min-h-screen bg-gray-50 p-4 md:p-8"
    :class="[
      props.isSidebarOpen ? 'ml-64' : 'ml-16',
      props.isNotificationSidebarOpen ? 'mr-72' : 'mr-16',
    ]"
  >
    <!-- Header section -->
    <div class="mb-6">
      <h3 class="text-lg font-medium text-[#20214B]">Ajouter un manuscrit</h3>
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2"
      >
        <div class="flex items-center gap-3">
          <div v-if="isEditingTitle" class="flex items-center">
            <input
              v-model="chapterTitle"
              class="text-4xl font-bold text-[#20214B] border-b-2 border-emerald-600 focus:outline-none bg-transparent"
              @keyup.enter="isEditingTitle = false"
              @blur="isEditingTitle = false"
              ref="titleInput"
              type="text"
            />
          </div>
          <h1 v-else class="text-4xl font-bold text-[#20214B]">
            {{ chapterNumber }} {{ chapterTitle }}
          </h1>
          <button class="text-[#0B5B50]" @click="startEditingTitle">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 3.5C3.44772 3.5 3 3.94772 3 4.5V20.5C3 21.0523 3.44772 21.5 4 21.5H20C20.5523 21.5 21 21.0523 21 20.5V11.0714C21 10.5191 21.4477 10.0714 22 10.0714C22.5523 10.0714 23 10.5191 23 11.0714V20.5C23 22.1569 21.6569 23.5 20 23.5H4C2.34315 23.5 1 22.1569 1 20.5V4.5C1 2.84315 2.34315 1.5 4 1.5H13.4286C13.9809 1.5 14.4286 1.94772 14.4286 2.5C14.4286 3.05228 13.9809 3.5 13.4286 3.5H4Z"
                fill="#0B5B50"
              />
              <path
                d="M23.71 4.5425C24.1 4.1525 24.1 3.5025 23.71 3.1325L21.37 0.7925C21 0.4025 20.35 0.4025 19.96 0.7925L18.12 2.6225L21.87 6.3725M6 14.7525V18.5025H9.75L20.81 7.4325L17.06 3.6825L6 14.7525Z"
                fill="#0B5B50"
              />
            </svg>
          </button>
        </div>
        <div class="flex gap-4">
          <button
            class="px-4 py-2 border border-emerald-600 text-[#0B5B50] rounded-md hover:bg-emerald-50 transition-colors"
            @click="saveDraft"
          >
            Enregistrer en brouillon
          </button>
          <button
            class="px-4 py-2 bg-[#0B5B50] text-white rounded-md hover:bg-emerald-800 transition-colors"
            @click="submitForReview"
          >
            Envoyer en correction
          </button>
        </div>
      </div>
    </div>

    <!-- Editor section -->
    <div class="bg-white rounded-lg shadow-sm overflow-hidden">
      <!-- Chapter and page info -->
      <div class="p-4 text-gray-500 border-b">
        Chapitre {{ chapterNumber }} | Page {{ pageNumber }}
      </div>

      <!-- Custom TipTap toolbar -->
      <div class="flex items-center p-2 border-b overflow-x-auto">
        <div class="flex items-center">
          <button
            @click="editor?.chain().focus().undo().run()"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Annuler"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 7v6h6" />
              <path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13" />
            </svg>
          </button>
          <button
            @click="editor?.chain().focus().redo().run()"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Rétablir"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 7v6h-6" />
              <path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7" />
            </svg>
          </button>
        </div>

        <div class="w-px h-6 bg-gray-200 mx-2"></div>

        <div class="flex items-center space-x-1">
          <button
            @click="editor?.chain().focus().toggleBold().run()"
            :class="{ 'bg-gray-200': editor?.isActive('bold') }"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Gras"
          >
            <span class="font-bold">B</span>
          </button>
          <button
            @click="editor?.chain().focus().toggleItalic().run()"
            :class="{ 'bg-gray-200': editor?.isActive('italic') }"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Italique"
          >
            <span class="italic">I</span>
          </button>
          <button
            @click="editor?.chain().focus().toggleUnderline().run()"
            :class="{ 'bg-gray-200': editor?.isActive('underline') }"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Souligné"
          >
            <span class="underline">U</span>
          </button>
          <button
            @click="editor?.chain().focus().toggleStrike().run()"
            :class="{ 'bg-gray-200': editor?.isActive('strike') }"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Barré"
          >
            <span class="line-through">S</span>
          </button>
        </div>

        <div class="w-px h-6 bg-gray-200 mx-2"></div>

        <div class="flex items-center space-x-1">
          <button
            @click="editor?.chain().focus().setTextAlign('left').run()"
            :class="{ 'bg-gray-200': editor?.isActive({ textAlign: 'left' }) }"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Aligner à gauche"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="15" y1="12" x2="3" y2="12" />
              <line x1="17" y1="18" x2="3" y2="18" />
            </svg>
          </button>
          <button
            @click="editor?.chain().focus().setTextAlign('center').run()"
            :class="{
              'bg-gray-200': editor?.isActive({ textAlign: 'center' }),
            }"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Centrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="18" y1="12" x2="6" y2="12" />
              <line x1="21" y1="18" x2="3" y2="18" />
            </svg>
          </button>
          <button
            @click="editor?.chain().focus().setTextAlign('right').run()"
            :class="{ 'bg-gray-200': editor?.isActive({ textAlign: 'right' }) }"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Aligner à droite"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="21" y1="12" x2="9" y2="12" />
              <line x1="21" y1="18" x2="3" y2="18" />
            </svg>
          </button>
          <button
            @click="editor?.chain().focus().setTextAlign('justify').run()"
            :class="{
              'bg-gray-200': editor?.isActive({ textAlign: 'justify' }),
            }"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Justifier"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="21" y1="12" x2="3" y2="12" />
              <line x1="21" y1="18" x2="3" y2="18" />
            </svg>
          </button>
        </div>

        <div class="w-px h-6 bg-gray-200 mx-2"></div>

        <div class="flex items-center space-x-1">
          <button
            @click="editor?.chain().focus().toggleBulletList().run()"
            :class="{ 'bg-gray-200': editor?.isActive('bulletList') }"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Liste à puces"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button
            @click="editor?.chain().focus().toggleOrderedList().run()"
            :class="{ 'bg-gray-200': editor?.isActive('orderedList') }"
            class="p-2 rounded-md hover:bg-gray-100"
            title="Liste numérotée"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="10" y1="6" x2="21" y2="6" />
              <line x1="10" y1="12" x2="21" y2="12" />
              <line x1="10" y1="18" x2="21" y2="18" />
              <path d="M4 6h1v4" />
              <path d="M4 10h2" />
              <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
            </svg>
          </button>
        </div>
      </div>

      <!-- TipTap Editor Component -->
      <RichTextEditor
        ref="editorRef"
        :initial-content="editorContent"
        @update:content="updateContent"
        class="min-h-[500px] p-6"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import RichTextEditor from "~/components/RichTextEditor.vue";
import { useNuxtApp, useRuntimeConfig } from "#app";

const { $supabase } = useNuxtApp();
const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
  isNotificationSidebarOpen: Boolean,
});
// Refs for the editor
const editorRef = ref(null);
const editorContent = ref("");

// Route and router
const route = useRoute();
const router = useRouter();

// Manuscript data
const manuscriptId = ref(null);
const chapterNumber = ref("08");
const chapterTitle = ref("Titre du chapitre");
const pageNumber = ref("1");
const manuscriptStatus = ref("draft"); // 'draft', 'review', 'published'

// Title editing
const isEditingTitle = ref(false);
const titleInput = ref(null);

const startEditingTitle = () => {
  isEditingTitle.value = true;
  // Use nextTick to ensure the DOM has updated before focusing
  nextTick(() => {
    titleInput.value?.focus();
  });
};

// Computed
const editor = computed(() => {
  return editorRef.value?.editor;
});

// Methods
const updateContent = (newContent) => {
  editorContent.value = newContent;
};

const saveDraft = async () => {
  try {
    const content = editorContent.value;
    const chapterId = route.params.chapterId || null;

    if (chapterId) {
      // Update existing chapter
      const { data, error } = await $supabase
        .from("chapters")
        .update({
          content,
          title: chapterTitle.value,
          updated_at: new Date(),
        })
        .eq("id", chapterId);

      if (error) throw error;
    } else {
      // Create new chapter
      const { data, error } = await $supabase.from("chapters").insert({
        manuscript_id: manuscriptId.value,
        chapter_number: chapterNumber.value,
        title: chapterTitle.value,
        content,
        status: "draft",
      });

      if (error) throw error;
    }

    // Show success notification
    alert("Brouillon enregistré avec succès");
  } catch (error) {
    console.error("Error saving draft:", error);
    alert("Erreur lors de l'enregistrement du brouillon");
  }
};

const submitForReview = async () => {
  try {
    const content = editorContent.value;
    const chapterId = route.params.chapterId || null;

    // Create new chapter with review status
    const { data, error } = await $supabase.from("Manuscript").insert({
      title: chapterTitle.value,
      chapter_number: chapterNumber.value,
      normalized_text: content,
      added_at: new Date(),
    });

    if (error) throw error;

    // Show success notification
    alert("Manuscrit envoyé en correction");

    // Redirect to manuscripts list
  } catch (error) {
    console.error("Error submitting for review:", error);
    alert("Erreur lors de l'envoi en correction");
  }
};

// Load chapter data if editing an existing chapter
onMounted(async () => {
  const chapterId = route.params.chapterId;

  if (chapterId) {
    try {
      const { data, error } = await $supabase
        .from("chapters")
        .select("*")
        .eq("id", chapterId)
        .single();

      if (error) throw error;

      if (data) {
        chapterTitle.value = data.title || "Titre du chapitre";
        chapterNumber.value = data.chapter_number || "08";
        editorContent.value = data.content || "";
        manuscriptStatus.value = data.status || "draft";
      }
    } catch (error) {
      console.error("Error loading chapter:", error);
    }
  }

  // If creating a new chapter, get manuscript ID from route
  manuscriptId.value = route.params.manuscriptId;
});
</script>

<style scoped>
/* Additional Tailwind classes can be added here if needed */
</style>
