// composables/useCommentaires.js
import { ref } from "vue";
import { useNuxtApp } from "#app";

export const useCommentaires = () => {
  const { $supabase } = useNuxtApp();
  const commentaires = ref([]);
  const errorMessage = ref(null);
  const isLoading = ref(false);

  const getCommentaires = async (ID_Manuscrit) => {
    isLoading.value = true;
    try {
      const { data, error } = await $supabase
        .from("Comment")
        .select("*")
        .eq("manuscript_id", ID_Manuscrit);

      if (error) throw error;
      commentaires.value = data;
    } catch (error) {
      errorMessage.value = error.message;
    } finally {
      isLoading.value = false;
    }
  };

  const addCommentaire = async (commentaire) => {
    try {
      const { data, error } = await $supabase
        .from("Comment")
        .insert(commentaire);

      if (error) throw error;
      commentaires.value.push(data[0]);
    } catch (error) {
      errorMessage.value = error.message;
    }
  };

  return {
    commentaires,
    isLoading,
    errorMessage,
    getCommentaires,
    addCommentaire,
  };
};
