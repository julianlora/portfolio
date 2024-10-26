// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'
// });

module.exports = {
  publicPath: '/',
  outputDir: 'docs'  // Esto hará que Vue compile en una carpeta 'docs' en lugar de 'dist'
}