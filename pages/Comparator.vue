<template>
  <div class="container-lg comparator-container">
    <div class="row justify-content-end">
        <PreviousButton class="d-inline" />
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <button v-if="shareWithAFriend" class="btn btn-secondary mx-3 my-4 px-5 py-4" data-bs-toggle="modal"
          data-bs-target="#comparte">Comparte con un amigo</button>
        <button v-if="quoteMoreThanOne" class="btn btn-secondary mx-3 my-4 px-5 py-4" data-bs-toggle="modal"
          data-bs-target="#cotizaMasDeUno">Cotizar estos<strong> {{ comparatorSelector.length }}
          </strong>vehículos</button>
        <h2 class="fw-light mt-3">COMPARADOR DE <strong>VEHÍCULOS</strong></h2>
      </div>
      <hr>
      <!-- MODALES -->
      <div class="modal fade" id="comparte">
        <div class="modal-dialog modal-dialog-centered px-3">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">COMPARTE CON UN <strong>AMIGO</strong></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label class="pb-1">Tu Nombre y Apellido:</label>
              <input type="text" class="form-control mb-4" placeholder="Nombre y Apellido">
              <label class="pb-1">Tu Email:</label>
              <input type="email" class="form-control mb-4" placeholder="E-mail">
              <label class="pb-1">El Nombre y Apellido de tu amigo:</label>
              <input type="text" class="form-control mb-4" placeholder="Nombre y Apellido">
              <label class="pb-1">El Email de tu amigo:</label>
              <input type="email" class="form-control mb-4" placeholder="E-mail">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-danger">Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="cotizaMasDeUno">
        <div class="modal-dialog modal-dialog-centered px-3">
          <div class="modal-content">
            <div class="modal-header" v-if="comparatorSelector.length > 1">
              <h5 class="modal-title" id="exampleModalLabel">COTIZAR ESTOS <strong> {{ comparatorSelector.length }}
                </strong><strong>VEHÍCULOS</strong></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div v-else class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">COTIZA ESTE <strong>VEHÍCULO</strong></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
              <label class="pb-1">Nombre:</label>
              <input type="text" class="form-control mb-4" placeholder="Nombre">
              <label class="pb-1">Apellido:</label>
              <input type="text" class="form-control mb-4" placeholder="Apellido">
              <label class="pb-1">RUT:</label>
              <input type="number" class="form-control mb-4" placeholder="RUT">
              <label class="pb-1">Email:</label>
              <input type="email" class="form-control mb-4" placeholder="E-mail">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-danger">Enviar</button>
            </div>
          </div>
        </div>
      </div>

      <!-- FIN MODALES -->
      <div class="d-none d-lg-block">
        <table class="table table-striped mb-5">
          <thead>
            <tr>
              <th scope="col" colspan="2"></th>
              <th scoped="col" class="text-uppercase text-center " v-for="(car, i) in comparatorSelector" :key="i">
                {{ car.MARCA }}<span @click="eliminaSelectComparador(car.AUTOID)">
                  <fa icon="square-xmark" class="x-mark" />
                </span></th>
            </tr>
            <tr>
              <th scope="col" colspan="2"></th>
              <th scoped="col" class="mx-auto text-center" v-for="(car, i) in comparatorSelector" :key="i"><img
                  class="card-img-top comparator-pic" :src="car.url_foto_particular" alt="table picture"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" colspan="2">Categoría</th>
              <td class="text-center text-capitalize" v-for="(car, i) in comparatorSelector" :key="i">
                {{ car.CATEGORIAID }}</td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Precio</th>
              <td class="text-center text-capitalize" v-for="(car, i) in comparatorSelector" :key="i">{{
                car.VCHPRECIO
              }}
              </td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Kilometraje</th>
              <td class="text-center text-capitalize" v-for="(car, i) in comparatorSelector" :key="i">
                {{ car.VCHKILOMETROS }}</td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Año</th>
              <td class="text-center text-capitalize" v-for="(car, i) in comparatorSelector" :key="i">{{ car.INTANO }}
              </td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Combustible</th>
              <td class="text-center text-capitalize" v-for="(car, i) in comparatorSelector" :key="i">
                {{ car.COMBUSTIBLE }}</td>
            </tr>
            <tr>
              <th scope="row" colspan="2">Transmision</th>
              <td class="text-center text-capitalize" v-for="(car, i) in comparatorSelector" :key="i">
                {{ car.TRANSMISION }}</td>
            </tr>
            <tr v-if="quoteOne">
              <th scope="row" colspan="2"></th>
              <td class="text-center text-capitalize" v-for="(car, i) in comparatorSelector" :key="i"><button
                  class="btn btn-danger" data-bs-toggle="modal"
                  :data-bs-target="'#cotizaUno' + car.AUTOID">Cotizar</button>
                <div class="modal fade" :id="'cotizaUno' + car.AUTOID">
                  <div class="modal-dialog modal-dialog-centered px-3">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">COTIZA ESTE <strong>VEHÍCULO</strong></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body text-start">
                        <label class="pb-1">Nombre:</label>
                        <input type="text" class="form-control mb-4" placeholder="Nombre">
                        <label class="pb-1">Apellido:</label>
                        <input type="text" class="form-control mb-4" placeholder="Apellido">
                        <label class="pb-1">RUT:</label>
                        <input type="number" class="form-control mb-4" placeholder="RUT">
                        <label class="pb-1">Email:</label>
                        <input type="email" class="form-control mb-4" placeholder="E-mail">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-danger">Enviar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-md-block d-lg-none">
        <div class="row" v-for="(car, i) in comparatorSelector" :key="i">
          <div class=" col-sm-12 col-md-6 text-center ">
            <img :src="car.url_foto_particular" class="card-img-top comparator-pic" alt="table picture">
          </div>
          <div class="col-sm-12 col-md-6 mb-4">
            <table class="table table-striped table-sm">
              <thead>
                <th scope="row" colspan="2" class="text-center text-uppercase py-1">
                  <h5 class="m-0 ">{{ car.MARCA }}<span @click="eliminaSelectComparador(car.AUTOID)">
                      <fa icon="square-xmark" class="x-mark" />
                    </span></h5>
                </th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Categoria:</th>
                  <td>{{ car.CATEGORIAID }}</td>
                </tr>
                <tr>
                  <th scope="row">Precio:</th>
                  <td>{{ car.VCHPRECIO }}</td>
                </tr>
                <tr>
                  <th scope="row">Kilometraje:</th>
                  <td>{{ car.VCHKILOMETROS }}</td>
                </tr>
                <tr>
                  <th scope="row">Año:</th>
                  <td>{{ car.INTANO }}</td>
                </tr>
                <tr>
                  <th scope="row">Combustible:</th>
                  <td>{{ car.COMBUSTIBLE }}</td>
                </tr>
                <tr>
                  <th scope="row">Transmisión:</th>
                  <td>{{ car.TRANSMISION }}</td>
                </tr>
                <tr>
                  <td colspan="2" class="text-center text-capitalize"><button class="btn btn-danger"
                      data-bs-toggle="modal" :data-bs-target="'#cotizaUno-md' + car.AUTOID">Cotizar</button></td>
                  <div class="modal fade" :id="'cotizaUno-md' + car.AUTOID">
                    <div class="modal-dialog modal-dialog-centered px-3">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">COTIZA ESTE <strong>VEHÍCULO</strong></h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start">
                          <label class="pb-1">Nombre:</label>
                          <input type="text" class="form-control mb-4" placeholder="Nombre">
                          <label class="pb-1">Apellido:</label>
                          <input type="text" class="form-control mb-4" placeholder="Apellido">
                          <label class="pb-1">RUT:</label>
                          <input type="number" class="form-control mb-4" placeholder="RUT">
                          <label class="pb-1">Email:</label>
                          <input type="email" class="form-control mb-4" placeholder="E-mail">
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                          <button type="button" class="btn btn-danger">Enviar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import PreviousButton from '../components/PreviousButton.vue';
export default {
  layout: "Destacados",
  name: "Comparator",
  computed: {
    ...mapState("seminuevosCars", ["comparatorSelector", "shareWithAFriend", "quoteMoreThanOne", "quoteOne"]),
  },
  methods: {
    ...mapMutations("seminuevosCars", ["deleteComparatorItem"]),
    eliminaSelectComparador(id) {
      this.deleteComparatorItem(id);
    },
    goToPrev() {
      this.$router.back()
    }
  },
  watch: {
    comparatorSelector(newValue, oldValue) {
      if (this.comparatorSelector.length === 0) this.$router.push('/Seminuevos');
    }
  },
  components: {
    PreviousButton,
  },
}
</script>

<style lang="scss" scoped>
.angle-left {
  font-size: 1.875rem;
}

.comparator-container {
  margin-top: 6.25rem;
}

.x-mark {
  font-size: 1.25rem;
  cursor: pointer;
  float: right;
}

.comparator-pic {
  height: 7.5rem;
  width: 12.5rem;
  overflow: hidden;
  object-fit: cover;
}

.previous-button {
  margin-top: 0px;
  position: relative;
  z-index: 1;
  width: 100px;
}

@media (max-width: 992px) and (min-width: 379px) {
  .comparator-pic {
    height: 15.625rem;
    width: 21.875rem;
    overflow: hidden;
    object-fit: cover;
  }
}


</style>