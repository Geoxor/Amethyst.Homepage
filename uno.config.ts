import { defineConfig, presetWind3, transformerDirectives } from 'unocss'

export default defineConfig({
	shortcuts: {
		"absolute-xy": "absolute top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2",
		"absolute-x": "absolute left-1/2 transform-gpu -translate-x-1/2",
		"absolute-y": "absolute top-1/2 transform-gpu -translate-y-1/2",
	},
  presets: [
    presetWind3({
			dark: "class"
		}),
  ],
	rules: [
    // Override the truncate class to only apply overflow-hidden
    ['truncate', { overflow: 'hidden' }],
  ],
	transformers: [
    transformerDirectives(),
  ],
})
