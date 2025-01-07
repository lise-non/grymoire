<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Main Content -->
    <main class="flex-1 p-6" v-if="manuscrit[0]">
      <header class="mb-6">
        <h1 class="text-2xl font-bold">08 {{ manuscrit[0].title }}</h1>
        <p class="text-gray-500">Chapitre 8 - {{ manuscrit[0].title }}</p>
      </header>
      <section class="bg-white p-6 rounded-lg shadow">
        <p class="text-gray-700 leading-loose" @mouseup="handleTextSelection">
          {{ manuscrit[0].normalized_text }}
        </p>
      </section>
    </main>
    <div
      v-if="isTooltipVisible"
      class="tooltip"
      :style="{
        top: tooltipPosition.top + 'px',
        left: props.sidebarOpen
          ? tooltipPosition.left + 'px'
          : tooltipPosition.left + 'px' + '300px',
      }"
    >
      <form @submit.prevent="addFeedback">
        <div>
          <span class="text-gray-700 font-semibold">Votre retour</span>
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

      <!-- <form @submit.prevent="addFeedback">
        <div class="space-y-4">
          <div>
            <span class="text-gray-700 font-semibold">Type de commentaire</span>
            <div class="flex space-x-4 mt-2">
              <button
                type="button"
                :class="[
                  selectedType === 'Orthographe'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-700',
                  'px-4 py-2 rounded-lg transition hover:bg-red-600',
                ]"
                @click="selectType('Orthographe')"
              >
                Orthographe
              </button>
              <button
                type="button"
                :class="[
                  selectedType === 'Scénario'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700',
                  'px-4 py-2 rounded-lg transition hover:bg-green-600',
                ]"
                @click="selectType('Scenario')"
              >
                Scénario
              </button>
              <button
                type="button"
                :class="[
                  selectedType === 'Cohérence'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700',
                  'px-4 py-2 rounded-lg transition hover:bg-blue-600',
                ]"
                @click="selectType('Cohérence')"
              >
                Cohérence
              </button>
            </div>
          </div>

          <label class="block">
            <span class="text-gray-700">Votre commentaire</span>
            <textarea
              v-model="comment"
              class="w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-indigo-500"
              rows="4"
              placeholder="Saisissez votre commentaire ici..."
            ></textarea>
          </label>
        </div>

        <div class="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            @click="$emit('close')"
            class="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
          >
            Annuler
          </button>
          <button
            type="submit"
            class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
            @click.prevent="submitComment"
          >
            Envoyer le commentaire
          </button>
        </div>
      </form> -->
    </div>
    <!-- Comments Sidebar -->
    <aside class="bg-white w-1/3 p-6 shadow-lg border-l overflow-auto">
      <h2 class="text-lg font-bold">
        Vos retours
        <span class="bg-[#0E7265] text-white p-1 rounded-md text-xs">{{
          feedbacks.length
        }}</span>
      </h2>
      <ul class="mt-4 space-y-4">
        <li
          v-for="feedback in feedbacks"
          :key="feedback.id"
          @mouseover="highlight(feedback.positionA, feedback.positionB)"
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

          <span v-if="feedback.is_draft == true" class="text-[#0E7265] text-xs">
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
          <p v-if="manuscrit[0]" class="text-gray-700 text-sm">
            "
            {{
              manuscrit[0]?.normalized_text.slice(
                feedback.position.start,
                feedback.position.end
              )
            }}
            "
          </p>
          <br />
          <p class="text-gray-700 text-sm">{{ feedback.correction }}</p>
          <button @click="editFeedback(index)">Modifier</button>
          <button @click="deleteFeedback(feedback.comment_id)">
            Supprimer
          </button>
        </li>
      </ul>
    </aside>
    <!-- Modal pour modifier un commentaire -->
    <div v-if="isEditModalVisible" class="modal">
      <form @submit.prevent="updateFeedback">
        <textarea
          v-model="editedFeedback.comment"
          class="w-full p-2 border"
          placeholder="Modifiez votre commentaire"
        ></textarea>
        <select v-model="editedFeedback.type" class="w-full p-2 border">
          <option value="orthographe">Orthographe</option>
          <option value="scenario">Scénario</option>
          <option value="coherence">Cohérence</option>
          <option value="commentaire">Commentaire</option>
        </select>
        <button type="submit" class="mt-2 bg-blue-500 text-white p-2">
          Enregistrer
        </button>
        <button @click="closeEditModal" class="mt-2 bg-gray-500 text-white p-2">
          Annuler
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import { useNuxtApp } from "#app";
import moment from "moment";
import { useAuth } from "~/composables/useAuth";
import "moment/locale/fr";
moment().format();
moment.locale("fr");

