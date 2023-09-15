<template>
  <footer v-if="!dataLoader" class="bg-dark py-4 text-white text-center">
    <div class="container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 mt-sm-3 mt-md-0">
            <img
              src="@/static/img/logo-sitio.png"
              class="py-0"
              alt="logo-sitio"
            />
          </div>
          <hr class="clearfix w-100 d-md-none" />
          <div class="col-md-4 mt-4 mt-sm-4 mt-md-0 pt-sm-0 pt-md-4">
            <p>
              Te entregamos la calidad en servicio que tú te mereces. Contamos
              con un equipo de ejecutivos altamente calificado para entregarte
              toda la información y asesoramiento que necesites.
            </p>
          </div>
          <div class="col-md-4 mt-4 mt-sm-4 mt-md-0 mb-3">
            <h5 class="mb-3">Contacto</h5>
            <!-- <p>
               <fa icon="location-dot" ></fa>
                Dirección: {{automotora.VCHCALLE}}
            </p>
            <p>
               <fa icon="phone" ></fa>
              Teléfono: {{automotora.VCHTELEFONO1}}</p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="border-top d-flex justify-content-center pt-3">
      <p class="text-white m-0 text-muted">© 2021 Copyright |</p>
      <a
        class="text-white ps-1 text-decoration-none"
        href="https://agencia.destacados.cl/"
      >
        Desarrollado por: Agencia Destacados</a
      >
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";

import Loader from "../Loader.vue";

export default {
  name: "Footer",
  computed: {
    ...mapState("seminuevosCars", ["dataLoader"]),

  },
  props: {
    automotora: {
      type: Object,
    },
  },
};
</script>

<style scoped>

footer {
  margin-top: 80px;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
