/*
 * @Author: thelostword
 * @Date: 2022-11-22 10:28:14
 * @LastEditors: thelostword
 * @LastEditTime: 2022-11-22 12:32:39
 * @FilePath: \thelostword\vite.config.js
 */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

const rootPath = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  root: rootPath,
  base: './',
  resolve: {
    alias: {
      '@': rootPath,
    },
  },
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
  },
});
