// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@mui/styled-engine': '@mui/styled-engine-sc',
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  build: {
    rollupOptions: {
      input: "/src/index.js", 
    },
  },
});

