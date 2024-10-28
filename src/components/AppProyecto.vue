<template>
    <div :id="id" v-if="vista==='list' && (!filtro || tecnologias.includes(filtro))"  :class="['proyecto', { 'col-12': vista === 'list' }, {'col-3': vista !== 'list' }]" :data-fecha="fecha" :data-skills="tecnologias.join(' ')">       
        <div class="portada-proyecto" :style="{ backgroundImage: `url(${imagen})` }"></div>
        <div class='proyecto-info'>
            <div class='d-flex'>
                <!-- <div class="proyecto-logo" style='background-image: url(imagenes/logoperez.jpg);'>

                </div> -->
                <div class="proyecto-encabezado">
                    <div class='d-flex justify-content-between'>
                        <div class="d-flex align-items-center">
                            <div class='titulo d-flex'>{{ nombre }}</div>
                            <i v-if="estado" class="fa-solid fa-circle ps-2" :style="{ color: estado === 'Desplegado' ? '#63E6BE' : estado === 'En desarrollo' ? '#FFD43B' : ''  }"></i>
                            <div v-if="estado" class="ps-1">{{estado}}</div>
                        </div>
                        
                        <a :href="link" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
                    </div>
                    
                    <div class='iconos'>
                        
                        <div v-if="tecnologias.includes('vue')"><i class="fa-brands fa-vuejs fa-xl"></i></div>
                        <div v-if="tecnologias.includes('python')"><i class="fa-brands fa-python fa-xl"></i></div>
                        <div v-if="tecnologias.includes('laravel')"><i class="fa-brands fa-laravel fa-xl"></i></div>
                        <div v-if="tecnologias.includes('tailwind')"><img src="imagenes/tailwind.png" alt="" style="height: 32px;"></div>
                        <div v-if="tecnologias.includes('php')"><i class="fa-brands fa-php fa-xl"></i></div>
                        <div v-if="tecnologias.includes('javascript')"><i class="fa-brands fa-js fa-xl"></i></div>
                        <div v-if="tecnologias.includes('html')"><i class="fa-brands fa-html5 fa-xl"></i></div>
                        <div v-if="tecnologias.includes('css')"><i class="fa-brands fa-css3-alt fa-xl"></i></div>
                        <div v-if="tecnologias.includes('bootstrap')"><i class="fa-brands fa-bootstrap fa-xl"></i></div>
                        <div v-if="tecnologias.includes('sql')"><i class="fa-solid fa-database fa-xl"></i></div>
                        <div v-if="tecnologias.includes('mp')"><img src="imagenes/mp.png" alt="" style="height: 32px;"></div>
                        <div v-if="tecnologias.includes('c++')"><img src="imagenes/c++.png" alt="" style="height: 32px;"></div>
                    </div>
                </div>
            </div>
            <div v-html="descripcion" class="descripcion"></div>
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

    <div :id="id" v-if="vista==='mosaic' && (!filtro || tecnologias.includes(filtro))" class='m-proyecto col-lg-6 col-xl-4 col-xxl-3' :data-fecha='fecha' :data-skills="tecnologias.join(' ')">
        <div class='m-proyecto-margin'>
            <div class='m-portada' :style="{ backgroundImage: `url(${imagen})` }">

            </div>
            <div class="m-info">
                {{ nombre }}
            </div>
            <div class='m-overlay'>
                <div v-if="estado" class="m-estado d-flex align-items-center">
                    <i class="fa-solid fa-circle ps-2" :style="{ color: estado === 'Desplegado' ? '#63E6BE' : estado === 'En desarrollo' ? '#FFD43B' : ''  }"></i>
                    <div class="ps-2">{{estado}}</div>
                </div>
                <img class='ver-mas' @click="emitirEvento" src="../../public/imagenes/info.png" alt="" style="padding-right: 5px;">
                <a :href="link" target="_blank"><img src="../../public/imagenes/arrow-up.png" alt=""></a>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'AppProyecto',
    props: ['id','nombre', 'imagen', 'descripcion', 'link', 'tecnologias', 'vista', 'fecha', 'filtro', 'estado'],
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
    padding-bottom: 35px;
    padding-left: 0 !important;
    padding-right: 35px !important;
    
}
.m-proyecto-margin{
    overflow: hidden;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    height: 330px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    position: relative;
}
.m-portada{
    width: 100%;
    height: 260px;
    background-position:top; 
    background-repeat: no-repeat;
    background-size: cover;
}
.m-info{
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    flex-grow: 1;
    align-content: center;
    z-index: 1;
    transition: all 0.2s;
    background-color: #fff;
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
    background-color: transparent;
}
.m-overlay img{
    height: 35px;
    transition: all 0.15s;
}

.m-overlay img:hover{
    transform: scale(1.2);
}
.ver-mas{
    cursor: pointer;
}
.m-estado{
    position: absolute;
    top: 5px;
    left: 0;
    padding: 5px;
    color: #fff;
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
    width: calc(100% - 75px);
    background-color: #fff
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
}

.proyecto a{
    color: grey;
}

.proyecto a:hover{
    color: #000;
}

.iconos{
    display: flex;
    margin-top: 5px;
    align-items: center;
    /* margin-bottom: 20px; */
}

.iconos div{
    padding-right: 5px;
}

.descripcion{
    padding-bottom: 20px;
    padding-top: 10px;
}

/* .proyecto-imagenes{
    width: 100%;
} */

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

.m-proyecto-margin {
    /* -webkit-mask-image: linear-gradient(45deg,#000 25%,rgba(0,0,0,.2) 50%,#000 75%); */
    mask-image: linear-gradient(45deg,#000 25%,rgba(0,0,0,.1) 50%,#000 75%);
    /* -webkit-mask-size: 800%; */
    mask-size: 800%;
    /* -webkit-mask-position: 0; */
    mask-position: 0;
}

.m-proyecto-margin:hover {
    transition: mask-position 0.8s cubic-bezier(0, 0.21, 0.25, 1),-webkit-mask-position 0.8s cubic-bezier(0, 0.21, 0.25, 1);
    -webkit-mask-position: 120%;
    mask-position: 120%;
    opacity: 1;
}
@media (max-width: 768px){
    .m-proyecto{
        padding-right: 0 !important;
    }
}
</style>