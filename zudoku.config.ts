import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  topNavigation: [
    { id: "api", label: "API Reference" },
  ],
    page: {
      logo: {
        src: {
          light: "https://res.cloudinary.com/dmzp6notl/image/upload/v1735504289/Frame_111_wom8ot.png",
          dark: "https://res.cloudinary.com/dmzp6notl/image/upload/v1735505375/Group_7_qq2s3o.png"
        },
      }
    },
  sidebar: {}, // No sidebar
  redirects: [{ from: "/", to: "/api" }], // Redirect root to API Reference
  apis: {
    type: "file",
    input: "./apis/bargainwale-docs.json", // Path to your API file
    navigationId: "api",
  },
  metadata: {
    title: "Bargainwale Documentation",
    description: "Our platform simplifies business operations, enabling you to handle transactions and orders with unmatched efficiency and ease.",
    logo: "https://res.cloudinary.com/dmzp6notl/image/upload/v1735504289/Frame_111_wom8ot.png",
    favicon: "https://res.cloudinary.com/dmzp6notl/image/upload/v1735504290/Group_1-2_mguwgg.ico",
    generator: "Website Generator 1.0",
    applicationName: "Bargainwale_Documentation",
    referrer: "no-referrer",
    keywords: ["business", "management", "sales", "order"],
    authors: ["Devansh Saxena","Rishvant Singh","Raghav Khurana","Amrutansh Jha"],
    creator: "Devansh Saxena",
    publisher: "Reduxcorporation pvt. ltd."
  },
};

export default config;
