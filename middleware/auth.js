// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  const { $supabase } = useNuxtApp();
  const user = $supabase.auth.getUser();

  if (!user && to.path !== "/connexion") {
    return navigateTo("/connexion");
  }
});
