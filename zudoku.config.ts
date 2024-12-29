import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  topNavigation: [
    { id: "api", label: "API Reference" },
  ],
  sidebar: {}, // No sidebar
  redirects: [{ from: "/", to: "/api" }], // Redirect root to API Reference
  apis: {
    type: "file",
    input: "./apis/bargainwale-docs.json", // Path to your API file
    navigationId: "api",
  },
  
};

export default config;
