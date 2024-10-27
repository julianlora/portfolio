<template>
    <div id='wrapper'>
        <!-- PROYECTOS -->
        <div class="proyecto-cont">
            <div class='seccion-titulo d-flex justify-content-between'>
                <div>Proyectos</div>
                <div class='display d-flex'>
                    <img class='selected display-icon mosaic' src="imagenes/squares.png" @click="displayChange($event, 'mosaic')">
                    <img class="display-icon list" src="imagenes/rows.png" @click="displayChange($event, 'list')">
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
                        nombre="Ópticas LAM"
                        imagen="imagenes/gufra.png"
                        descripcion="
                        <ul>
                            <li>Tipo: sistema de producción.</li>
                            <li>Administrador de contenido con roles de usuarios.</li>
                            <li>Zona privada.</li>
                            <li>Carrito de compras.</li>
                            <li>Categorías y subcategorias</li>
                            <li>Actualización masiva de productos y clientes mediante excel.</li>
                            <li>Lista de precios mayorista y minorista.</li>
                        </ul>"
                        estado="En desarrollo"
                        link="https://gufra.com.ar"
                        :tecnologias="['vue', 'laravel', 'php', 'javascript','html','css','tailwind','mysql']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Plásticos Castro"
                        imagen="imagenes/gufra.png"
                        descripcion="
                        <ul>
                            <li>Tipo: sistema de producción.</li>
                            <li>Administrador de contenido con roles de usuarios.</li>
                            <li>Zona privada.</li>
                            <li>Carrito de compras.</li>
                            <li>Categorías y subcategorias</li>
                            <li>Actualización masiva de productos y clientes mediante excel.</li>
                            <li>Lista de precios mayorista y minorista.</li>
                        </ul>"
                        estado="En desarrollo"
                        link="https://gufra.com.ar"
                        :tecnologias="['vue', 'laravel', 'php', 'javascript','html','css','tailwind','mysql']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Gufra"
                        imagen="imagenes/gufra.png"
                        descripcion="
                        <ul>
                            <li>Tipo: e-commerce.</li>
                            <li>Administrador de contenido con roles de usuarios.</li>
                            <li>Zona privada.</li>
                            <li>Carrito de compras.</li>
                            <li>Categorías y subcategorias</li>
                            <li>Actualización masiva de productos y clientes mediante excel.</li>
                            <li>Lista de precios mayorista y minorista.</li>
                        </ul>"
                        estado="Desplegado"
                        link="https://gufra.com.ar"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Merclin"
                        imagen="imagenes/merclin.png"
                        descripcion="
                        <ul>
                            <li>Tipo: e-commerce B2B.</li>
                            <li>Administrador de contenido con roles de usuarios.</li>
                            <li>Zona privada.</li>
                            <li>Carrito de compras.</li>
                            <li>Categorías y subcategorias</li>
                            <li>Actualización masiva de productos y clientes mediante excel.</li>
                            <li>Registro con alta de clientes.</li>
                        </ul>"
                        estado="En desarrollo"
                        link=""
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="AWS Deployment"
                        imagen="imagenes/awslogo.jpg"
                        descripcion="
                        <ul>
                            <li>Tipo: deployment.</li>
                            <li>ECR / ECS.</li>
                            <li>Docker.</li>
                            <li>Integración contínua con Github Actions.</li>
                        </ul>"
                        estado="Desplegado"
                        link=""
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Conometal"
                        imagen="imagenes/conometal.jpg"
                        descripcion="
                        <ul>
                            <li>Tipo: e-commerce.</li>
                            <li>Sincronización automática de productos y pedidos con Tango</li>
                            <li>Hotspot de productos en imágenes.</li>
                            <li>Administrador de contenido con roles de usuarios.</li>
                            <li>Zona privada.</li>
                            <li>Carrito de compras público y privado.</li>
                        </ul>"
                        estado="En desarrollo"
                        link="https://conometal.osole.com.ar"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Bulones KC"
                        imagen="imagenes/buloneskc.jpg"
                        descripcion="
                        <ul>
                            <li>Tipo: e-commerce.</li>
                            <li>Sincronización automática de productos y pedidos con sistema externo.</li>
                            <li>Definición dinámica de campos y variantes asociados a productos.</li>
                            <li>Administrador de contenido con roles de usuarios.</li>
                            <li>Zona privada.</li>
                            <li>Carrito de compras.</li>
                        </ul>"
                        estado="Desplegado"
                        link="https://buloneskc.osole.com.ar"
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="Casa Perez"
                        imagen="imagenes/casaperez.png"
                        descripcion="
                        <ul>
                            <li>Tipo: e-commerce.</li>
                            <li>Generación de archivos xml para integración con Electrobase.</li>
                            <li>Administrador de contenido con roles de usuarios.</li>
                            <li>Zona privada.</li>
                            <li>Actualización masiva de productos y clientes mediante excel.</li>
                            <li>Carrito de compras público y privado.</li>
                        </ul>"
                        estado="En desarrollo"
                        link=""
                        :tecnologias="['laravel', 'php', 'javascript','html','css','bootstrap','mysql', 'mp']"
                        :vista="vista"
                        fecha='2024'
                        :filtro="filtro"
                        >
                    </AppProyecto>

                    <AppProyecto @viewProject="viewProject"
                        nombre="PMR Industria"
                        imagen="imagenes/pmr.png"
                        descripcion="
                        <ul>
                            <li>Tipo: sitio web.</li>
                            <li>Administrador de contenido con roles de usuarios.</li>
                            <li>Formularios de contacto.</li>
                            <li>Newsletter.</li>
                            <li>Solicitud de presupuesto</li>
                        </ul>"
                        estado="Desplegado"
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
                        descripcion="<ul>
                            <li>Tipo: sitio web.</li>
                            <li>Administrador de contenido con roles de usuarios.</li>
                            <li>Formularios de contacto.</li>
                            <li>Newsletter.</li>
                            <li>Solicitud de presupuesto</li>
                        </ul>"
                        estado="Desplegado"
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
                        descripcion="
                        <ul>
                            <li>Tipo: bot.</li>
                            <li>Trading bot para criptomonedas.</li>
                            <li>Integración con Binance API.</li>
                            <li>Compra y venta automática.</li>
                            <li>Backtesting.</li>
                            <li>Integración con Telegram Bot. Notificación de estado de cuenta y trades.</li>
                        </ul>"
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
                        descripcion="
                        <ul>
                            <li>Tipo: aplicación web.</li>
                            <li>Login de usuario.</li>
                            <li>Creación de listas de tareas.</li>
                            <li>Colaboración entre usuarios para listas compartidas.</li>
                            <li>Roles de administrador, colaborador y solo lectura.</li>
                            <li>Suscripción con integración de Mercado Pago.</li>
                            <li>Funcionalidades premium.</li>
                        </ul>"
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
                        descripcion="<ul>
                            <li>Tipo: sitio web.</li>
                            <li>Galeria de imágenes.</li>
                            <li>Diseño responsive.</li>
                        </ul>"
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
                        descripcion="<ul>
                            <li>Tipo: aplicación web.</li>
                            <li>Creación de listas de tareas</li>
                            <li>Sublistas y subtareas</li>
                        </ul>"
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
                        descripcion="
                        <ul>
                            <li>Tipo: programa.</li>
                            <li>Solución programática para dilema matemático: ¿es posible posicionar ocho reinas en un tablero de ajedrez sin que ninguna sea comida por otra?</li>
                        </ul>"
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
            vista: 'mosaic',
            refresh: 0,
            filtro: null,
        };
    },
    mounted() {
        const instance = OverlayScrollbars(document.querySelector('#scrollable'), {
            className: 'os-theme-dark',
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
        document.querySelectorAll('.m-proyecto').forEach((proyecto) => {
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
        const proyectos = document.querySelectorAll('.m-proyecto');
        const proyectosArray = Array.from(proyectos)
        const skills = document.querySelectorAll('.skills span');
        skills.forEach((skill) => {
            
            const contador = proyectosArray.filter(proyecto => {
                return proyecto.getAttribute('data-skills').includes(skill.innerHTML.toLowerCase());
            });
            skill.innerHTML += ` (${contador.length})`;
        })

        const timeline = document.querySelectorAll('.timeline')
        this.instance.options('className', 'os-theme-dark');
        timeline.forEach((element) => {
            element.style.display = 'none';
        });
        
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

#wrapper{
    padding-left: 230px;
}

.skills{
    padding-bottom: 20px;
    overflow-x: scroll;
}

.skills::-webkit-scrollbar {
    display: none;
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
    font-size: 14px;
    white-space: nowrap;
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
    padding: 20px 25px 0px 35px;
    background-color: #f7f7f7;
}

.proyectos{
    /* border:1px solid red; */
    max-height: calc(100vh - 160px);
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

@media (max-width: 768px){
    #wrapper{
        padding-left: 0;
    }
    .proyectos{
        /* border:1px solid red; */
        max-height: calc(100vh - 300px);
        /* overflow-y: scroll; */
        padding-right: 20px;
    }
}

</style>