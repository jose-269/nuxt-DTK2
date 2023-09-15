<template>
  <div>
    <!-- COPARADOR -->
    <div v-if="comparatorSelector.length" class="comparador py-3 border-bottom border-danger">
      <div class="container">
        <div class="d-flex flex-row justify-content-between flex-nowrap align-items-center">
          <div>
            <h4 class="fw-bold">Comparar</h4>
          </div>
          <div class="text-center d-flex" v-for="(selection, i) in comparatorSelector" :key="i">
            <div class="d-flex">
              <img :src="selection.url_foto_particular" alt="imagen thumbnail" class="comparator-pic" />
              <div class="my-auto">
                <h5 class="mb-0 ps-2 text-uppercase comparator-items-brand">
                  {{ selection.MARCA }}
                </h5>
                <h5 class="mb-0 ps-2 text-uppercase comparator-items-model">
                  {{ selection.MODELO }}
                </h5>

                <button class="btn btn-disabled ms-2 mt-auto" @click="deleteSelected(selection.AUTOID)">
                  Eliminar
                </button>
              </div>
            </div>
          </div>

          <div v-show="!comparatorSelector[0]" class="text-center">
            <p class="fw-bold m-0">Añadir más avisos</p>
            <small class="m-0">Selecciona la casilla en el listado</small>
          </div>
          <div v-show="!comparatorSelector[1]" class="text-center border-start border-end px-4">
            <p class="fw-bold m-0">Añadir más avisos</p>
            <small class="m-0">Selecciona la casilla en el listado</small>
          </div>
          <div v-show="!comparatorSelector[2]" class="text-center">
            <p class="fw-bold m-0">Añadir más avisos</p>
            <small class="m-0">Selecciona la casilla en el listado</small>
          </div>

          <div class="text-center d-flex flex-column">
            <button class="btn btn-danger px-2 mb-2" @click="toCompare">
              Comparando <br /><span>{{ comparatorSelector.length }}</span>
            </button>
            <p class="m-0 btn btn-disabled" @click="deleteAll">Eliminar todo</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <Loader v-if="dataLoader"></Loader> -->
    <div>
      <div class="mobil-filter container-fluid d-block d-md-none" v-if="filter">
        <div class="row">
          <div class="col-12 px-0">
            <div class="d-flex justify-content-between align-items-center px-3 border-bottom">
              <h2 class="d-inline-block mb-0 py-4 me-3 text-mobil-actions">
                Filtros
              </h2>
              <fa @click="closeMobilFilter" icon="xmark" class="xmark" />
            </div>
            <FiltroLateral v-if="!dataLoader" />
            <div class="see-results py-3" @click="closeMobilFilter">
              <h2 class="d-inline-block">Ver resultados</h2>
              <fa icon="circle-right" class="circle-right" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Slider class="d-none d-md-block" style="z-index: -1; margin-top: 99px" />
    <div class="container-fluid filter-actions-mobil">
      <div class="row mt-5">
        <div class="col-6 d-block d-md-none text-center px-0">
          <div class="mobil-actions" style="cursor: pointer" @click="openMobilFilter">
            <h2 class="d-inline-block mb-0 py-4 me-3 text-mobil-actions">
              Filtros
            </h2>
            <fa icon="angles-down" />
          </div>
        </div>
        <div class="col-6 d-block d-md-none text-center px-0">
          <div class="mobil-actions">
            <label for="">Ordenar por precio</label>
            <select class="form-select order-by-price w-75 mx-auto" v-model="sortBy" aria-label="Ordenar por:">
              <option :value="null" disabled selected>Precio por:</option>
              <option value="max">De mayor a menor</option>
              <option value="min">De menor a mayor</option>
            </select>
          </div>
        </div>
      </div>
      <Slider class="d-block d-md-none mobile-slider" />
      <div class="row">
        <div class="d-none d-md-block col-sm-12 col-md-4 col-lg-3">

          <SkeletonsFilterDesktop v-if="dataLoader" />
          <FiltroLateral v-if="!dataLoader" class="lateral-filter-desktop" />
        </div>
        <div class="col-sm-12 col-md-8 col-lg-9 pt-md-0 mt-4 mt-md-0">
          <SeminuevosCars />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import Slider from "@/components/MainSlider.vue";
import SeminuevosCars from "@/components/SeminuevosCars.vue";
import Loader from "../../components/Loader.vue";
import FiltroLateral from "@/components/filters/FiltroLateral";
import SkeletonsFilterDesktop from "@/components/SkeletonsFilterDesktop"

export default {
  name: 'Seminuevos',
  layout: "Destacados",
  data() {
    return {
      filter: false,
    };
  },
  computed: {
    ...mapState("seminuevosCars", [
      "dataLoader",
      "comparatorSelector",
      "sortByPrices",
    ]),
    sortBy: {
      get() {
        return this.sortByPrices;
      },
      set(v) {
        this.sorterByPrices(v);
      },
    },
    comparatorLength() {
      return this.comparatorSelector.length;
    },
  },
  methods: {
    ...mapMutations("seminuevosCars", [
      "deleteComparatorItem",
      "deleteAllSelected",
      "sorterByPrices",
    ]),

    openMobilFilter() {
      this.filter = true;
    },
    closeMobilFilter() {
      this.filter = false;
    },
    deleteSelected(id) {
      this.deleteComparatorItem(id);
    },
    deleteAll() {
      this.deleteAllSelected();
    },
    toCompare() {
      if (this.comparatorLength < 2)
        alert("Debes comparar al menos dos automóviles");
      else this.$router.push("/comparator");
    },
  },

  components: {
    Slider,
    SeminuevosCars,
    FiltroLateral,
    Loader,
    SkeletonsFilterDesktop
  },
};
</script>

<style lang="scss" scoped>
.comparador {
  position: fixed;
  top: 0;
  overflow: scroll;
  z-index: 6;
  background-color: #fff;
  width: 100vw;
  z-index: 11;
}

.comparator-items-brand {
  font-size: 14px;
  font-weight: bold;
}

.comparator-items-model {
  font-size: 12px;
  font-weight: bold;
}

.comparator-pic {
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
}

.mobil-action-wrapper {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
}

.mobil-actions {
  border: 1px solid #ccc;
  position: fixed;
  width: 50%;
  height: 75px;
  z-index: 5;
  background-color: #fff;
}

.text-mobil-actions {
  font-size: 1.2rem;
  font-weight: bold;
}

.order-by-price {
  cursor: pointer;
}

.xmark {
  font-size: 1.7rem;
}

.mobil-filter {
  position: fixed;
  bottom: 0;
  top: 96px;
  z-index: 6;
  right: 0;
  left: 0;
  background-color: #fff;
  overflow-y: scroll;
  padding-bottom: 80px;
}

.see-results {
  background-color: #000;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  cursor: pointer;
}

.circle-right {
  font-size: 25px;
}

.mobile-slider {
  margin-top: 71px;
  position: relative;
  left: 0;
  right: 0;
}



@media (max-width: 767px) {
  .filter-actions-mobil {
    margin-top: 99px;
  }
}
</style>
