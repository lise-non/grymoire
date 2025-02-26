export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  if (url.pathname === "/") {
    // Consider redirecting to connexion if not logged in by default
    return sendRedirect(event, "/connexion", 302);
  }
});
