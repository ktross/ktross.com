module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
      'resources/**/*.js',
      'resources/**/*.ts',
      'resources/**/*.php',
      'resources/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
