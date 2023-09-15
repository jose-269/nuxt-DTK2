<template>
  <div class="mb-5 pb-3">
    <div class="preOwnerCars"></div>
    <SkeletonsMiniFicha :items="itemsPerPage" v-if="dataLoader" />
    <div class="row">
      <div class="col-12 text-end mb-4">
        <div class="row text-end">
          <div
            class="col-sm-6 col-md-6 col-lg-4 ms-auto mb-3 mb-sm-0 d-flex align-items-center justify-content-center justify-content-lg-end">
            <span class="align-self-center align-middle me-1"> {{ pageOfItemsLength }}</span>
            <span class="align-middle">de {{ getFiltrosLateral.length }} Resultados</span>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-4 ms-auto my-auto">
            <div class="d-flex align-items-center justify-content-center justify-content-md-end">
              <label class="me-2 show-pages-label">Mostrar autos por páginas</label>
              <select class="form-select show-products" aria-label="Ordenar por:" v-model="itemsPerPageModel"
                @change="pageSizeChanged">
                <option :value="12" selected>12</option>
                <option :value="24">24</option>
                <option :value="48">48</option>
              </select>
            </div>
          </div>
          <div class="col-sm-6 col-md-12 col-lg-4 d-none d-md-block ms-auto my-auto ">
            <div
              class="d-flex align-items-center justify-content-center justify-content-md-center justify-content-lg-end">
              <select class="form-select order-by-price desktop-sorter-price" v-model="sortBy"
                aria-label="Ordenar por:">
                <option :value="null" disabled selected>Precio por:</option>
                <option value="max">De mayor a menor</option>
                <option value="min">De menor a mayor</option>
              </select>
            </div>
          </div>
        </div>
      </div>



      <div class="col-md-6 col-lg-4 pb-4" v-for="(car, i) in pageOfItems" :key="i">
        <div class="card seminuevos-card mb-2 h-100" :id="car.AUTOID" style="scroll-margin-top: 500px">
          <nuxt-link :to="`/seminuevos/pagina/autos/${car.AUTOID}`">
            <div v-if="car.ETIQUETA" class="ribbon-wrapper-big">
              <div class="ribbon-css-big" :class="car.VCHETIQUETA_COLOR"
                :style="`background-color:${car.VCHETIQUETA_COLOR}`">
                {{ car.VCHETIQUETA_TITULO }}
              </div>
            </div>
            <div :style="{ backgroundImage: `url(${car.url_foto_particular})` }" class="card-img-top card-img"
              alt="vehículo imagen" />
          </nuxt-link>
          <div class="card-body d-flex flex-column">
            <div class="form-check form-check-inline comparar-check p-0 rounded bg-light">
              <input class="form-check-input ms-1 customCheckbox" type="checkbox" :value="car" v-model="selector"
                :id="car.AUTOID" @change="unchecker(car.AUTOID)" />
              <label class="form-check-label ps-1"> Comparar </label>
            </div>
            <h5 class="icedcard-title text-center text-uppercase mb-0">
              {{ car.MARCA }}
            </h5>
            <hr class="my-2" />
            <h5 class="card-title text-center text-uppercase text-danger mb-0">
              $ {{ car.VCHPRECIO.toLocaleString() }}
            </h5>
            <hr class="my-2" />
            <div class="d-flex text-center pb-3 justify-content-between flex-wrap">
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
                <fa icon="road" /><span class="ps-1 car-detai-text">{{
                  car.VCHKILOMETROS.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }}
                  Kms</span>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <nuxt-link :to="`/seminuevos/pagina/autos/${car.AUTOID}`" class="btn btn-dark w-75">VER MÁS</nuxt-link>
              <div class="text-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Añadir a favoritos">
                <fa icon="star" class="star-modal" data-bs-toggle="modal" data-bs-target="#modalFavoritos" @click="setFavorites(car.AUTOID)" />
              </div>
            </div>
            <!-- MODAL -->
            <FavoriteForm :car="car" class="modal fade" id="modalFavoritos" tabindex="-1" aria-hidden="true" />

          </div>
        </div>
      </div>
      
      <!-- cards -->
      <div class="pb-0 pt-3 text-center">
        <Pagination :items="this.getFiltrosLateral" @changePage="onChangePage" :pageSize="this.itemsPerPageModel"
          :labels="customLabels"></Pagination>
      </div>
    </div>
  </div>




