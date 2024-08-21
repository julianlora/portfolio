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
                    <AppProyecto @viewProject="viewProject"
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
import OverlayScrollbars from 'overlayscrollbars';
import 'overlayscrollbars/css/OverlayScrollbars.css';

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
        var instance = OverlayScrollbars(document.querySelector('#scrollable'), {
            className: 'os-theme-round-dark',
            overflowBehavior : {
                x : "hidden",
                y : "scroll"
            },
            callbacks: {
                onScroll: function() {
                    handleScroll();
                },
                onScrollStop: function() {
                    handleScrollStop();
                }
            }
        });

        // SCROLLBAR POINTS
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
        const cantidad = fechas.length
        let conteoFechasArray = Object.entries(conteoFechas);
        conteoFechasArray.sort((a, b) => b[0] - a[0]);
        var distance = 0;
        conteoFechasArray.forEach(([fecha, conteo], index) => {
            let loc = Math.round((conteo / cantidad) * 100);
            distance += loc;
            var siguienteFecha = null;
            if (index < conteoFechasArray.length - 1) {
                siguienteFecha = conteoFechasArray[index + 1][0];
            }
            const element = `
                <div class='scrollbar-point' data-anterior='${fecha}' data-fecha='${siguienteFecha}' style='top:calc(${distance}% - 18px)'>
                
                </div>
            `;
            scrollbar.insertAdjacentHTML('beforeend', element);
        });
        
        // CUSTOM HANDLE
        const handle = document.querySelector('.os-scrollbar-vertical .os-scrollbar-handle')
        var element = `
        <div class='scrollbar-tag'>
            ${Math.max(...fechas)}
        </div>
        `
        handle.insertAdjacentHTML('beforeend', element)

        // SECONDARY TRACK
        const track = document.querySelector('.os-scrollbar-vertical .os-scrollbar-track')
        element = `<div id='secondary-track'></div>`
        track.insertAdjacentHTML('beforeend', element)

        // SCROLL LISTENER
        const points = document.querySelectorAll('.scrollbar-point');
        const scrollbarTag = document.querySelector('.scrollbar-tag');
        const secondaryTrack = document.getElementById('secondary-track');
        function handleScroll() {
            //Track
            secondaryTrack.style.height = `calc(${instance.scroll().handleOffset.y}px + 4px)`
            
            //Tag
            scrollbarTag.classList.add('scrolling')

            //Points
            const rect2 = document.querySelector('.os-scrollbar-vertical .os-scrollbar-handle').getBoundingClientRect();
            points.forEach((point) => {
                const rect1 = point.getBoundingClientRect();
                const distanciaY = rect2.top - rect1.top
                if(point.classList.contains('scrolled')){
                    if(distanciaY < 0){
                        point.classList.remove('scrolled');
                        scrollbarTag.innerHTML = point.getAttribute('data-anterior');
                    }
                } else {
                    if(distanciaY > 0){
                        point.classList.add('scrolled');
                        scrollbarTag.innerHTML = point.getAttribute('data-fecha');
                    }
                }
            });
        }
        function handleScrollStop() {
            scrollbarTag.classList.remove('scrolling')
            // instance.scroll({ y: '70%' }, 500);
        }
        
    },
    methods: {
        displayChange(event, type) {
            console.log(type);
            if(event){
                if(!event.target.classList.contains('selected')){
                    document.querySelectorAll('.display-icon').forEach((icon) => {
                        icon.classList.toggle('selected');
                    });
                }
            } else {
                document.querySelectorAll('.display-icon').forEach((icon) => {
                    icon.classList.toggle('selected');
                });
            }
            
            this.vista = type;
            this.refresh += 1;
        },
        viewProject(nombre){
            console.log(nombre);
            this.displayChange(null, 'list');
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