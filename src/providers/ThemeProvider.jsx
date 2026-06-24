"use client";

export default function ThemeProvider({ children }) {
  // HeroUI v3 no longer uses or requires a root HeroUIProvider wrapper.
  // Dark/Light themes are handled natively via CSS and HTML class hooks.
  return <>{children}</>;
}
