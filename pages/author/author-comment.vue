<template>
  <div class="flex h-screen bg-gray-100">
    <main class="flex-1 p-6" v-if="manuscrit[0]">
      <header class="mb-6">
        <h1 class="text-2xl font-bold">08 {{ manuscrit[0].title }}</h1>
        <p class="text-gray-500">Chapitre 8 - {{ manuscrit[0].title }}</p>
      </header>
      <TextEditor
        ref="textEditor"
        :initial-content="content"
        @update:content="handleContentUpdate"
        class="bg-white rounded-lg shadow"
      />
    </main>

    <aside class="bg-white w-1/3 p-6 shadow-lg border-l overflow-auto">
      <h2 class="text-lg font-bold">
        Retours
        <span class="bg-[#0E7265] text-white p-1 rounded-md text-xs">{{
          commentaires.length
        }}</span>
      </h2>
      <ul class="mt-4 space-y-4">
        <li
          v-for="comment in commentaires"
          :key="comment.comment_id"
          class="bg-gray-100 p-4 rounded-lg"
          @mouseover="
            highlightText(comment.position.start, comment.position.end)
          "
          @mouseout="clearHighlight()"
        >
          <span
            v-if="comment.type_comment === 'Orthographe'"
            class="bg-[#FDC4CB] text-[#B11F30] text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
            >{{ comment.type_comment }}</span
          >
          <span
            v-if="comment.type_comment === 'Scenario'"
            class="bg-[#FFE484] text-[#776216] text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
            >{{ comment.type_comment }}</span
          >
          <span
            v-if="comment.type_comment === 'Coherence'"
            class="bg-[#F8B67A] text-[#734115] text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
            >{{ comment.type_comment }}</span
          >
          <span
            v-if="comment.type_comment === 'Commentaire'"
            class="bg-[#0E7265] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
            >{{ comment.type_comment }}</span
          >

          <span v-if="comment.is_draft == true" class="text-[#0E7265] text-xs">
            Brouillon
          </span>

          <div class="flex items-center gap-2 mt-3">
            <div
              class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
            >
              <svg
                class="absolute w-8 h-8 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <!-- <div v-if="user && user.length > 0">{{ user[0].username }}</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              {{ moment(comment.created_at).format("L") }} à
              {{ moment(comment.created_at).local("fr").format("LT") }}
            </div> -->
          </div>
          <p v-if="manuscrit[0]" class="text-gray-700 text-sm">
            "
            {{
              manuscrit[0]?.normalized_text.slice(
                comment.position.start,
                comment.position.end
              )
            }}
            "
          </p>
          <br />
          <p class="text-gray-700 text-sm">{{ comment.correction }}</p>
          <div class="flex justify-end mt-2">
            <button
              type="button"
              class="text-[#0E7265] hover:text-white border border-[#0E7265] hover:bg-[#0E7265] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              @click="updateCommentStatus(comment.comment_id, 'Refusé')"
            >
              Valider
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-[#0E7265] hover:bg-white hover:text-[#0E7265] hover:border hover:border-[#0E7265] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              @click="updateCommentStatus(comment.comment_id, 'Refusé')"
            >
              Refuser
            </button>
          </div>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from "vue";
import { useNuxtApp, useRuntimeConfig } from "#app";
import TextEditor from "../TextEditor.vue";

const { $supabase } = useNuxtApp();
const manuscrit = ref({});
const commentaires = ref([]);
const textEditor = ref(null);

const content = computed(() => {
  if (!manuscrit.value[0]?.normalized_text) return "";
  return `<p>${manuscrit.value[0].normalized_text}</p>`;
});

const handleContentUpdate = (newContent) => {
  // Handle the updated content here
  console.log("Content updated:", newContent);
  // You might want to save this to your database or update local state
};

const highlightText = async (start, end) => {
  await nextTick();
  if (textEditor.value) {
    textEditor.value.highlight(start, end);
  }
};

const clearHighlight = () => {
  if (textEditor.value) {
    textEditor.value.clearHighlight();
  }
};

const loadCommentaires = async () => {
  const { data, error } = await $supabase
    .from("Comment")
    .select("*")
    .eq("is_draft", false)
    .eq("manuscript_id", 1);

  if (error) {
    console.error(error.message);
  } else {
    commentaires.value = data;
  }
};

const loadChapter = async () => {
  const { data, error } = await $supabase
    .from("Manuscript")
    .select("*")
    .eq("id_manuscript", 1);

  if (error) {
    console.error(error.message);
  } else {
    manuscrit.value = data;
  }
};

const updateCommentStatus = async (commentId, status) => {
  const { error } = await $supabase
    .from("Comment")
    .update({ comment_status: status })
    .eq("comment_id", commentId);

  if (error) {
    console.error(error.message);
    alert("Une erreur est survenue.");
  } else {
    alert(`Commentaire ${status}.`);
    loadCommentaires();
  }
};

onMounted(async () => {
  await loadChapter();
  await loadCommentaires();
});
</script>

<style scoped>
/* Your existing styles */
</style>
