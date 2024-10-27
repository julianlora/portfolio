(function(){"use strict";var i={4020:function(i,e,a){var o=a(3751),l=a(641);const t={class:"container-fluid",style:{padding:"0"}};function n(i,e,a,o,n,r){const s=(0,l.g2)("AppProfile"),c=(0,l.g2)("AppProyectos"),d=(0,l.g2)("AppHeader");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("main",null,[(0,l.Lk)("section",t,[(0,l.bF)(s),(0,l.bF)(c)])]),(0,l.bF)(d)],64)}const r=i=>((0,l.Qi)("data-v-38c6e872"),i=i(),(0,l.jt)(),i),s={class:"profile-cont"},c={id:"profile",class:"d-flex flex-column border-end border-2"},d=(0,l.Fv)('<div id="profile-img" data-v-38c6e872></div><div style="font-weight:600;font-size:18px;" data-v-38c6e872>Julián Lora</div><div data-v-38c6e872>Buenos Aires, Argentina</div><div class="d-flex redes" data-v-38c6e872><a href="https://github.com/julianlora" target="_blank" data-v-38c6e872><i class="fa-brands fa-github fa-xl" data-v-38c6e872></i></a><a href="https://www.linkedin.com/in/julian-lora/" target="_blank" data-v-38c6e872><i class="fa-brands fa-linkedin fa-xl" data-v-38c6e872></i></a><a href="https://wa.me/+541131560155" target="_blank" data-v-38c6e872><i class="fa-brands fa-whatsapp fa-xl" data-v-38c6e872></i></a></div>',4),u=r((()=>(0,l.Lk)("i",{class:"fa-solid fa-arrow-right"},null,-1))),p=r((()=>(0,l.Lk)("div",{id:"info"},[(0,l.Lk)("div",null," Soy un apasionado programador con experiencia en desarrollo web, donde he contribuido a la creación y mantenimiento de aplicaciones dinámicas y eficientes. He demostrado habilidades en backend y frontend, trabajando en estrecha colaboración con clientes y equipos de diseño para ofrecer soluciones personalizadas. Me caracterizo por mi proactividad, capacidad de liderazgo y compromiso con la mejora continua. ")],-1)));function m(i,e,a,o,t,n){return(0,l.uX)(),(0,l.CE)("div",s,[(0,l.Lk)("div",c,[d,(0,l.Lk)("button",{onClick:e[0]||(e[0]=(...i)=>n.about&&n.about(...i)),class:"about-btn","data-alt":'<i class="fa-solid fa-arrow-left"></i> Mis proyectos'},[(0,l.eW)("Sobre mí "),u]),p])])}var f={name:"AppProfile",methods:{about(){const i=document.querySelector(".profile-cont");i.classList.toggle("expanded");const e=document.querySelector(".about-btn");let a=e.getAttribute("data-alt");e.setAttribute("data-alt",e.innerHTML),e.innerHTML=a}}},v=a(6262);const g=(0,v.A)(f,[["render",m],["__scopeId","data-v-38c6e872"]]);var h=g;const b=i=>((0,l.Qi)("data-v-77cd2b40"),i=i(),(0,l.jt)(),i),k={id:"wrapper"},y={class:"proyecto-cont"},j={class:"seccion-titulo d-flex justify-content-between"},L=b((()=>(0,l.Lk)("div",null,"Proyectos",-1))),w={class:"display d-flex"},C={class:"skills","data-aos":"fade-left"},P={id:"scrollable"};function A(i,e,a,o,t,n){const r=(0,l.g2)("AppProyecto");return(0,l.uX)(),(0,l.CE)("div",k,[(0,l.Lk)("div",y,[(0,l.Lk)("div",j,[L,(0,l.Lk)("div",w,[(0,l.Lk)("img",{class:"selected display-icon mosaic",src:"imagenes/squares.png",onClick:e[0]||(e[0]=i=>n.displayChange(i,"mosaic"))}),(0,l.Lk)("img",{class:"display-icon list",src:"imagenes/rows.png",onClick:e[1]||(e[1]=i=>n.displayChange(i,"list"))})])]),(0,l.Lk)("div",C,[(0,l.Lk)("span",{onClick:e[2]||(e[2]=i=>n.filterSkill(i,"php"))},"PHP"),(0,l.Lk)("span",{onClick:e[3]||(e[3]=i=>n.filterSkill(i,"laravel"))},"Laravel"),(0,l.Lk)("span",{onClick:e[4]||(e[4]=i=>n.filterSkill(i,"javascript"))},"JavaScript"),(0,l.Lk)("span",{onClick:e[5]||(e[5]=i=>n.filterSkill(i,"mysql"))},"MySQL"),(0,l.Lk)("span",{onClick:e[6]||(e[6]=i=>n.filterSkill(i,"html"))},"HTML"),(0,l.Lk)("span",{onClick:e[7]||(e[7]=i=>n.filterSkill(i,"css"))},"CSS"),(0,l.Lk)("span",{onClick:e[8]||(e[8]=i=>n.filterSkill(i,"bootstrap"))},"Bootstrap"),(0,l.Lk)("span",{onClick:e[9]||(e[9]=i=>n.filterSkill(i,"python"))},"Python"),(0,l.Lk)("span",{onClick:e[10]||(e[10]=i=>n.filterSkill(i,"c++"))},"C++")]),(0,l.Lk)("div",P,[((0,l.uX)(),(0,l.CE)("div",{class:"proyectos row",key:t.refresh,"data-aos":"fade-up"},[(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Ópticas LAM",imagen:"imagenes/gufra.png",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: sistema de producción.</li>\r\n                            <li>Administrador de contenido con roles de usuarios.</li>\r\n                            <li>Zona privada.</li>\r\n                            <li>Carrito de compras.</li>\r\n                            <li>Categorías y subcategorias</li>\r\n                            <li>Actualización masiva de productos y clientes mediante excel.</li>\r\n                            <li>Lista de precios mayorista y minorista.</li>\r\n                        </ul>",estado:"En desarrollo",link:"https://gufra.com.ar",tecnologias:["vue","laravel","php","javascript","html","css","tailwind","mysql"],vista:t.vista,fecha:"2024",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Plásticos Castro",imagen:"imagenes/gufra.png",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: sistema de producción.</li>\r\n                            <li>Administrador de contenido con roles de usuarios.</li>\r\n                            <li>Zona privada.</li>\r\n                            <li>Carrito de compras.</li>\r\n                            <li>Categorías y subcategorias</li>\r\n                            <li>Actualización masiva de productos y clientes mediante excel.</li>\r\n                            <li>Lista de precios mayorista y minorista.</li>\r\n                        </ul>",estado:"En desarrollo",link:"https://gufra.com.ar",tecnologias:["vue","laravel","php","javascript","html","css","tailwind","mysql"],vista:t.vista,fecha:"2024",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Gufra",imagen:"imagenes/gufra.png",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: e-commerce.</li>\r\n                            <li>Administrador de contenido con roles de usuarios.</li>\r\n                            <li>Zona privada.</li>\r\n                            <li>Carrito de compras.</li>\r\n                            <li>Categorías y subcategorias</li>\r\n                            <li>Actualización masiva de productos y clientes mediante excel.</li>\r\n                            <li>Lista de precios mayorista y minorista.</li>\r\n                        </ul>",estado:"Desplegado",link:"https://gufra.com.ar",tecnologias:["laravel","php","javascript","html","css","bootstrap","mysql"],vista:t.vista,fecha:"2024",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Merclin",imagen:"imagenes/merclin.png",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: e-commerce B2B.</li>\r\n                            <li>Administrador de contenido con roles de usuarios.</li>\r\n                            <li>Zona privada.</li>\r\n                            <li>Carrito de compras.</li>\r\n                            <li>Categorías y subcategorias</li>\r\n                            <li>Actualización masiva de productos y clientes mediante excel.</li>\r\n                            <li>Registro con alta de clientes.</li>\r\n                        </ul>",estado:"En desarrollo",link:"",tecnologias:["laravel","php","javascript","html","css","bootstrap","mysql"],vista:t.vista,fecha:"2024",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"AWS Deployment",imagen:"imagenes/awslogo.jpg",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: deployment.</li>\r\n                            <li>ECR / ECS.</li>\r\n                            <li>Docker.</li>\r\n                            <li>Integración contínua con Github Actions.</li>\r\n                        </ul>",estado:"Desplegado",link:"",tecnologias:["laravel","php","javascript","html","css","bootstrap","mysql"],vista:t.vista,fecha:"2024",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Conometal",imagen:"imagenes/conometal.jpg",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: e-commerce.</li>\r\n                            <li>Sincronización automática de productos y pedidos con Tango</li>\r\n                            <li>Hotspot de productos en imágenes.</li>\r\n                            <li>Administrador de contenido con roles de usuarios.</li>\r\n                            <li>Zona privada.</li>\r\n                            <li>Carrito de compras público y privado.</li>\r\n                        </ul>",estado:"En desarrollo",link:"https://conometal.osole.com.ar",tecnologias:["laravel","php","javascript","html","css","bootstrap","mysql"],vista:t.vista,fecha:"2024",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Bulones KC",imagen:"imagenes/buloneskc.jpg",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: e-commerce.</li>\r\n                            <li>Sincronización automática de productos y pedidos con sistema externo.</li>\r\n                            <li>Definición dinámica de campos y variantes asociados a productos.</li>\r\n                            <li>Administrador de contenido con roles de usuarios.</li>\r\n                            <li>Zona privada.</li>\r\n                            <li>Carrito de compras.</li>\r\n                        </ul>",estado:"Desplegado",link:"https://buloneskc.osole.com.ar",tecnologias:["laravel","php","javascript","html","css","bootstrap","mysql"],vista:t.vista,fecha:"2024",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Casa Perez",imagen:"imagenes/casaperez.png",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: e-commerce.</li>\r\n                            <li>Generación de archivos xml para integración con Electrobase.</li>\r\n                            <li>Administrador de contenido con roles de usuarios.</li>\r\n                            <li>Zona privada.</li>\r\n                            <li>Actualización masiva de productos y clientes mediante excel.</li>\r\n                            <li>Carrito de compras público y privado.</li>\r\n                        </ul>",estado:"En desarrollo",link:"",tecnologias:["laravel","php","javascript","html","css","bootstrap","mysql","mp"],vista:t.vista,fecha:"2024",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"PMR Industria",imagen:"imagenes/pmr.png",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: sitio web.</li>\r\n                            <li>Administrador de contenido con roles de usuarios.</li>\r\n                            <li>Formularios de contacto.</li>\r\n                            <li>Newsletter.</li>\r\n                            <li>Solicitud de presupuesto</li>\r\n                        </ul>",estado:"Desplegado",link:"https://pmr.com.ar/",tecnologias:["laravel","php","javascript","html","css","bootstrap","mysql"],vista:t.vista,fecha:"2024",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Andes Elevadores",imagen:"imagenes/andes.png",descripcion:"<ul>\r\n                            <li>Tipo: sitio web.</li>\r\n                            <li>Administrador de contenido con roles de usuarios.</li>\r\n                            <li>Formularios de contacto.</li>\r\n                            <li>Newsletter.</li>\r\n                            <li>Solicitud de presupuesto</li>\r\n                        </ul>",estado:"Desplegado",link:"https://www.andeselevadores.com.ar/",tecnologias:["laravel","php","javascript","html","css","bootstrap","mysql"],vista:t.vista,fecha:"2024",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Cripto Trading Bot",imagen:"imagenes/tradingbot.jpg",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: bot.</li>\r\n                            <li>Trading bot para criptomonedas.</li>\r\n                            <li>Integración con Binance API.</li>\r\n                            <li>Compra y venta automática.</li>\r\n                            <li>Backtesting.</li>\r\n                            <li>Integración con Telegram Bot. Notificación de estado de cuenta y trades.</li>\r\n                        </ul>",link:"https://github.com/julianlora/trading-bot.git",tecnologias:["python"],vista:t.vista,fecha:"2023",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"TaskIt - Gestión de tareas",imagen:"imagenes/taskit.jpg",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: aplicación web.</li>\r\n                            <li>Login de usuario.</li>\r\n                            <li>Creación de listas de tareas.</li>\r\n                            <li>Colaboración entre usuarios para listas compartidas.</li>\r\n                            <li>Roles de administrador, colaborador y solo lectura.</li>\r\n                            <li>Suscripción con integración de Mercado Pago.</li>\r\n                            <li>Funcionalidades premium.</li>\r\n                        </ul>",link:"https://github.com/julianlora/TaskIt.git",tecnologias:["php","javascript","html","css","mysql","mp"],vista:t.vista,fecha:"2023",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Final Space website",imagen:"imagenes/finalspace.jpg",descripcion:"<ul>\r\n                            <li>Tipo: sitio web.</li>\r\n                            <li>Galeria de imágenes.</li>\r\n                            <li>Diseño responsive.</li>\r\n                        </ul>",link:"https://julianlora.github.io/laboratorio3/index.html",tecnologias:["javascript","html","css"],vista:t.vista,fecha:"2023",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Task Manager",imagen:"imagenes/taskmanager.jpg",descripcion:"<ul>\r\n                            <li>Tipo: aplicación web.</li>\r\n                            <li>Creación de listas de tareas</li>\r\n                            <li>Sublistas y subtareas</li>\r\n                        </ul>",link:"https://julianlora.github.io/task-manager/",tecnologias:["javascript","html","css"],vista:t.vista,fecha:"2022",filtro:t.filtro},null,8,["onViewProject","vista","filtro"]),(0,l.bF)(r,{onViewProject:n.viewProject,nombre:"Ocho reinas",imagen:"imagenes/ochoreinas.jpg",descripcion:"\r\n                        <ul>\r\n                            <li>Tipo: programa.</li>\r\n                            <li>Solución programática para dilema matemático: ¿es posible posicionar ocho reinas en un tablero de ajedrez sin que ninguna sea comida por otra?</li>\r\n                        </ul>",link:"https://github.com/julianlora/eight-queens.git",tecnologias:["c++"],vista:t.vista,fecha:"2022",filtro:t.filtro},null,8,["onViewProject","vista","filtro"])]))])])])}a(4114);var x=a(33),E=a.p+"img/info.707f1c86.png",S=a.p+"img/arrow-up.282d79f5.png";const T=i=>((0,l.Qi)("data-v-5542cf7b"),i=i(),(0,l.jt)(),i),q=["id","data-fecha","data-skills"],F={class:"proyecto-info"},V={class:"d-flex"},M={class:"proyecto-encabezado"},X={class:"d-flex justify-content-between"},Q={class:"d-flex align-items-center"},H={class:"titulo d-flex"},_={key:1,class:"ps-1"},B=["href"],z=T((()=>(0,l.Lk)("i",{class:"fa-solid fa-arrow-up-right-from-square fa-lg"},null,-1))),I=[z],O={class:"iconos"},D={key:0},$=T((()=>(0,l.Lk)("i",{class:"fa-brands fa-vuejs fa-xl"},null,-1))),N=[$],Z={key:1},R=T((()=>(0,l.Lk)("i",{class:"fa-brands fa-python fa-xl"},null,-1))),G=[R],K={key:2},J=T((()=>(0,l.Lk)("i",{class:"fa-brands fa-laravel fa-xl"},null,-1))),W=[J],U={key:3},Y=T((()=>(0,l.Lk)("img",{src:"imagenes/tailwind.png",alt:"",style:{height:"32px"}},null,-1))),ii=[Y],ei={key:4},ai=T((()=>(0,l.Lk)("i",{class:"fa-brands fa-php fa-xl"},null,-1))),oi=[ai],li={key:5},ti=T((()=>(0,l.Lk)("i",{class:"fa-brands fa-js fa-xl"},null,-1))),ni=[ti],ri={key:6},si=T((()=>(0,l.Lk)("i",{class:"fa-brands fa-html5 fa-xl"},null,-1))),ci=[si],di={key:7},ui=T((()=>(0,l.Lk)("i",{class:"fa-brands fa-css3-alt fa-xl"},null,-1))),pi=[ui],mi={key:8},fi=T((()=>(0,l.Lk)("i",{class:"fa-brands fa-bootstrap fa-xl"},null,-1))),vi=[fi],gi={key:9},hi=T((()=>(0,l.Lk)("i",{class:"fa-solid fa-database fa-xl"},null,-1))),bi=[hi],ki={key:10},yi=T((()=>(0,l.Lk)("img",{src:"imagenes/mp.png",alt:"",style:{height:"32px"}},null,-1))),ji=[yi],Li={key:11},wi=T((()=>(0,l.Lk)("img",{src:"imagenes/c++.png",alt:"",style:{height:"32px"}},null,-1))),Ci=[wi],Pi=["innerHTML"],Ai=["id","data-fecha","data-skills"],xi={class:"m-proyecto-margin"},Ei={class:"m-info"},Si={class:"m-overlay"},Ti={key:0,class:"m-estado d-flex align-items-center"},qi={class:"ps-2"},Fi=["href"],Vi=T((()=>(0,l.Lk)("img",{src:S,alt:""},null,-1))),Mi=[Vi];function Xi(i,e,a,o,t,n){return(0,l.uX)(),(0,l.CE)(l.FK,null,["list"!==a.vista||a.filtro&&!a.tecnologias.includes(a.filtro)?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",{key:0,id:a.id,class:(0,x.C4)(["proyecto",{"col-12":"list"===a.vista},{"col-3":"list"!==a.vista}]),"data-fecha":a.fecha,"data-skills":a.tecnologias.join(" ")},[(0,l.Lk)("div",{class:"portada-proyecto",style:(0,x.Tr)({backgroundImage:`url(${a.imagen})`})},null,4),(0,l.Lk)("div",F,[(0,l.Lk)("div",V,[(0,l.Lk)("div",M,[(0,l.Lk)("div",X,[(0,l.Lk)("div",Q,[(0,l.Lk)("div",H,(0,x.v_)(a.nombre),1),a.estado?((0,l.uX)(),(0,l.CE)("i",{key:0,class:"fa-solid fa-circle ps-2",style:(0,x.Tr)({color:"Desplegado"===a.estado?"#63E6BE":"En desarrollo"===a.estado?"#FFD43B":""})},null,4)):(0,l.Q3)("",!0),a.estado?((0,l.uX)(),(0,l.CE)("div",_,(0,x.v_)(a.estado),1)):(0,l.Q3)("",!0)]),(0,l.Lk)("a",{href:a.link,target:"_blank"},I,8,B)]),(0,l.Lk)("div",O,[a.tecnologias.includes("vue")?((0,l.uX)(),(0,l.CE)("div",D,N)):(0,l.Q3)("",!0),a.tecnologias.includes("python")?((0,l.uX)(),(0,l.CE)("div",Z,G)):(0,l.Q3)("",!0),a.tecnologias.includes("laravel")?((0,l.uX)(),(0,l.CE)("div",K,W)):(0,l.Q3)("",!0),a.tecnologias.includes("tailwind")?((0,l.uX)(),(0,l.CE)("div",U,ii)):(0,l.Q3)("",!0),a.tecnologias.includes("php")?((0,l.uX)(),(0,l.CE)("div",ei,oi)):(0,l.Q3)("",!0),a.tecnologias.includes("javascript")?((0,l.uX)(),(0,l.CE)("div",li,ni)):(0,l.Q3)("",!0),a.tecnologias.includes("html")?((0,l.uX)(),(0,l.CE)("div",ri,ci)):(0,l.Q3)("",!0),a.tecnologias.includes("css")?((0,l.uX)(),(0,l.CE)("div",di,pi)):(0,l.Q3)("",!0),a.tecnologias.includes("bootstrap")?((0,l.uX)(),(0,l.CE)("div",mi,vi)):(0,l.Q3)("",!0),a.tecnologias.includes("sql")?((0,l.uX)(),(0,l.CE)("div",gi,bi)):(0,l.Q3)("",!0),a.tecnologias.includes("mp")?((0,l.uX)(),(0,l.CE)("div",ki,ji)):(0,l.Q3)("",!0),a.tecnologias.includes("c++")?((0,l.uX)(),(0,l.CE)("div",Li,Ci)):(0,l.Q3)("",!0)])])]),(0,l.Lk)("div",{innerHTML:a.descripcion,class:"descripcion"},null,8,Pi)])],10,q)),"mosaic"!==a.vista||a.filtro&&!a.tecnologias.includes(a.filtro)?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",{key:1,id:a.id,class:"m-proyecto col-lg-6 col-xl-4 col-xxl-3","data-fecha":a.fecha,"data-skills":a.tecnologias.join(" ")},[(0,l.Lk)("div",xi,[(0,l.Lk)("div",{class:"m-portada",style:(0,x.Tr)({backgroundImage:`url(${a.imagen})`})},null,4),(0,l.Lk)("div",Ei,(0,x.v_)(a.nombre),1),(0,l.Lk)("div",Si,[a.estado?((0,l.uX)(),(0,l.CE)("div",Ti,[(0,l.Lk)("i",{class:"fa-solid fa-circle ps-2",style:(0,x.Tr)({color:"Desplegado"===a.estado?"#63E6BE":"En desarrollo"===a.estado?"#FFD43B":""})},null,4),(0,l.Lk)("div",qi,(0,x.v_)(a.estado),1)])):(0,l.Q3)("",!0),(0,l.Lk)("img",{class:"ver-mas",onClick:e[0]||(e[0]=(...i)=>n.emitirEvento&&n.emitirEvento(...i)),src:E,alt:"",style:{"padding-right":"5px"}}),(0,l.Lk)("a",{href:a.link,target:"_blank"},Mi,8,Fi)])])],8,Ai))],64)}var Qi={name:"AppProyecto",props:["id","nombre","imagen","descripcion","link","tecnologias","vista","fecha","filtro","estado"],emits:["viewProject"],methods:{emitirEvento(){this.$emit("viewProject",this.nombre)}}};const Hi=(0,v.A)(Qi,[["render",Xi],["__scopeId","data-v-5542cf7b"]]);var _i=Hi,Bi=a(7681),zi=a.n(Bi),Ii={name:"AppProyectos",components:{AppProyecto:_i},data(){return{vista:"mosaic",refresh:0,filtro:null}},mounted(){const i=zi()(document.querySelector("#scrollable"),{className:"os-theme-dark",overflowBehavior:{x:"hidden",y:"scroll"},callbacks:{onScroll:function(){m()},onScrollStop:function(){f()}}});this.instance=i;const e=document.querySelector(".os-scrollbar-vertical .os-scrollbar-track");e.style.position="relative";var a=[],o={};document.querySelectorAll(".m-proyecto").forEach((i=>{let e=i.getAttribute("data-fecha"),l=parseInt(e);isNaN(l)||(a.push(l),o[l]?o[l]++:o[l]=1)}));const l=a.length;let t=Object.entries(o);t.sort(((i,e)=>e[0]-i[0]));var n=0;t.forEach((([i,a],o)=>{let r=Math.round(a/l*100);n+=r;var s=null;o<t.length-1&&(s=t[o+1][0]);const c=`\n                <div class='scrollbar-point timeline' data-anterior='${i}' data-fecha='${s}' style='top:calc(${n}% - 18px)'>\n                \n                </div>\n            `;e.insertAdjacentHTML("beforeend",c)}));const r=document.querySelector(".os-scrollbar-vertical .os-scrollbar-handle");var s=`\n        <div class='scrollbar-tag timeline'>\n            ${Math.max(...a)}\n        </div>\n        `;r.insertAdjacentHTML("beforeend",s);const c=document.querySelector(".os-scrollbar-vertical .os-scrollbar-track");s="<div id='secondary-track' class='timeline'></div>",c.insertAdjacentHTML("beforeend",s);const d=document.querySelectorAll(".scrollbar-point"),u=document.querySelector(".scrollbar-tag"),p=document.getElementById("secondary-track");function m(){if(!document.querySelector(".list").classList.contains("selected"))return;p.style.height=`calc(${i.scroll().handleOffset.y}px + 4px)`,u.classList.add("scrolling");const e=document.querySelector(".os-scrollbar-vertical .os-scrollbar-handle").getBoundingClientRect();d.forEach((i=>{const a=i.getBoundingClientRect(),o=e.top-a.top;i.classList.contains("scrolled")?o<0&&(i.classList.remove("scrolled"),u.innerHTML=i.getAttribute("data-anterior")):o>0&&(i.classList.add("scrolled"),u.innerHTML=i.getAttribute("data-fecha"))}))}function f(){document.querySelector(".list").classList.contains("selected")&&u.classList.remove("scrolling")}const v=document.querySelectorAll(".m-proyecto"),g=Array.from(v),h=document.querySelectorAll(".skills span");h.forEach((i=>{const e=g.filter((e=>e.getAttribute("data-skills").includes(i.innerHTML.toLowerCase())));i.innerHTML+=` (${e.length})`}));const b=document.querySelectorAll(".timeline");this.instance.options("className","os-theme-dark"),b.forEach((i=>{i.style.display="none"}))},methods:{displayChange(i,e){if(console.log(this.instance),i&&i.target.classList.contains("selected")||document.querySelectorAll(".display-icon").forEach((i=>{i.classList.toggle("selected")})),e!=this.type){const i=document.querySelectorAll(".timeline");"mosaic"==e?(this.instance.options("className","os-theme-dark"),i.forEach((i=>{i.style.display="none"}))):(this.instance.options("className","os-theme-round-dark"),i.forEach((i=>{i.style.display="block"})))}this.vista=e,this.refresh+=1},filterSkill(i,e){this.filtro==e?(i.target.classList.toggle("filtrando"),this.filtro=null):(document.querySelectorAll(".skills span").forEach((i=>{i.classList.remove("filtrando")})),i.target.classList.add("filtrando"),this.filtro=e),this.refresh+=1},viewProject(i){this.displayChange(null,"list"),this.$nextTick((()=>{const e=document.querySelectorAll(".proyecto .titulo"),a=document.querySelector(".proyecto").clientHeight;e.forEach(((e,o)=>{if(e.innerHTML==i){let i=o*a;zi()(document.querySelector("#scrollable")).scroll({y:`${i}px`},500)}}))}))}}};const Oi=(0,v.A)(Ii,[["render",A],["__scopeId","data-v-77cd2b40"]]);var Di=Oi;const $i=i=>((0,l.Qi)("data-v-13538a6b"),i=i(),(0,l.jt)(),i),Ni={class:"container-fluid border border-2 d-flex justify-content-center"},Zi=$i((()=>(0,l.Lk)("div",{class:"d-flex w-100 justify-content-center"},[(0,l.Lk)("div",{id:"m-profile-img"})],-1)));function Ri(i,e,a,o,t,n){return(0,l.uX)(),(0,l.CE)("header",Ni,[(0,l.Lk)("div",null,[Zi,(0,l.Lk)("button",{onClick:e[0]||(e[0]=(...i)=>n.mabout&&n.mabout(...i)),class:"m-about-btn","data-alt":'<i class="fa-solid fa-arrow-left"></i> Mis proyectos'},"Sobre mí")])])}var Gi={name:"AppHeader",methods:{mabout(){document.querySelector("header").classList.toggle("open")}}};const Ki=(0,v.A)(Gi,[["render",Ri],["__scopeId","data-v-13538a6b"]]);var Ji=Ki,Wi=a(4042),Ui=a.n(Wi),Yi={name:"App",mounted(){Ui().init()},components:{AppHeader:Ji,AppProfile:h,AppProyectos:Di}};const ie=(0,v.A)(Yi,[["render",n]]);var ee=ie;(0,o.Ef)(ee).mount("#app")}},e={};function a(o){var l=e[o];if(void 0!==l)return l.exports;var t=e[o]={exports:{}};return i[o].call(t.exports,t,t.exports,a),t.exports}a.m=i,function(){var i=[];a.O=function(e,o,l,t){if(!o){var n=1/0;for(d=0;d<i.length;d++){o=i[d][0],l=i[d][1],t=i[d][2];for(var r=!0,s=0;s<o.length;s++)(!1&t||n>=t)&&Object.keys(a.O).every((function(i){return a.O[i](o[s])}))?o.splice(s--,1):(r=!1,t<n&&(n=t));if(r){i.splice(d--,1);var c=l();void 0!==c&&(e=c)}}return e}t=t||0;for(var d=i.length;d>0&&i[d-1][2]>t;d--)i[d]=i[d-1];i[d]=[o,l,t]}}(),function(){a.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return a.d(e,{a:e}),e}}(),function(){a.d=function(i,e){for(var o in e)a.o(e,o)&&!a.o(i,o)&&Object.defineProperty(i,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()}(),function(){a.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)}}(),function(){a.p="/portfolio/"}(),function(){var i={524:0};a.O.j=function(e){return 0===i[e]};var e=function(e,o){var l,t,n=o[0],r=o[1],s=o[2],c=0;if(n.some((function(e){return 0!==i[e]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(s)var d=s(a)}for(e&&e(o);c<n.length;c++)t=n[c],a.o(i,t)&&i[t]&&i[t][0](),i[t]=0;return a.O(d)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(4020)}));o=a.O(o)})();
//# sourceMappingURL=app.4172a69c.js.map