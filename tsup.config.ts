import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm'],
  dts: true,
  entry: ['src/index.ts'],
  esbuildOptions: () => ({
    jsx: 'preserve',
    jsxDev: true,
  }),
})
