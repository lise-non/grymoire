// composables/useProjet.js
import { ref } from "vue";
import { useNuxtApp } from "#app";

export const useProjet = () => {
  const { $supabase } = useNuxtApp();
  const projets = ref([]); // Initialisation correcte à un tableau vide
  const isLoading = ref(false);
  const errorMessage = ref(null);

  // Fonction pour récupérer la session utilisateur
  const getSession = async () => {
    try {
      // Récupérer la session utilisateur actuelle avec getSession()
      const {
        data: { session },
        error,
      } = await $supabase.auth.getSession();

      if (error) {
        errorMessage.value = "Erreur lors de la récupération de la session.";
        return null;
      }

      return session;
    } catch (error) {
      errorMessage.value = "Erreur système: " + error.message;
      return null;
    }
  };

  // Fonction pour récupérer les projets de l'utilisateur
  const getProjetsByAuteur = async () => {
    isLoading.value = true;
    errorMessage.value = null;

    try {
      // Obtenir la session utilisateur
      const session = await getSession();

      // Vérifier si l'utilisateur est connecté
      if (!session || !session.user) {
        errorMessage.value = "Utilisateur non connecté.";
        return;
      }

      // L'utilisateur est connecté, récupérer l'ID
      const userId = session.user.id;

      // Vérifier si l'ID utilisateur est valide
      if (!userId) {
        errorMessage.value = "ID utilisateur invalide.";
        return;
      }

      // Récupérer les projets associés à l'utilisateur (filtrés par ID_Auteur)
      const { data, error } = await $supabase
        .from("Project")
        .select("*")
        .eq("author_id", userId);

      if (error) {
        errorMessage.value = error.message;
        return;
      }

      projets.value = data;
    } catch (error) {
      errorMessage.value =
        error.message || "Erreur lors de la récupération des projets.";
    } finally {
      isLoading.value = false;
    }
  };

  return { projets, isLoading, errorMessage, getProjetsByAuteur };
};
