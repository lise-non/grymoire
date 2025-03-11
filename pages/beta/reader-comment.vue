<template>
  <div
    class="flex h-screen bg-gray-100 max-w-7xl mx-auto transition-all duration-300"
    :class="[
      props.isSidebarOpen ? 'ml-64' : 'ml-16',
      props.isNotificationSidebarOpen ? 'mr-72' : 'mr-16',
    ]"
  >
    <!-- Main Content -->
    <main class="flex-1 p-6 overflow-auto" v-if="manuscrit[0]">
      <header class="mb-6">
        <h1 class="text-2xl font-bold text-[#20214B]">
          08 {{ manuscrit[0].title }}
        </h1>
        <p class="text-gray-500">Chapitre 8 - {{ manuscrit[0].title }}</p>
      </header>
      <section class="bg-white p-6 rounded-lg shadow">
        <template v-if="highlightedSegments.length > 0">
          <span
            v-for="(segment, index) in highlightedSegments"
            :key="index"
            :class="{
              'bg-[#FDC4CB]':
                segment.highlight && segment.type === 'Orthographe',
              'bg-[#FFE484]': segment.highlight && segment.type === 'Scenario',
              'bg-[#F8B67A]': segment.highlight && segment.type === 'Coherence',
              'bg-[#0E7265] text-white':
                segment.highlight && segment.type === 'Commentaire',
            }"
            class="text-gray-700 leading-loose"
          >
            {{ segment.text.replace(/<[^>]*>/g, "") }}
          </span>
        </template>
        <p
          v-else
          class="text-gray-700 leading-loose"
          @mouseup="handleTextSelection"
          @contextmenu.prevent
          @copy.prevent
          @cut.prevent
          @paste.prevent
        >
          {{ manuscrit[0]?.normalized_text.replace(/<[^>]*>/g, "") }}
        </p>
      </section>
    </main>

    <!-- Modal commentaire -->

    <div
      v-if="isTooltipVisible"
      class="fixed inset-0 z-40"
      @click="handleOutsideClick"
    >
      <!-- Modal -->
      <div
        ref="tooltipRef"
        class="tooltip"
        :style="{
          top: tooltipPosition.top + 'px',
          left: tooltipPosition.left + (props.isSidebarOpen ? 64 : 16) + 'px',
        }"
      >
        <form @submit.prevent="addFeedback">
          <div>
            <span class="text-gray-700 font-semibold text-[#20214B]"
              >Votre retour</span
            >
            <div class="flex space-x-4 mt-2 overflow-auto">
              <button
                type="button"
                class="bg-[#FDC4CB] text-[#B11F30] px-3 py-2 text-xs font-medium rounded-lg transition"
                @click="selectType('Orthographe')"
              >
                Orthographe
              </button>
              <button
                type="button"
                class="bg-[#FFE484] text-[#776216] px-3 py-2 text-xs font-medium rounded-lg transition"
                @click="selectType('Scenario')"
              >
                Scénario
              </button>
              <button
                type="button"
                class="bg-[#F8B67A] text-[#734115] px-3 py-2 text-xs font-medium rounded-lg transition"
                @click="selectType('Coherence')"
              >
                Cohérence
              </button>
              <button
                type="button"
                class="bg-[#0E7265] text-white px-3 py-2 text-xs font-medium rounded-lg transition"
                @click="selectType('Commentaire')"
              >
                Commentaire
              </button>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="text-gray-700 font-semibold"
              >ajouter une correction</span
            >
            <textarea
              v-model="newComment.text"
              placeholder="Ajoutez votre commentaire"
              class="w-auto p-2 border"
            ></textarea>
            <span
              v-if="selectedType == 'Commentaire'"
              class="text-gray-700 font-semibold"
              >ajouter un commentaire</span
            >
            <textarea
              v-if="selectedType == 'Commentaire'"
              v-model="newComment.comment"
              placeholder="Ajoutez votre commentaire"
              class="w-auto p-2 border"
            ></textarea>
          </div>

          <div>
            <button
              type="button"
              class="text-[#0E7265] hover:text-white border border-[#0E7265] hover:bg-[#0E7265] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
              @click="submitComment(true)"
            >
              Enregistrer en brouillon
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-[#0E7265] hover:bg-white hover:text-[#0E7265] hover:border hover:border-[#0E7265] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              @click="submitComment(false)"
            >
              Envoyer le commentaire
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Comments Sidebar -->
    <aside class="bg-white w-1/3 p-6 shadow-lg border-l overflow-auto">
      <h2 class="text-lg font-bold">
        Vos retours
        <span class="bg-[#0E7265] text-white p-1 rounded-md text-xs">{{
          feedbacks.length
        }}</span>
      </h2>
      <div class="overflow-auto">
        <ul class="mt-4 space-y-4">
          <li
            v-for="feedback in feedbacks"
            :key="feedback.id"
            @mouseover="
              highlightAndScrollTo(
                feedback.position.start,
                feedback.position.end,
                feedback.type_comment
              )
            "
            @mouseleave="resetSegments"
            class="bg-gray-100 p-4 rounded-lg"
          >
            <span
              v-if="feedback.type_comment === 'Orthographe'"
              class="bg-[#FDC4CB] text-[#B11F30] text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
              >{{ feedback.type_comment }}</span
            >
            <span
              v-if="feedback.type_comment === 'Scenario'"
              class="bg-[#FFE484] text-[#776216] text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
              >{{ feedback.type_comment }}</span
            >
            <span
              v-if="feedback.type_comment === 'Coherence'"
              class="bg-[#F8B67A] text-[#734115] text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
              >{{ feedback.type_comment }}</span
            >
            <span
              v-if="feedback.type_comment === 'Commentaire'"
              class="bg-[#0E7265] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
              >{{ feedback.type_comment }}</span
            >

            <span
              v-if="feedback.is_draft == true"
              class="text-[#0E7265] text-xs"
            >
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

              <div v-if="user && user.length > 0">{{ user[0].username }}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ moment(feedback.created_at).format("L") }} à
                {{ moment(feedback.created_at).local("fr").format("LT") }}
              </div>
            </div>
            <p class="text-gray-700 text-sm italic">
              "{{ feedback.selectedText }}"
            </p>
            <br />
            <!-- Correction section -->
            <p class="text-gray-700 text-sm">{{ feedback.correction }}</p>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { useNuxtApp } from "#app";
