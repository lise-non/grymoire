<template>
  <div
    class="flex h-screen bg-gray-100 max-w-7xl mx-auto transition-all duration-300"
    :class="props.isSidebarOpen ? 'ml-64' : 'ml-16'"
  >
    <main class="flex-1 p-6" v-if="manuscrit[0]">
      <header class="mb-6">
        <h1 class="text-2xl font-bold">08 {{ manuscrit[0].title }}</h1>
        <p class="text-gray-500">Chapitre 8 - {{ manuscrit[0].title }}</p>
      </header>
      <TextEditor
        ref="textEditor"
        :initial-content="content"
        @update:content="handleContentUpdate"
        @text-replaced="updateCommentPositions"
        class="bg-white rounded-lg shadow"
      />
    </main>

    <aside class="bg-white w-1/3 p-6 shadow-lg border-l overflow-auto">
      <div class="mb-6">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-bold flex items-center">
            Retours
            <span class="bg-[#0E7265] text-white p-1 rounded-md text-xs ml-2">
              {{ commentaires.length }}
            </span>
          </h2>
        </div>

        <!-- Progress bar -->
        <div class="mt-3">
          <div class="w-full bg-gray-100 rounded-full h-1.5">
            <div
              class="bg-[#0E7265] h-1.5 rounded-full transition-all duration-500"
              :style="{ width: `${commentProgress}%` }"
            ></div>
            <span class="bg-[#0E7265] text-white p-1 rounded-md text-xs ml-2"
              >{{ validatedCount }} / {{ commentaires.length }}
            </span>
          </div>
        </div>
      </div>
      <ul class="mt-4 space-y-4 overflow-auto">
        <li
          v-for="comment in commentaires"
          :key="comment.comment_id"
          class="bg-gray-100 p-4 rounded-lg"
          @mouseover="
            highlightText(
              comment.position.start,
              comment.position.end,
              comment.type_comment
            )
          "
          @mouseout="clearHighlight()"
        >
          <div class="flex items-center gap-2 justify-items-end mt-3">
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
            <div
              class="justify-items-end"
              v-if="comment.comment_status == 'Validé'"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1988 3.28465C10.5938 3.67057 10.6013 4.30369 10.2154 4.69877L6.30808 8.69877C6.11992 8.8914 5.86202 9 5.59273 9C5.32345 9 5.06555 8.8914 4.87738 8.69877L2.28465 6.0445C1.89873 5.64942 1.90616 5.0163 2.30123 4.63038C2.69631 4.24447 3.32943 4.25189 3.71535 4.64697L5.59273 6.56891L8.78465 3.30123C9.17057 2.90616 9.80369 2.89873 10.1988 3.28465Z"
                  fill="#0B5B50"
                />
              </svg>
            </div>
          </div>

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

            <div v-if="user && user.length > 0">{{ user[0].username }}</div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              {{ moment(comment.created_at).format("L") }} à
              {{ moment(comment.created_at).local("fr").format("LT") }}
            </div>
          </div>

          <p class="text-gray-700 text-sm italic">
            "{{
              originalText
                .replace(/<[^>]*>/g, "")
                .slice(comment.position.start, comment.position.end)
            }}"
          </p>
          <br />
          <p class="text-gray-700 text-sm">{{ comment.correction }}</p>
          <div
            class="flex justify-end mt-2"
            v-if="comment.comment_status == null"
          >
            <button
              type="button"
              class="text-[#0E7265] hover:text-white border border-[#0E7265] hover:bg-[#0E7265] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              @click="updateCommentStatus(comment.comment_id, 'Validé')"
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
import moment from "moment";

const { $supabase } = useNuxtApp();
const manuscrit = ref({});
const commentaires = ref([]);
const textEditor = ref(null);
const originalText = ref("");
const user = ref();

const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
});

const content = computed(() => {
  if (!manuscrit.value[0]?.normalized_text) return "";
  // Remove any existing HTML tags before wrapping in <p>
  const cleanText = manuscrit.value[0].normalized_text.replace(/<[^>]*>/g, "");
  return `<p>${cleanText}</p>`;
});

const commentProgress = computed(() => {
  if (commentaires.value.length === 0) return 0;
  return Math.round((validatedCount.value / commentaires.value.length) * 100);
});

const validatedCount = computed(() => {
  return commentaires.value.filter(
    (comment) => comment.comment_status === "Validé"
  ).length;
});

const handleContentUpdate = (newContent) => {
  // Handle the updated content here
  // You might want to save this to your database or update local state
};

const highlightText = async (start, end, type) => {
  await nextTick();
  if (textEditor.value) {
    textEditor.value.highlight(start, end, type);
  }
};

const clearHighlight = () => {
  if (textEditor.value) {
    textEditor.value.clearHighlight();
  }
};

const updateCommentPositions = (changeInfo) => {
  commentaires.value = commentaires.value.map((comment) => {
    // If the comment starts after the changed text, adjust its position
    if (comment.position.start > changeInfo.start) {
      return {
        ...comment,
        position: {
          start: comment.position.start + changeInfo.difference,
          end: comment.position.end + changeInfo.difference,
        },
      };
    }
    return comment;
  });
};

const updateCommentStatus = async (commentId, status) => {
  const comment = commentaires.value.find((c) => c.comment_id === commentId);

  if (status === "Validé" && comment) {
    textEditor.value?.replaceText(
      comment.position.start,
      comment.position.end,
      comment.correction
    );

    // Update positions in local state immediately
    const changeInfo = {
      start: comment.position.start,
      end: comment.position.end,
      difference:
        comment.correction.length -
        (comment.position.end - comment.position.start),
    };
    updateCommentPositions(changeInfo);

    // Update positions in database
    for (const updatedComment of commentaires.value) {
      if (updatedComment.comment_id !== commentId) {
        const { error: posError } = await $supabase
          .from("Comment")
          .update({
            position: updatedComment.position,
          })
          .eq("comment_id", updatedComment.comment_id);

        if (posError) {
          console.error("Error updating comment position:", posError);
        }
      }
    }
  }

  const { error } = await $supabase
    .from("Comment")
    .update({ comment_status: status })
    .eq("comment_id", commentId);

  if (error) {
    console.error(error.message);
    alert("Une erreur est survenue.");
  } else {
    alert(`Commentaire ${status}.`);

    if (status === "Validé") {
      const newContent = textEditor.value?.getContent();
      if (newContent) {
        manuscrit.value[0].normalized_text = newContent.replace(/<\/?p>/g, "");
        const { error: updateError } = await $supabase
          .from("Manuscript")
          .update({
            normalized_text: newContent.replace(/<\/?p>/g, ""),
          })
          .eq("id_manuscript", 1);

        if (updateError) {
          console.error("Error updating manuscript:", updateError);
        }
      }
    }

    await loadCommentaires();
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
    originalText.value = data[0].normalized_text; // Store original text
  }
};

const getUserInfo = async () => {
  const { data, error } = await $supabase
    .from("User")
    .select("*")
    .eq("user_id", "52042518-ae3a-483f-836f-8e0b4d752bb5");

  if (error) {
    console.error(error.message);
  } else {
    console.log(data);
    user.value = data;
  }
};

onMounted(async () => {
  await loadChapter();
  await loadCommentaires();
  getUserInfo();
});
</script>

<style scoped>
/* Your existing styles */
</style>
