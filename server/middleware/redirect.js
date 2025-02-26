import { defineEventHandler, getRequestURL, sendRedirect } from "h3";

export default defineEventHandler((event) => {
  const url = getRequestURL(event);
  if (url.pathname === "/") {
    return sendRedirect(event, "/dashboard", 302);
  }
});
