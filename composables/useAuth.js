export const useAuth = () => {
  const { $supabase } = useNuxtApp();

  const user = ref(null);

  const signUp = async (email, password) => {
    const { data, error } = await $supabase.auth.signUp({ email, password });
    if (error) throw error;
    user.value = data.user;
  };

  const signIn = async (email, password) => {
    const { data, error } = await $supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    user.value = data.user;
  };

  const signOut = async () => {
    await $supabase.auth.signOut();
    user.value = null;
  };

  const fetchUser = async () => {
    const { data, error } = await $supabase.auth.getUser();
    if (data?.user) {
      user.value = data.user; // Utilisation correcte de la variable réactive
    } else if (error) {
      console.error("Erreur lors de la récupération de l’utilisateur :", error);
    }
  };

  onMounted(() => {
    fetchUser();
    $supabase.auth.onAuthStateChange(() => {
      fetchUser();
    });
  });

  return { user, signUp, signIn, signOut, fetchUser };
};