import moment from "moment";
import "moment/locale/fr";
moment().format();
moment.locale("fr");

const { $supabase } = useNuxtApp();
const manuscrit = ref({});

const feedbacks = ref([]);
const selectedType = ref();
const commentaires = ref([]);
const user = ref();

// Tooltip
const isTooltipVisible = ref(false);
const tooltipPosition = ref({ top: 0, left: 10 });
const tooltipRef = ref(null);

const handleOutsideClick = (event) => {
  if (tooltipRef.value && !tooltipRef.value.contains(event.target)) {
    isTooltipVisible.value = false;
  }
};

const props = defineProps({
  isSidebarOpen: Boolean,
  isAuthorMode: Boolean,
  isNotificationSidebarOpen: Boolean,
});

// Nouveau commentaire
const newComment = ref({
  text: "",
  positionA: 0,
  positionB: 0,
  comment: "",
  selectedText: "",
});

const selectType = (type) => {
  selectedType.value = type;
  console.log(type);
};

// Gestion de la sélection de texte
const handleTextSelection = () => {
  const selection = window.getSelection();
  if (!selection.isCollapsed) {
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    // Mise à jour des positions du tooltip
    tooltipPosition.value = {
      top: rect.top + window.scrollY + 50, // Slightly above the selected text
      left: rect.left + window.scrollX - (props.isSidebarOpen ? 50 : 0),
    };
    // Store the actual selected text
    newComment.value.selectedText = selection.toString();

    // Définition des positions de la sélection pour l'ajout du commentaire
    const start = range.startOffset;
    const end = range.endOffset;

    newComment.value.positionA = start;
    newComment.value.positionB = end;

    isTooltipVisible.value = true;
  }
};

// Ajout d'un commentaire
const addFeedback = (isDraft) => {
  feedbacks.value.push({
    id: feedbacks.value.length + 1,
    correction: newComment.value.text.replace(/<[^>]*>/g, ""),
    content: newComment.value.comment?.replace(/<[^>]*>/g, "") || "",
    type_comment: selectedType.value,
    is_draft: isDraft,
    position: {
      start: newComment.value.positionA,
      end: newComment.value.positionB,
    },
    selectedText: newComment.value.selectedText, // Add this
  });
};

