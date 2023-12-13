import { resolve } from "path";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import * as packageJson from "./package.json";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      include: ["src/"],
    }),
    react(),
    tsConfigPaths(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "ReactDatamapsIndia",
      fileName: "react-datamaps-india",
    },
    rollupOptions: {
      // @ts-ignore
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  }
});
