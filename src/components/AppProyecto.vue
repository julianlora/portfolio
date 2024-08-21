<template>
    <div :id="id" v-if="vista==='list'" :class="['proyecto', { 'col-12': vista === 'list' }, {'col-3': vista !== 'list' }]" :data-fecha="fecha" data-skills="PHP Laravel HTML CSS Bootstrap JavaScript MySQL Ajax JQuery">       
        <div class="portada-proyecto" :style="{ backgroundImage: `url(${imagen})` }"></div>
        <div class='proyecto-info'>
            <div class='d-flex'>
                <!-- <div class="proyecto-logo" style='background-image: url(imagenes/logoperez.jpg);'>

                </div> -->
                <div class="proyecto-encabezado">
                    <div class='d-flex justify-content-between'>
                        <div class='titulo'>{{ nombre }}</div>
                        <a :href="link" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
                    </div>
                    
                    <div class='iconos'>
                        <i v-if="tecnologias.includes('laravel')" class="fa-brands fa-laravel fa-xl"></i>
                        <i v-if="tecnologias.includes('php')" class="fa-brands fa-php fa-xl"></i>
                        <i v-if="tecnologias.includes('javascript')" class="fa-brands fa-js fa-xl"></i>
                        <i v-if="tecnologias.includes('html')" class="fa-brands fa-html5 fa-xl"></i>
                        <i v-if="tecnologias.includes('css')" class="fa-brands fa-css3-alt fa-xl"></i>
                        <i v-if="tecnologias.includes('bootstrap')" class="fa-brands fa-bootstrap fa-xl"></i>
                        <i v-if="tecnologias.includes('sql')" class="fa-solid fa-database fa-xl"></i>
                        <img v-if="tecnologias.includes('mp')" src="imagenes/mp.png" alt="" style="height: 32px;">
                    </div>
                </div>
            </div>
            <div class="descripcion">
                {{ descripcion }}    
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

    <div :id="id" v-if="vista==='mosaic'" class='m-proyecto col-3' :data-fecha='fecha' data-aos='fade-up'>
        <div class='m-proyecto-margin'>
            <div class='m-portada' :style="{ backgroundImage: `url(${imagen})` }">

            </div>
            <div class="m-info">
                {{ nombre }}
            </div>
            <div class='m-overlay'>
                <img @click="emitirEvento" src="../../public/imagenes/info.png" alt="" style="padding-right: 5px;">
                <a :href="link" target="_blank"><img src="../../public/imagenes/arrow-up.png" alt=""></a>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'AppProyecto',
    props: ['id','nombre', 'imagen', 'descripcion', 'link', 'tecnologias', 'vista', 'fecha'],
    emits: ['viewProject'],
    methods: {
        emitirEvento(){
            this.$emit('viewProject', this.nombre);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-proyecto{
    padding-bottom: 25px;
    padding-left: 0 !important;
    padding-right: 25px !important;
    
}
.m-proyecto-margin{
    overflow: hidden;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    height: 350px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    position: relative;
}
.m-portada{
    width: 100%;
    height: 270px;
    background-position:top; 
    background-repeat: no-repeat;
    background-size: cover;
}
.m-info{
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    flex-grow: 1;
    align-content: center;
    z-index: 100;
    transition: all 0.2s;
}
.m-overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    align-content: center;
    text-align: center;
    transition: all 0.2s;
}
.m-proyecto-margin:hover .m-overlay{
    opacity: 1;
}
.m-proyecto-margin:hover .m-info{
    color: #fff;
}
.m-overlay img{
    height: 35px;
}

.proyecto{
    display: flex;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 25px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 25px;
    height: 388px;
    transition: all 0.01s;
    width: calc(100% - 95px);
}

.portada-proyecto{
    background-position:top; 
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 430px;
    margin-right: 25px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
}

.proyecto-info{
    width: 100%;    
}

.proyecto-logo{
    /* height: 100px;
    width: 100px; */
    background-position:center; 
    background-repeat: no-repeat;
    background-size: contain;
}

.proyecto-encabezado{
    width: 100%;
    align-content: center;
}

.titulo{
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 5px;
}

.proyecto a{
    color: grey;
}

.proyecto a:hover{
    color: #000;
}

.iconos{
    /* margin-bottom: 20px; */
}

.descripcion{
    padding-bottom: 20px;
}

.proyecto-imagenes{
    /* width: 100%; */
}

.proyecto-img{
    background-position:top; 
    background-repeat: no-repeat;
    background-size: cover;
    height: 20vh;
    width: 25vh;
    margin-right: 20px;
    border: 1px solid #d9d9d9;
    cursor: pointer;
    transition: transform 0.3s;
}

.proyecto-img:hover{
    transform: scale(1.08); 
}
</style>