<template>
    <header class='container-fluid border border-2'>
        <!-- NAV -->
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <button @click="about" class="nav-link" aria-current="page" href="#">Sobre mí</button>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown link
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader',
    methods: {
      active(event) {
        const navItem = event.currentTarget.closest('.nav-item');
        if (navItem) {
          document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
          navItem.classList.add('active');
        }
      },
      about(event){
        console.log('about')
        document.querySelector('.profile-cont').classList.toggle('expanded')
        this.active(event);
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  header{
    position: fixed;
    z-index: 1;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
  .active .nav-link{
    color: rgba(0, 0, 0, 1) !important;
    font-weight: 500;
  }
  </style>
  