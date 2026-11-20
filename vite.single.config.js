// Gera um único arquivo HTML (dist-arquivo/index.html) para abrir direto no computador.
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
export default defineConfig({ base: './', plugins: [viteSingleFile()], build: { outDir: 'dist-arquivo', target: 'es2020' } });
