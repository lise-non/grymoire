<template>
  <div class="container mx-auto py-8 flex">
    <!-- Texte du manuscrit -->
    <div class="flex-1 border-r pr-4">
      <h1 class="text-2xl font-bold mb-4">Manuscrit</h1>
      <p>
        Voici un exemple de texte. Les annotations ajoutées par les
        bêta-lecteurs apparaissent dans la barre latérale à droite.
      </p>
    </div>

    <!-- Barre latérale des commentaires -->
    <div class="w-1/3 pl-4">
      <h2 class="text-xl font-bold mb-4">Commentaires</h2>
      <ul class="space-y-4">
        <li
          v-for="comment in comments"
          :key="comment.id"
          class="p-4 border rounded bg-gray-50 shadow"
        >
          <p><strong>Texte :</strong> {{ comment.text }}</p>
          <p><strong>Commentaire :</strong> {{ comment.comment }}</p>
          <div class="mt-2 space-x-2">
            <button
              class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Valider
            </button>
            <button
              class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Refuser
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { comments } from "./pages/AnnotableText.vue";
</script>
