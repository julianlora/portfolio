<template>
<div class='profile-cont'>
    <div id="profile" class='d-flex flex-column border-end border-2'>
        <div id='profile-img'></div>
        <div style='font-weight: 600; font-size: 18px;'>Julián Lora</div>
        <div>Buenos Aires, Argentina</div>
        <div class="d-flex redes">
            <a href="https://github.com/julianlora" target="_blank"><i class="fa-brands fa-github fa-xl"></i></a>
            <a href="https://www.linkedin.com/in/julian-lora/" target="_blank"><i class="fa-brands fa-linkedin fa-xl"></i></a>
            <a href="https://wa.me/+541131560155" target="_blank"><i class="fa-brands fa-whatsapp fa-xl"></i></a>
        </div>
        <div id='info'>
            <div>
                Desarrollador Full Stack especializado en el desarrollo de soluciones web integrales.
De la mano del trabajo riguroso y comprometido he generado sistemas de negocio que proveen valor al trabajo de numerosas empresas, impactando procesos vitales que involucran miles de clientes y empleados. La estrecha colaboración con clientes y equipos de diseño garantizan soluciones eficientes y
 personalizadas. Me caracterizo por mi proactividad, capacidad de liderazgo y compromiso con la mejora
 continua.
            </div>
        </div>
        <div class='btns text-center'>
            <button @click="about" class='about-btn' data-alt='<i class="fa-solid fa-arrow-left"></i> Mis proyectos'>Sobre mí <i class="fa-solid fa-arrow-right"></i></button>
            <a target="_blank" download="Julián Lora CV" href="/archivos/spa.pdf"><button class='about-btn' >Descargar CV</button></a>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
name: 'AppProfile',
methods:{
    about(){
        const element = document.querySelector('.profile-cont')
        element.classList.toggle('expanded')
        const btn = document.querySelector('.about-btn')
        let alt = btn.getAttribute('data-alt')
        btn.setAttribute('data-alt', btn.innerHTML)
        btn.innerHTML = alt
      }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-cont{
    padding: 0;
    position: fixed;
    width: 230px;
    /* width: 100%; */
    height: 100%;
    transition: width 0.5s;
    background-color: #fff;
    z-index: 2;
}

.expanded .btns{
    display: flex;
}

.expanded .btns button{
    margin-right: 8px;
    margin-left: 8px;
}

#profile{
    align-items: center;
    /* transform: translateY(-180px); */
    background-color: #fff;
    box-shadow: 10px -6px 15px rgba(0, 0, 0, 0.1);
    height: 100%;
}

#profile-img{
    width: 160px;
    height: 160px;
    background-image: url(../assets/photo_4927435955602828172_x.jpg);
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin-top: 50px;
    margin-bottom: 20px;
}

.about-btn{
    background-color: #000;
    color: #fff;
    width: 150px;
    height: 45px;
    transition: all 0.3s;
    margin-top: 20px
}

.about-btn:hover{
    background-color: #fff;
    color: #000;
}
.expanded{
    width: 100%;
}

#info{
    display: none;
}

.expanded #info{
    display: block;
    max-width: 600px;
    text-align: justify;
    margin-top: 20px;
}

.redes a{
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 10px;
    text-decoration: none;
    /* color: #000; */
    transition: all 0.2s;
}

.redes a:hover{
    color: #000;
}

@media (max-width: 768px){
    .profile-cont{
        display: none;
    }
}
</style>