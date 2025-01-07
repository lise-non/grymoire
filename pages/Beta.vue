<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-4">Manuscrit</h1>
    <AnnotableText>
      <p>
        Voici un exemple de texte. Les bêta-lecteurs peuvent surligner une
        partie du texte et ajouter leurs commentaires. Chaque partie annotée
        peut être associée à un commentaire spécifique.
      </p>
    </AnnotableText>

    <!-- Liste des commentaires -->
    <div class="mt-8">
      <h2 class="text-xl font-bold">Commentaires ajoutés</h2>
      <ul class="mt-4 space-y-2">
        <li
          v-for="comment in comments"
          :key="comment.id"
          class="p-4 border rounded bg-gray-50 shadow"
        >
          <p><strong>Texte :</strong> {{ comment.text }}</p>
          <p><strong>Commentaire :</strong> {{ comment.comment }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import AnnotableText from "~/components/AnnotableText.vue";
import { comments } from "~/components/AnnotableText.vue";
</script>
