// middleware/auth.js
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $supabase } = useNuxtApp();

  // Properly await the Promise to get user data
  const { data, error } = await $supabase.auth.getUser();

  // If no user is found and we're not already on the login page
  if ((!data?.user || error) && to.path !== "/connexion") {
    return navigateTo("/connexion");
  }
});
