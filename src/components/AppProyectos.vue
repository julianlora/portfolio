<template>
    <div style="padding-left: 200px;">
        <!-- PROYECTOS -->
        <div class="proyecto-cont">
            <div class='seccion-titulo d-flex justify-content-between'>
                <div>Proyectos</div>
                <div class='display d-flex'>
                    <img class='display-icon mosaic' src="imagenes/squares.png" @click="displayChange($event, 'mosaic')">
                    <img class="selected display-icon list" src="imagenes/rows.png" @click="displayChange($event, 'list')">
                </div>
            </div>

            <div class="skills" data-aos='fade-left'>
                <span @click="filterSkill($event, 'php')">PHP</span>
                <span @click="filterSkill($event, 'laravel')">Laravel</span>
                <span @click="filterSkill($event, 'javascript')">JavaScript</span>
                <!-- <span @click="filterSkill($event, 'jquery')">JQuery</span> -->
                <!-- <span @click="filterSkill($event, 'ajax')">Ajax</span> -->
                <span @click="filterSkill($event, 'mysql')">MySQL</span>
                <span @click="filterSkill($event, 'html')">HTML</span>
                <span @click="filterSkill($event, 'css')">CSS</span>
                <span @click="filterSkill($event, 'bootstrap')">Bootstrap</span>
                <span @click="filterSkill($event, 'python')">Python</span>
                <span @click="filterSkill($event, 'c++')">C++</span>
                <!-- <span @click="filterSkill($event, 'php')">Java</span>
                <span @click="filterSkill($event, 'php')">Spring</span> -->
            </div>
            
            <div id="scrollable" >
                <div class="proyectos row" :key="refresh" data-aos='fade-up'>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Gufra"
                        imagen="imagenes/gufra.png"
                        descripcion="E-commerce personalizado desarrollado para control de stock y ventas. Contenido administrable de forma dinámica. Zona privada. Carrito. Tipos de envío. Medios de pago. Integración con Mercado Pago. Actualización masiva de productos mediante excel. Generación de archivos xml para integración con Electrobase."
                        link=""
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql', 'mp']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Merclin"
                        imagen="imagenes/merclin.png"
                        descripcion="E-commerce personalizado desarrollado para control de stock y ventas. Contenido administrable de forma dinámica. Zona privada. Carrito. Tipos de envío. Medios de pago. Integración con Mercado Pago. Actualización masiva de productos mediante excel. Generación de archivos xml para integración con Electrobase."
                        link=""
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql', 'mp']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="AWS Lambda"
                        imagen="imagenes/aws.jpg"
                        descripcion="E-commerce personalizado desarrollado para control de stock y ventas. Contenido administrable de forma dinámica. Zona privada. Carrito. Tipos de envío. Medios de pago. Integración con Mercado Pago. Actualización masiva de productos mediante excel. Generación de archivos xml para integración con Electrobase."
                        link=""
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql', 'mp']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Conometal"
                        imagen="imagenes/conometal.jpg"
                        descripcion="E-commerce personalizado desarrollado para control de stock y ventas. Contenido administrable de forma dinámica. Zona privada. Carrito. Tipos de envío. Medios de pago. Integración con Mercado Pago. Actualización masiva de productos mediante excel. Generación de archivos xml para integración con Electrobase."
                        link=""
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql', 'mp']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Bulones KC"
                        imagen="imagenes/buloneskc.jpg"
                        descripcion="E-commerce personalizado desarrollado para control de stock y ventas. Contenido administrable de forma dinámica. Zona privada. Carrito. Tipos de envío. Medios de pago. Integración con Mercado Pago. Actualización masiva de productos mediante excel. Generación de archivos xml para integración con Electrobase."
                        link="https://d1.osole.com.ar/industriaskc/public/"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql', 'mp']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Casa Perez"
                        imagen="imagenes/casaperez.png"
                        descripcion="E-commerce personalizado desarrollado para control de stock y ventas. Contenido administrable de forma dinámica. Zona privada. Carrito. Tipos de envío. Medios de pago. Integración con Mercado Pago. Actualización masiva de productos mediante excel. Generación de archivos xml para integración con Electrobase."
                        link="https://d1.osole.com.ar/casaperez/public/"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql', 'mp']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="PMR Industria"
                        imagen="imagenes/pmr.png"
                        descripcion="Página web con contenido gestionable de forma dinámica. Imágenes, videos, contacto y solicitudes de presupuesto."
                        link="https://pmr.com.ar/"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql']"
                        :vista="vista"
                        fecha="2024"
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Andes Elevadores"
                        imagen="imagenes/andes.png"
                        descripcion="Página web con contenido gestionable de forma dinámica. Imágenes, videos, contacto y solicitudes de presupuesto."
                        link="https://www.andeselevadores.com.ar/"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql']"
                        :vista="vista"
                        fecha="2024"
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Cripto Trading Bot"
                        imagen="imagenes/tradingbot.jpg"
                        descripcion="sd"
                        link="https://github.com/julianlora/trading-bot.git"
                        :tecnologias="['python']"
                        :vista="vista"
                        fecha='2023'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="TaskIt - Gestión de tareas"
                        imagen="imagenes/taskit.jpg"
                        descripcion="sd"
                        link="https://github.com/julianlora/TaskIt.git"
                        :tecnologias="['php','javascript','html','css','mysql', 'mp']"
                        :vista="vista"
                        fecha='2023'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Final Space website"
                        imagen="imagenes/finalspace.jpg"
                        descripcion="sd"
                        link="https://julianlora.github.io/laboratorio3/index.html"
                        :tecnologias="['javascript','html','css']"
                        :vista="vista"
                        fecha='2023'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Task Manager"
                        imagen="imagenes/taskmanager.jpg"
                        descripcion="sd"
                        link="https://julianlora.github.io/task-manager/"
                        :tecnologias="['javascript','html','css']"
                        :vista="vista"
                        fecha='2022'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Ocho reinas"
                        imagen="imagenes/ochoreinas.jpg"
                        descripcion="sd"
                        link="https://github.com/julianlora/eight-queens.git"
                        :tecnologias="['c++']"
                        :vista="vista"
                        fecha='2022'
                        :filtro="filtro"
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
            filtro: null,
        };
    },
    mounted() {
        const instance = OverlayScrollbars(document.querySelector('#scrollable'), {
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
        this.instance = instance;

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
                <div class='scrollbar-point timeline' data-anterior='${fecha}' data-fecha='${siguienteFecha}' style='top:calc(${distance}% - 18px)'>
                
                </div>
            `;
            scrollbar.insertAdjacentHTML('beforeend', element);
        });
        
        // CUSTOM HANDLE
        const handle = document.querySelector('.os-scrollbar-vertical .os-scrollbar-handle')
        var element = `
        <div class='scrollbar-tag timeline'>
            ${Math.max(...fechas)}
        </div>
        `
        handle.insertAdjacentHTML('beforeend', element)

        // SECONDARY TRACK
        const track = document.querySelector('.os-scrollbar-vertical .os-scrollbar-track')
        element = `<div id='secondary-track' class='timeline'></div>`
        track.insertAdjacentHTML('beforeend', element)

        // SCROLL LISTENER
        const points = document.querySelectorAll('.scrollbar-point');
        const scrollbarTag = document.querySelector('.scrollbar-tag');
        const secondaryTrack = document.getElementById('secondary-track');
        function handleScroll() {
            if(!document.querySelector('.list').classList.contains('selected')){
                return;
            }
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
            if(!document.querySelector('.list').classList.contains('selected')){
                return;
            }
            scrollbarTag.classList.remove('scrolling')
            // OverlayScrollbars(document.querySelector('#scrollable')).scroll({ y: '70%' }, 500);
        }
        
        // SKILL COUNT
        const proyectos = document.querySelectorAll('.proyecto');
        const proyectosArray = Array.from(proyectos)
        const skills = document.querySelectorAll('.skills span');
        skills.forEach((skill) => {
            
            const contador = proyectosArray.filter(proyecto => {
                return proyecto.getAttribute('data-skills').includes(skill.innerHTML.toLowerCase());
            });
            skill.innerHTML += ` (${contador.length})`;
        })
        
    },
    methods: {
        displayChange(event, type) {
            // console.log(type);
            console.log(this.instance)
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
            if(type != this.type){
                const timeline = document.querySelectorAll('.timeline')
                if(type == 'mosaic'){
                    this.instance.options('className', 'os-theme-dark');
                    timeline.forEach((element) => {
                        element.style.display = 'none';
                    });
                } else {
                    this.instance.options('className', 'os-theme-round-dark');
                    timeline.forEach((element) => {
                        element.style.display = 'block';
                    });
                }
            }
            this.vista = type;
            this.refresh += 1;
        },
        filterSkill(event, skill) {
            
            if(this.filtro == skill){
                event.target.classList.toggle('filtrando');
                this.filtro = null;
            } else {
                document.querySelectorAll('.skills span').forEach((span) => {
                    span.classList.remove('filtrando');
                });
                event.target.classList.add('filtrando');
                this.filtro = skill;
            }
            this.refresh += 1;
        },
        viewProject(nombre){
            // console.log(nombre);
            this.displayChange(null, 'list');
            this.$nextTick(() => {
                const titulos = document.querySelectorAll('.proyecto .titulo')
                const height = document.querySelector('.proyecto').clientHeight;
                titulos.forEach((titulo, index) => {
                    if (titulo.innerHTML == nombre) {
                        let percent = index * (height);
                        // console.log(percent);
                        OverlayScrollbars(document.querySelector('#scrollable')).scroll({ y: `${percent}px` }, 500);
                    }
                });
            });
        }        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.skills{
    padding-bottom: 20px;
}

.skills span{
    background-color: #d9d9d9;
    padding: 8px 20px 8px 20px;
    line-height: 45px;
    margin-right: 10px;
    border-radius: 8px;
    /* border: 1px solid #000; */
    cursor: pointer;
    transition: all 0.2s;
}

.skills span:hover{
    background-color: grey;
    color: #fff;
}

.filtrando{
    background-color: #000 !important;
    color: #fff;
}

.seccion-titulo{
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 15px;
}

.proyecto-cont{
    padding: 20px 25px 0px 25px;
}

.proyectos{
    /* border:1px solid red; */
    max-height: calc(100vh - 240px);
    /* overflow-y: scroll; */
    padding-right: 20px;
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