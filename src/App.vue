<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <AppHeader></AppHeader>
  <main>
    <section class="container-fluid" style='padding: 0;padding-top:60px;'>
      <AppProfile></AppProfile>
      <AppProyectos></AppProyectos>
    </section>
    

  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppProfile from './components/AppProfile.vue';
import AppProyectos from './components/AppProyectos.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default {
  name: 'App',
  mounted() {
    AOS.init();
    // var fechas = []
    document.querySelectorAll('.proyecto').forEach((proyecto) => {
        proyecto.getAttribute('fecha')
        console.log(proyecto.getAttribute('data-fecha'))
    });
  },
  components: {
    // HelloWorld,
    AppHeader,
    AppProfile,
    AppProyectos,
  }
}

</script>

<style>
#app{
    font-family: Inter;
}
.scrollbar-tag{
  padding: 7px;
  color: #fff;
  background-color: #000;
  border-radius: 5px;
  position: absolute;
  top: -12px;
  right: 20px;
  align-content: center;
}

</style>