// Gestion du surlignage
const highlight = (start, end, type) => {
  const text = manuscrit.value[0].normalized_text.replace(/<[^>]*>/g, "");

  highlightedSegments.value = [
    { text: text.slice(0, start), highlight: false },
    { text: text.slice(start, end), highlight: true, type: type },
    { text: text.slice(end), highlight: false },
  ];
};

// Surligne et fait défiler jusqu'à la position du commentaire
const highlightAndScrollTo = (start, end, type) => {
  highlight(start, end, type);

  // Attendre que Vue mette à jour le DOM
  setTimeout(() => {
    // Trouver tous les spans
    const spans = document.querySelectorAll("section span");

    // Trouver le span surligné (celui qui contient le texte commenté)
    for (let i = 0; i < spans.length; i++) {
      if (
        spans[i].classList.contains("bg-[#FDC4CB]") ||
        spans[i].classList.contains("bg-[#FFE484]") ||
        spans[i].classList.contains("bg-[#F8B67A]") ||
        spans[i].classList.contains("bg-[#0E7265]")
      ) {
        // Faire défiler jusqu'à cet élément avec une animation fluide
        spans[i].scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      }
    }
  }, 50); // Un petit délai pour s'assurer que le DOM est mis à jour
};

const resetSegments = () => {
  if (manuscrit.value[0]?.normalized_text) {
    const cleanText = manuscrit.value[0].normalized_text.replace(
      /<[^>]*>/g,
      ""
    );
    highlightedSegments.value = [{ text: cleanText, highlight: false }];
  } else {
    highlightedSegments.value = [];
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
    console.log(manuscrit.value);
  }
};

const loadCommentaires = async () => {
  const { data, error } = await $supabase
    .from("Comment")
    .select("*")
    .eq("manuscript_id", 1);

  if (error) {
    console.error(error.message);
  } else {
    feedbacks.value = data;
  }
};

const getUserInfo = async () => {
  const { data, error } = await $supabase
    .from("User")
    .select("*")
    .eq("user_id", "034121ae-c44f-44fd-ad93-219b368406aa");

  if (error) {
    console.error(error.message);
  } else {
    console.log(data);
    user.value = data;
  }
};

const closeOnBackdropClick = () => {
  // Close the modal if the user clicks outside the content area
  isTooltipVisible.value = false;
};

document.addEventListener("keydown", function (event) {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key === "I")
  ) {
    event.preventDefault();
    alert("Accès interdit !");
  }
});

const disableShortcuts = (event) => {
  if (
    (event.ctrlKey || event.metaKey) &&
    ["c", "x", "v", "a", "s", "u"].includes(event.key.toLowerCase())
  ) {
    event.preventDefault();
    alert("Cette action est désactivée !");
  }
};

onMounted(() => {
  document.addEventListener("keydown", disableShortcuts);
});

onUnmounted(() => {
  document.removeEventListener("keydown", disableShortcuts);
});

// Soumettre le commentaire
const submitComment = async (isDraft) => {
  try {
    const cleanCorrection = newComment.value.text.replace(/<[^>]*>/g, "");
    const cleanComment =
      newComment.value.comment?.replace(/<[^>]*>/g, "") || "";

    const { error } = await $supabase.from("Comment").insert({
      manuscript_id: 1,
      beta_reader_id: "52042518-ae3a-483f-836f-8e0b4d752bb5",
      correction: cleanCorrection,
      content: cleanComment,
      type_comment: selectedType.value,
      is_draft: isDraft,
      position: {
        start: newComment.value.positionA,
        end: newComment.value.positionB,
      },
      selectedText: newComment.value.selectedText, // Add this
    });

    if (error) throw error;
  } catch (error) {
    console.error(error.message);
  } finally {
    addFeedback(isDraft);
    newComment.value.text = "";
    isTooltipVisible.value = false;
  }
};

const cancelComment = () => {
  isTooltipVisible.value = false;
  selectedTextRange.value = null;
};
// Segments du texte surlignés
const highlightedSegments = ref([]);
onMounted(() => {
  resetSegments();
  loadChapter();
  loadCommentaires();
  getUserInfo();
});
</script>

<style scoped>
.text-container {
  width: 70%;
  padding: 1rem;
  line-height: 1.6;
  font-size: 16px;
  position: relative;
}

.sidebar {
  width: 30%;
  background-color: #f5f5f5;
  padding: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 1rem;
  cursor: pointer;
}

.tooltip {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 10px;
  z-index: 1000;
  width: fit-content;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
