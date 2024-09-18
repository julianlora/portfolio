<template>
<div class='profile-cont'>
    <div id="profile" class='d-flex flex-column border-end border-2'>
        <div id='profile-img'></div>
        <div>Julián Lora</div>
        <div>Buenos Aires, Argentina</div>
        <button class='contacto-btn'>Contacto</button>
        <div>
            <div>BIO</div>
            <div>
                Welcome to my portfolio! I'm a web developer with a passion for creating responsive and dynamic websites. Currently seeking new opportunities to collaborate and innovate. Let's build something amazing together!
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: 'AppProfile',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-cont{
    padding: 0;
    position: fixed;
    width: 200px;
    /* width: 100%; */
    height: 100%;
    transition: width 0.5s;
    background-color: #fff;
    z-index: 2;
}

#profile{
    align-items: center;
    /* transform: translateY(-180px); */
    background-color: #fff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
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
    margin-bottom: 50px;
}

.contacto-btn{
    background-color: #000;
    color: #fff;
    width: 80%;
    height: 45px;
    transition: all 0.3s;
}

.contacto-btn:hover{
    background-color: #fff;
    color: #000;
}
.expanded{
    width: 100%;
}
</style>