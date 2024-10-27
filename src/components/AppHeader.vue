<template>
    <header class='container-fluid border border-2 d-flex justify-content-center'>
      <div>
        <div class="d-flex w-100 justify-content-center">
          <div id='m-profile-img'></div>
        </div>
        
        <button @click="mabout" class='m-about-btn' data-alt='<i class="fa-solid fa-arrow-left"></i> Mis proyectos'>Sobre mí</button>
      </div>
    </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    mabout(){
      document.querySelector('header').classList.toggle('open')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  position: absolute;
  bottom: 0;
  z-index: 1;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  height: 125px;
}
#m-profile-img{
  width: 60px;
  height: 60px;
  background-image: url(../assets/photo_4927435955602828172_x.jpg);
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 5px;
}
.m-about-btn{
    background-color: #000;
    color: #fff;
    width: 120px;
    height: 35px;
    transition: all 0.3s;
    border-radius: 8px;
}
.open{
  height: 100vh;
}
@media (min-width: 768px){
  header{
    display: none !important;
  }
}
</style>
  