</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Pagination from "../components/JwPagination.vue";
import SkeletonsMiniFicha from "./SkeletonsMiniFicha.vue";
import FavoriteForm from "~/components/forms/FavoriteForm";


export default {
  name: "Cards",
  data() {
    return {
      pageOfItems: [],
      // pageSize: 12,
      customLabels: {
        first: "Primero",
        last: "Último",
        previous: "Anterior",
        next: "Siguiente",
      },
      selected: [],
    };
  },
  computed: {
    ...mapState("seminuevosCars", [
      "filtrados",
      "comparatorSelector",
      "dataLoader",
      "sortByPrices",
      "itemsPerPage",
      "currentPagerNumber"
    ]),
    pageOfItemsLength() {
      if (this.pageOfItems) {
        return this.pageOfItems.length;
      }
    },
    itemsPerPageModel: {
      get() {
        return this.itemsPerPage
      },
      set(v) {
        this.setItemsPerPage(v)
      }
    },
    selector: {
      get() {
        return this.comparatorSelector;
      },
      set(v) {
        if (v.length > 3) {

          alert('No puede seleccionar más de tres vehículos');
          return;

        } else {
          this.selected = v;
          this.selectedObserver(v);
        }
      },
    },
    sortBy: {
      get() {
        return this.sortByPrices;
      },
      set(v) {
        this.sorterByPrices(v);
      },
    },
    ...mapGetters("seminuevosCars", ["getFiltrosLateral"]),
  },
  methods: {
    ...mapMutations("seminuevosCars", ["selectedObserver", "sorterByPrices", "fillSugestedData", "setCurrentPage", "setItemsPerPage"]
    
    ),
    ...mapMutations("mails/favoritesForm", ["setShowFavoriteForm"]),

    unchecker(id) {
      const checkbox = document.getElementById(id);
      const findIndex = this.selected.findIndex(el => el.AUTOID === id);
      if (findIndex === -1) checkbox.checked = false;

    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
      
    },
    pageSizeChanged(e) {
      this.$router.push({ path: '/Seminuevos/1' })
      this.setItemsPerPage(Number(e.target.value)) ;
      const carsPerPages = Number(e.target.value);
      let numberCurrentPagerNumber = Number(this.currentPagerNumber);
    },
    setFavorites() {
      this.setShowFavoriteForm(true);
    }
  },
  updated() {
    // this.changeCurrentPage();
    const paginationLinks = document.querySelectorAll(".page-item");
    const preOwnerCars = document.querySelector(".preOwnerCars");
    paginationLinks.forEach((el) => {
      el.addEventListener("click", () => {
        preOwnerCars.scrollIntoView(true);
      });
    });
  },
  components: {
    Pagination,
    SkeletonsMiniFicha,
    FavoriteForm,
  },
};
</script>

<style lang="scss">
 /* Si se añade scoped acá cuando haces click en la paginación no sube hasta el top del componente */
.preOwnerCars {
  scroll-margin-top: 10rem;
}

.seminuevos-card {
  box-shadow: 0.625rem #a7a7a7;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 7px;
}

.seminuevos-card:hover {
  box-shadow: 0 0.625rem 1.25rem #a7a7a7;
}

.card-img-top {
  width: 100%;
  background-color: gainsboro;
  background-size: contain;
  cursor: pointer;
  aspect-ratio: 4/3;
}

.comparar-check {
  position: absolute;
  right: 0;
  margin-top: -3.125rem;
  width: 6.25rem;
}

.order-by-price,
.customCheckbox {
  cursor: pointer;
}

.star {
  color: #fff;
  text-shadow: 0 0 0.125rem #000;
  cursor: pointer;
}

.star-modal {
  cursor: pointer;
}

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

.show-products {
  width: 4.375rem;
}

.car-detai-text {
  font-size: 0.75rem;
}

@media (max-width:991px) and (min-width: 768px) {
  .desktop-sorter-price {
    width: 50%;
    margin-top: 1.25rem;
  }
}

@media (max-width: 767px) {
  .preOwnerCars {
    scroll-margin-top: 12rem;
  }
}
</style>
