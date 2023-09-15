<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container px-3">
      <nuxt-link to="/">
        <div class="navbar-brand py-0" @click="closeCollapsable">
          <img src="@/static/img/logo-sitio.png" alt="logo-sitio" class="logo-nav" />
        </div>
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ">
            <nuxt-link class="nav-link text-center py-0" aria-current="page" to="#"
              ><button class="btn btn-light px-3" >COMPRAMOS TU AUTO</button>
            </nuxt-link >
          </li>
          <li class="nav-item my-auto" @click="closeCollapsable">
            <nuxt-link class="nav-link"  :class="getRoute === 'index' ? 'active' : ''"  aria-current="page" to="/"
              >INICIO</nuxt-link
            >
          </li>
          <li class="nav-item my-auto" @click="closeCollapsable">
            <nuxt-link class="nav-link" :class="getRoute === 'Seminuevos' ? 'active' : ''" :to="`/Seminuevos/1`"
              >SEMINUEVOS</nuxt-link
            >
          </li>
          <li class="nav-item my-auto" @click="closeCollapsable">
            <nuxt-link class="nav-link" :class="getRoute === 'financiamiento' ? 'active' : ''" to="/financiamiento"
              >FINANCIAMIENTO</nuxt-link
            >
          </li>
          <li class="nav-item my-auto" @click="closeCollapsable">
            <nuxt-link class="nav-link" :class="getRoute === 'contacto' ? 'active' : ''" to="/contacto">CONTACTO</nuxt-link>
          </li>
        </ul>
        <ul class="nav navbar-nav nav-flex-icons ms-auto text-center">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ><i class="fas fa-share-alt"></i
              ><span class="ms-1">Siguenos</span></a
            >
            <div
              class="dropdown-menu dropdown-primary dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <nuxt-link to="/" class="dropdown-item"
                ><i class="fab fa-facebook-square"></i> Facebook</nuxt-link
              >
              <nuxt-link to="/" class="dropdown-item"
                ><i class="fab fa-instagram"></i> Instagram</nuxt-link
              >
              <nuxt-link to="/" class="dropdown-item"
                ><i class="fab fa-youtube"></i> Youtube</nuxt-link
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Nav",
  computed: {
  ...mapState('seminuevosCars', ['currentPagerNumber', 'itemsPerPage']),

    getRoute() {
      const path = this.$route.name;
      return path; 
    },
  },
  methods: {
  closeCollapsable () {
    const collapse = document.getElementById('navbarNav');
    collapse.classList.remove('show')
  },
  },
  created () {
    this.getRoute;
  },
  // updated () {
  //   this.$route.params.Seminuevos = this.currentPagerNumber;
  // },
};
</script>

<style scoped>
.fixed-top {
   scroll-margin-top: 100px;

}
.logo-nav {
  width: 200px;
}
.nav-item {
  display: flex;
  vertical-align: middle;

}
.nav-link.active {
  font-weight: bold;
  color: #fff;
}
</style>
