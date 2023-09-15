<template>
  <div class="container mb-5 py-3 index-container">
    <SkeletonsIndex v-if="dataLoader" />
    <div class="row">
      <div
        class="col-md-6 col-lg-4 pb-3"
        v-for="(car, i) in indexCars"
        :key="i"
      >
        <div class="card seminuevos-card mb-2 h-100">
          <nuxt-link :to="`/seminuevos/pagina/autos/${car.AUTOID}`">
            <div v-if="car.ETIQUETA" class="ribbon-wrapper-big">
              <div
                class="ribbon-css-big"
                :class="car.VCHETIQUETA_COLOR"
                :style="`background-color:${car.VCHETIQUETA_COLOR}`"
              >
                {{ car.VCHETIQUETA_TITULO }}
              </div>
            </div>
            <div
              :style="{ backgroundImage: `url(${car.url_foto_particular})` }"
              class="card-img-top card-img"
              alt="vehículo imagen"
            />
          </nuxt-link>
          <div class="card-body d-flex flex-column">
            <h5 class="icedcard-title text-center text-uppercase mb-0">
              {{ car.MARCA }}
            </h5>
            <hr class="my-2" />
            <h5 class="card-title text-center text-uppercase text-danger mb-0">
              $ {{ car.VCHPRECIO.toLocaleString() }}
            </h5>
            <hr class="my-2" />
            <div
              class="d-flex text-center pb-3 justify-content-between flex-wrap"
            >
              <div class="pt-2">
                <fa icon="calendar" /><span class="ps-1 car-detai-text">{{
                  car.INTANO
                }}</span>
              </div>
              <div class="pt-2">
                <fa icon="code-branch" /><span class="ps-1 car-detai-text">{{
                  car.TRANSMISION.replace("Transmisión ", "")
                }}</span>
              </div>
              <div class="pt-2">
                <fa icon="gas-pump" />
                <span class="ps-1 car-detai-text">{{ car.COMBUSTIBLE }}</span>
              </div>
              <div class="pt-2">
                <fa icon="road" /><span
                  class="ps-1 car-detai-text"
                  >{{
                    car.VCHKILOMETROS.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  }}
                  Kms</span
                >
              </div>
            </div>
            <div
              class="d-flex justify-content-between align-items-center mt-auto"
            >
              <nuxt-link :to="`/seminuevos/pagina/autos/${car.AUTOID}`" class="btn btn-dark w-75"
                >VER MÁS</nuxt-link
              >
              <div
                class="text-warning"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Añadir a favoritos"
              >
                <fa
                  icon="star"
                  class="star-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#modalFavoritos"
                />
              </div>
            </div>
            <!-- MODAL -->
            <div
              class="modal fade"
              id="modalFavoritos"
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      ALERTA DE <strong>FAVORITO</strong>
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>
                      Te enviaremos toda la información referente al automóvil
                      que marcaste como favorito, alertas cuando se modifique su
                      precio o cuando el mismo no se encuentre disponible.
                    </p>
                    <div>
                      <label class="form-label">Nombre:</label>
                      <input
                        type="text"
                        class="form-control mb-3"
                        placeholder="Nombre"
                        v-model="favorites.name"
                      />
                      <label class="form-label">Apellido:</label>
                      <input
                        type="text"
                        class="form-control mb-3"
                        placeholder="Apellido"
                        v-model="favorites.lastName"
                      />
                      <label class="form-label">Rut:</label>
                      <input
                        type="text"
                        class="form-control mb-3"
                        placeholder="Rut"
                        v-model="favorites.rut"
                      />
                      <label class="form-label">Teléfono:</label>
                      <input
                        type="number"
                        class="form-control mb-3"
                        placeholder="Teléfono"
                        v-model="favorites.phone"
                      />
                      <label class="form-label">Email:</label>
                      <input
                        type="email"
                        class="form-control mb-3"
                        placeholder="Email"
                        v-model="favorites.email"
                      />
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click="validateFavoritesForm"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Loader from "./Loader.vue";
export default {
  name: "Cars",
  computed: {
    ...mapState("seminuevosCars", ["indexCars", "dataLoader"]),
  },
  data() {
    return {
      favorites: {
        name: "",
        lastName: "",
        rut: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    validateFavoritesForm() {
      const letterRegex = /^[a-zA-Z\s]*$/;
      const rutRegex = /\b[0-9|.]{1,10}\-[K|k|0-9]/gmi;
      const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
      if(!this.favorites.name) {
        alert('Por favor escriba su nombre');
        return;
      }else if(!letterRegex.test(this.favorites.name)) {
        alert('Su nombre no debe tener números');
        return;
      }else if (!this.favorites.lastName) {
        alert('Por favor escriba su apellido');
        return;
      }else if(!letterRegex.test(this.favorites.name)) {
        alert('Su apellido no debe tener números');
        return;
      }else if (!rutRegex.test(this.favorites.rut)) {
        alert('Debe ingresar un RUT válido');
        return
      }else if (!this.favorites.phone || this.favorites.phone.trim().length > 11) {
        alert('Debe ingresar un teléfono válido');
        return
      }else if (!this.favorites.email || !emailRegex.test(this.favorites.email)) {
        alert('Debe ingresar un teléfono válido');
        return
      }
    
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 10px 0x #a7a7a7;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
  height: 100%;
}
.card:hover {
  box-shadow: 0 10px 20px #a7a7a7;
}
.card-img-top {
  height: 100%;
  width: 100%;
}
/* .btn-wraper {
  position: absolute; 
  bottom: 3%
} */
.ribbon-wrapper-big {
  width: 8.125rem;
  height: 10.1875rem;
  overflow: hidden;
  position: absolute;
  z-index: 2;
}
.ribbon-css-big {
  font-weight: 600;
  position: relative;
  left: -2.5625rem;
  color: #fff;
  top: 1.5625rem;
  width: 11.25rem;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.8125rem;
  -webkit-transform: rotate(320deg);
}
.ribbon-red {
  background-color: red;
  font-size: 0.8125rem;
}
.ribbon-blue2 {
  background-color: blue;
  font-size: 0.8125rem;
}

.loader {
  display: block;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  color: red;
}
.car-detai-text {
  font-size: 0.75rem;
}
@media (max-width: 767px) {
  .index-container {
    margin-top: 120px;
  }
}
</style>