const { $supabase } = useNuxtApp();
const user = ref();
const manuscrit = ref({});

const feedbacks = ref([]);
const selectedType = ref();
const commentaires = ref([]);
const isEditModalVisible = ref(false);
const editedFeedback = ref({ id: null, comment: "", type: "" });
const currentEditIndex = ref(null);

// Tooltip
const isTooltipVisible = ref(false);
const tooltipPosition = ref({ top: 0, left: 0 });

const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    required: true,
  },
});

// Nouveau commentaire
const newComment = ref({
  text: "",
  positionA: 0,
  positionB: 0,
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
      top: rect.top + window.scrollY + 50, // Ajustement pour positionner au-dessus du texte
      left: rect.left + window.scrollX,
    };

    // Définition des positions de la sélection pour l'ajout du commentaire
    const start = range.startOffset;
    const end = range.endOffset;

    newComment.value.positionA = start;
    newComment.value.positionB = end;

    isTooltipVisible.value = true;
  }
};

// Ajout d'un commentaire
const addFeedback = () => {
  console.log(feedbacks.value.length);
  feedbacks.value.push({
    id: feedbacks.value.length + 1,
    correction: newComment.value.text,
    content: newComment.value.comment,
    type_comment: selectedType.value,
    position: [newComment.value.positionA, newComment.value.positionB],
  });
  console.log(feedbacks.value);
  // Réinitialisation
};

// Gestion du surlignage
const highlight = (start, end) => {
  const text = manuscrit.value[0].normalized_text;

  highlightedSegments.value = [
    { text: text.slice(0, start), highlight: false },
    { text: text.slice(start, end), highlight: true },
    { text: text.slice(end), highlight: false },
  ];
};

const resetSegments = () => {
  highlightedSegments.value = [
    { text: manuscrit.value[0]?.normalized_text, highlight: false },
  ];
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
    console.log("ici");
    feedbacks.value = data;
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

const deleteFeedback = async (id) => {
  const { error } = await $supabase
    .from("Comment")
    .delete()
    .eq("comment_id", id);

  if (error) {
    console.error("Erreur lors de la suppression du commentaire :", error);
  } else {
    feedbacks.value = feedbacks.value.filter((feedback) => feedback.id !== id);
  }
};

const editFeedback = (index) => {
  currentEditIndex.value = index;
  editedFeedback.value = { ...feedbacks.value[index] }; // Copier les données existantes
  isEditModalVisible.value = true;
};

const closeOnBackdropClick = () => {
  // Close the modal if the user clicks outside the content area
  isTooltipVisible.value = false;
};

// Soumettre le commentaire
const submitComment = async (isDraft) => {
  console.log(newComment);
  try {
    const { error } = await $supabase.from("Comment").insert({
      manuscript_id: 1,
      beta_reader_id: "52042518-ae3a-483f-836f-8e0b4d752bb5", // Remplacez par l'ID de l'utilisateur connecté
      correction: newComment.value.text,
      content: newComment.value.comment,
      type_comment: selectedType.value,
      is_draft: isDraft,
      position: {
        start: newComment.value.positionA,
        end: newComment.value.positionB,
      },
    });

    if (error) throw error;
    alert("Commentaire ajouté avec succès !");
  } catch (error) {
    console.error(error.message);
    alert("Une erreur est survenue.");
  } finally {
    newComment.value.text = "";
    isTooltipVisible.value = false;
    addFeedback();
  }
};

const cancelComment = () => {
  console.log("sdjubdfsu");
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
  console.log(user.value);
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

.highlight {
  background-color: yellow;
}
</style>
