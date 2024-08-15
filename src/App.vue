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
</style>
