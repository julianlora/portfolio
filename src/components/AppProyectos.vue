<template>
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
            <div class='seccion-titulo d-flex justify-content-between'>
                <div>Proyectos</div>
                <div class='display d-flex'>
                    <img class='display-icon mosaic' src="imagenes/squares.png" @click="displayChange($event, 'mosaic')">
                    <img class="selected display-icon list" src="imagenes/rows.png" @click="displayChange($event, 'list')">
                </div>
            </div>

            <div class="proyectos row" :key="refresh">
                <AppProyecto
                    nombre="Casa Perez"
                    imagen="imagenes/casaperez.png"
                    descripcion="E-commerce personalizado desarrollado para control de stock y ventas. Contenido administrable de forma dinámica. Zona privada. Carrito. Tipos de envío. Medios de pago. Integración con Mercado Pago. Actualización masiva de productos mediante excel. Generación de archivos xml para integración con Electrobase."
                    link="https://d1.osole.com.ar/casaperez/public/"
                    :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','sql', 'mp']"
                    :col="vista"
                    >
                </AppProyecto>

                <AppProyecto
                    nombre="PMR Industria"
                    imagen="imagenes/pmr.png"
                    descripcion="Página web con contenido gestionable de forma dinámica. Imágenes, videos, contacto y solicitudes de presupuesto."
                    link="https://pmr.com.ar/"
                    :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','sql']"
                    :col="vista"
                    >
                </AppProyecto>

                <AppProyecto
                    nombre="Andes Elevadores"
                    imagen="imagenes/andes.png"
                    descripcion="Página web con contenido gestionable de forma dinámica. Imágenes, videos, contacto y solicitudes de presupuesto."
                    link="https://www.andeselevadores.com.ar/"
                    :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','sql']"
                    :col="vista"
                    >
                </AppProyecto>

            </div>
        </div>
    </div>
</template>

<script>
import AppProyecto from './AppProyecto.vue';
// import AppProyectoMosaico from './AppProyectoMosaico.vue';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default {
    name: 'AppProyectos',
    components:{
        AppProyecto,
        // AppProyectoMosaico,
    },
    data() {
        return {
            vista: 'list',
            refresh: 0,
        };
    },
    methods: {
        displayChange(event, type) {
            console.log(type);
            if(!event.target.classList.contains('selected')){
                document.querySelectorAll('.display-icon').forEach((icon) => {
                    icon.classList.toggle('selected');
                });
                // document.querySelectorAll('.proyecto').forEach((proyecto) => {
                //     proyecto.style.display = 'none';
                // });
            }
            this.vista = type;
            this.refresh += 1;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.seccion-titulo{
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 25px;
}

.proyecto-cont{
    padding: 20px 25px 0px 25px;
}

.proyectos{
    /* border:1px solid red; */
    max-height: calc(100vh - 146px);
    overflow-y: auto;
}

.display{
    align-items: center;
}

.display img{
    height: 30px;
    opacity: 0.5;
    transition: all 0.2s;
}

.display img:hover{
    opacity: 1;
}

.selected{
    opacity: 1 !important;
}

.row{
    margin-left: 0 !important;
}

</style>