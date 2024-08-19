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
.os-scrollbar-handle{
  z-index: 1;
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
.scrollbar-point{
  position:absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid;
  border-color: rgba(0, 0, 0, 0.55);
  background-color: #fff;
  right: -8px;
}

</style>
