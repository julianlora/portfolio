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
            
            <div id="scrollable">
                <div class="proyectos row" :key="refresh" data-aos='fade-up'>
                    <AppProyecto
                        nombre="Casa Perez"
                        imagen="imagenes/casaperez.png"
                        descripcion="E-commerce personalizado desarrollado para control de stock y ventas. Contenido administrable de forma dinámica. Zona privada. Carrito. Tipos de envío. Medios de pago. Integración con Mercado Pago. Actualización masiva de productos mediante excel. Generación de archivos xml para integración con Electrobase."
                        link="https://d1.osole.com.ar/casaperez/public/"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','sql', 'mp']"
                        :vista="vista"
                        fecha='2025'
                        >
                    </AppProyecto>

                    <AppProyecto
                        nombre="PMR Industria"
                        imagen="imagenes/pmr.png"
                        descripcion="Página web con contenido gestionable de forma dinámica. Imágenes, videos, contacto y solicitudes de presupuesto."
                        link="https://pmr.com.ar/"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','sql']"
                        :vista="vista"
                        fecha="2024"
                        >
                    </AppProyecto>

                    <AppProyecto
                        nombre="Andes Elevadores"
                        imagen="imagenes/andes.png"
                        descripcion="Página web con contenido gestionable de forma dinámica. Imágenes, videos, contacto y solicitudes de presupuesto."
                        link="https://www.andeselevadores.com.ar/"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','sql']"
                        :vista="vista"
                        fecha="2023"
                        >
                    </AppProyecto>

                    <AppProyecto
                        nombre="Casa Perez"
                        imagen="imagenes/casaperez.png"
                        descripcion="E-commerce personalizado desarrollado para control de stock y ventas. Contenido administrable de forma dinámica. Zona privada. Carrito. Tipos de envío. Medios de pago. Integración con Mercado Pago. Actualización masiva de productos mediante excel. Generación de archivos xml para integración con Electrobase."
                        link="https://d1.osole.com.ar/casaperez/public/"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','sql', 'mp']"
                        :vista="vista"
                        fecha="2023"
                        >
                    </AppProyecto>

                    <AppProyecto
                        nombre="PMR Industria"
                        imagen="imagenes/pmr.png"
                        descripcion="Página web con contenido gestionable de forma dinámica. Imágenes, videos, contacto y solicitudes de presupuesto."
                        link="https://pmr.com.ar/"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','sql']"
                        :vista="vista"
                        fecha="2021"
                        >
                    </AppProyecto>

                    <AppProyecto
                        nombre="Andes Elevadores"
                        imagen="imagenes/andes.png"
                        descripcion="Página web con contenido gestionable de forma dinámica. Imágenes, videos, contacto y solicitudes de presupuesto."
                        link="https://www.andeselevadores.com.ar/"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','sql']"
                        :vista="vista"
                        fecha="2021"
                        >
                    </AppProyecto>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppProyecto from './AppProyecto.vue';
// import AppProyectoMosaico from './AppProyectoMosaico.vue';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import 'overlayscrollbars/overlayscrollbars.css';
import { 
  OverlayScrollbars, 
} from 'overlayscrollbars';

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
    mounted() {
        OverlayScrollbars(document.querySelector('#scrollable'), {
        scrollbars: {
            clickScrolling : true,
            theme: 'os-theme-dark',
        },
        overflow: {
            x: 'hidden',
            y: 'scroll',
        },
        callbacks: {
            onScroll: function() {
                console.log('scrolled');
            }
        }
        });

        const scrollbar = document.querySelector('.os-scrollbar-vertical .os-scrollbar-track')
        scrollbar.style.position = 'relative'
        var fechas = [];
        var conteoFechas = {};
        document.querySelectorAll('.proyecto').forEach((proyecto) => {
            let fecha = proyecto.getAttribute('data-fecha');
            let fechaNumero = parseInt(fecha);

            if (!isNaN(fechaNumero)) {
                fechas.push(fechaNumero);

                if (conteoFechas[fechaNumero]) {
                    conteoFechas[fechaNumero]++;
                } else {
                    conteoFechas[fechaNumero] = 1;
                }
            }
        });

        console.log('Fechas:', fechas);
        console.log('Conteo de Fechas:', conteoFechas);
        const cantidad = fechas.length
        let conteoFechasArray = Object.entries(conteoFechas);
        conteoFechasArray.sort((a, b) => b[0] - a[0]);
        var distance = 0;
        conteoFechasArray.forEach(([fecha, conteo]) => {
            let loc = Math.round((conteo / cantidad) * 100);
            distance += loc;
            const element = `
                <div class='scrollbar-point' style='top:calc(${distance}% - 18px)'>
                ${fecha}
                </div>
            `;
            scrollbar.insertAdjacentHTML('beforeend', element);
        });
        
        const handle = document.querySelector('.os-scrollbar-vertical .os-scrollbar-handle')
        var element = `
        <div class='scrollbar-tag'>
            ${Math.max(...fechas)}
        </div>
        `
        handle.insertAdjacentHTML('beforeend', element)

        const points = document.querySelectorAll('.scrollbar-point');
        window.addEventListener('scroll', function() {
            console.log('sdkldl')
            points.forEach((point) => {
                point.style.display = 'none';
            });
        });

        
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
    max-height: calc(100vh - 150px);
    /* overflow-y: scroll; */
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