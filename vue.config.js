module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/portfolio/'  // Debe coincidir exactamente con el nombre de tu repositorio
    : '/',
  assetsDir: '', // Esto ayudará a mantener las rutas más simples
}