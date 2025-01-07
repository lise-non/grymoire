<template>
  <div class="relative">
    <!-- Texte du manuscrit -->
    <div
      ref="textContainer"
      class="prose max-w-none border p-4 bg-white shadow"
      @mouseup="handleTextSelection"
    >
      <slot></slot>
    </div>

    <!-- Boîte pour ajouter un commentaire -->
    <div
      v-if="selectedText"
      class="fixed z-50 p-4 bg-gray-100 border shadow rounded-md"
    >
      <textarea
        v-model="comment"
        class="w-full border rounded p-2"
        rows="3"
        placeholder="Ajouter un commentaire"
      ></textarea>
      <button
        @click="addComment"
        class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Ajouter
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const selectedText = ref(null);
const comment = ref("");
const comments = reactive([]);

// Fonction pour gérer la sélection de texte
const handleTextSelection = () => {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const text = selection.toString().trim();

  if (text) {
    const rect = range.getBoundingClientRect();
    selectedText.value = { text, rect };
  } else {
    selectedText.value = null;
  }
};

// Fonction pour ajouter un commentaire
const addComment = () => {
  if (selectedText.value && comment.value.trim()) {
    comments.push({
      text: selectedText.value.text,
      comment: comment.value,
      id: Date.now(),
    });
    selectedText.value = null;
    comment.value = "";
  }
};
</script>

<style scoped>
.prose {
  font-family: serif;
  line-height: 1.6;
  font-size: 1.125rem;
}
</style>
