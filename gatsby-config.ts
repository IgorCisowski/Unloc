import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-provide-react",
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
        web: [
          {
            name: "Red Hat Display",
            file: "https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        resolveModules: [path.join(__dirname, "src")],
        "@": path.join(__dirname, "src"),
      },
    },
  ],
};

export default config;
