<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <AppHeader></AppHeader>
  <main>
    <section class="container-fluid" style='padding: 0;padding-top:60px;'>
      <AppProfile></AppProfile>
    </section>

    <div style="padding-left: 200px;">
      <!-- PROYECTOS -->
      <div class="proyecto-cont">
          <!-- <div class='seccion-titulo' data-aos='fade-left'>
              Skills
          </div>
          <div class="skills" data-aos='fade-left'>
              <span>PHP</span>
              <span>Laravel</span>
              <span>JavaScript</span>
              <span>JQuery</span>
              <span>Ajax</span>
              <span>MySQL</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Python</span>
              <span>C++</span>
              <span>Java</span>
              <span>Spring</span>
          </div> -->
          <div class='seccion-titulo'>
              Proyectos
          </div>

          <div class="proyectos">
              <div class="proyecto" data-aos='fade-up' data-skills="PHP Laravel HTML CSS Bootstrap JavaScript MySQL Ajax JQuery">
                  <div class="portada-proyecto" style='background-image: url(imagenes/casaperez.png);'></div>
                  <div class='proyecto-info'>
                      <div class='d-flex'>
                          <div class="proyecto-logo" style='background-image: url(imagenes/logoperez.jpg);'>

                          </div>
                          <div class="proyecto-encabezado">
                              <div class='d-flex justify-content-between'>
                                  <div class='titulo'>Casa Perez</div>
                                  <a href="https://d1.osole.com.ar/casaperez/public/" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
                              </div>
                              
                              <div class='iconos'>
                                  <i class="fa-brands fa-laravel fa-xl"></i>
                                  <i class="fa-brands fa-php fa-xl"></i>
                                  <i class="fa-brands fa-js fa-xl"></i>
                                  <i class="fa-brands fa-html5 fa-xl"></i>
                                  <i class="fa-brands fa-css3-alt fa-xl"></i>
                                  <i class="fa-brands fa-bootstrap fa-xl"></i>
                                  <i class="fa-solid fa-database fa-xl"></i>
                                  <img src="imagenes/mp.png" alt="" style="height: 32px;">
                              </div>
                          </div>
                      </div>
                      <div class="descripcion">
                          E-commerce personalizado desarrollado para control de stock y ventas. Contenido administrable de forma dinámica. Zona privada. Carrito. Tipos de envío. Medios de pago. Integración con Mercado Pago. Actualización masiva de productos mediante excel. Generación de archivos xml para integración con Electrobase.
                      </div>
                      <!-- <div class='proyecto-imagenes d-flex'>
                          <div class='proyecto-img' style="background-image: url(imagenes/casaperez.png);" data-bs-toggle="modal" data-bs-target="#exampleModal" data-src="imagenes/casaperez.png">

                          </div>
                          <div class='proyecto-img' style="background-image: url(imagenes/casaperez2.png);" data-bs-toggle="modal" data-bs-target="#exampleModal" data-src="imagenes/casaperez2.png">

                          </div>
                          <div class='proyecto-img' style="background-image: url(imagenes/casaperez3.png);" data-bs-toggle="modal" data-bs-target="#exampleModal" data-src="imagenes/casaperez3.png">

                          </div>
                      </div> -->
                  </div>
              </div>

              <div class="proyecto" data-aos='fade-up' data-skills="PHP Laravel HTML CSS Bootstrap JavaScript MySQL Ajax JQuery">
                  <div class="portada-proyecto" style='background-image: url(imagenes/pmr.png);'></div>
                  <div class='proyecto-info'>
                      <div class='d-flex'>
                          <div class="proyecto-logo" style='background-image: url(imagenes/pmrlogo.png);'>

                          </div>
                          <div class="proyecto-encabezado">
                              <div class='d-flex justify-content-between'>
                                  <div class='titulo'>PMR Industria</div>
                                  <a href="https://pmr.com.ar/" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
                              </div>
                              
                              <div class='iconos'>
                                  <i class="fa-brands fa-laravel fa-xl"></i>
                                  <i class="fa-brands fa-php fa-xl"></i>
                                  <i class="fa-brands fa-js fa-xl"></i>
                                  <i class="fa-brands fa-html5 fa-xl"></i>
                                  <i class="fa-brands fa-css3-alt fa-xl"></i>
                                  <i class="fa-brands fa-bootstrap fa-xl"></i>
                                  <i class="fa-solid fa-database fa-xl"></i>
                              </div>
                          </div>
                      </div>
                      <div class="descripcion">
                          Página web con contenido gestionable de forma dinámica. Imágenes, videos, contacto y solicitudes de presupuesto.
                      </div>
                      <!-- <div class='proyecto-imagenes d-flex'>
                          <div class='proyecto-img' style="background-image: url(imagenes/pmr.png);" data-bs-toggle="modal" data-bs-target="#exampleModal" data-src="imagenes/pmr.png">

                          </div>
                          <div class='proyecto-img' style="background-image: url(imagenes/pmr2.png);" data-bs-toggle="modal" data-bs-target="#exampleModal" data-src="imagenes/pmr2.png">

                          </div>
                          <div class='proyecto-img' style="background-image: url(imagenes/pmr3.png);" data-bs-toggle="modal" data-bs-target="#exampleModal" data-src="imagenes/pmr3.png">

                          </div>
                      </div> -->
                  </div>
              </div>

              <div class="proyecto" data-aos='fade-up' data-skills="PHP Laravel HTML CSS Bootstrap JavaScript MySQL Ajax JQuery">
                  <div class="portada-proyecto" style='background-image: url(imagenes/andes.png);'></div>
                  <div class='proyecto-info'>
                      <div class='d-flex'>
                          <div class="proyecto-logo" style='background-image: url(imagenes/andeslogo.png);'>

                          </div>
                          <div class="proyecto-encabezado">
                              <div class='d-flex justify-content-between'>
                                  <div class='titulo'>Andes Elevadores</div>
                                  <a href="https://www.andeselevadores.com.ar/" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
                              </div>
                              <div class='iconos'>
                                  <i class="fa-brands fa-laravel fa-xl"></i>
                                  <i class="fa-brands fa-php fa-xl"></i>
                                  <i class="fa-brands fa-js fa-xl"></i>
                                  <i class="fa-brands fa-html5 fa-xl"></i>
                                  <i class="fa-brands fa-css3-alt fa-xl"></i>
                                  <i class="fa-brands fa-bootstrap fa-xl"></i>
                                  <i class="fa-solid fa-database fa-xl"></i>
                              </div>
                          </div>
                      </div>
                      
                      <div class="descripcion">
                          Página web con contenido gestionable de forma dinámica. Imágenes, videos, contacto y solicitudes de presupuesto.
                      </div>
                      <!-- <div class='proyecto-imagenes d-flex'>
                          <div class='proyecto-img' style="background-image: url(imagenes/andes.png);" data-bs-toggle="modal" data-bs-target="#exampleModal" data-src="imagenes/andes.png">

                          </div>
                          <div class='proyecto-img' style="background-image: url(imagenes/andes2.png);" data-bs-toggle="modal" data-bs-target="#exampleModal" data-src="imagenes/andes2.png">

                          </div>
                          <div class='proyecto-img' style="background-image: url(imagenes/andes3.png);" data-bs-toggle="modal" data-bs-target="#exampleModal" data-src="imagenes/andes3.png">

                          </div>
                      </div> -->
                  </div>
              </div>

          </div>
      </div>
  </div>

<!-- MODALES -->
<section>
  <!-- IMAGENES -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog  modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img class="visualizador" id="modal-img" src="" alt="">
          </div>
        </div>
      </div>
  </div>
</section>
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppProfile from './components/AppProfile.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    AppHeader,
    AppProfile,
  }
}
</script>

<style>
#app{
    font-family: Inter;
}
</style>
