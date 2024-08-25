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
    font-family: Poppins;
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
  top: -8px;
  right: 23px;
  align-content: center;
  font-size: 14px;
  transition: all 0.15s;
  cursor:default;
}
.scrollbar-tag.scrolling{
  /* transform: scale(1.1); */
  font-size: large;
  top: -12px;
}
.scrollbar-point{
  position:absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 3px solid;
  border-color: rgba(0, 0, 0, 0.55);
  background-color: #fff;
  right: 3px;
  transition: border-color 0.15s, background-color 0.15s;
}
.scrollbar-point.scrolled{
  border-color: #000;
  background-color: #000;
}
#secondary-track{
  position: absolute;
  left: 9px;
  top: 0;
  width: 3px;
  background-color: #000;
}


</style>
