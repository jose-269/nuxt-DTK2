<template>
  <div>
    <client-only>
      <SkeletonsFicha v-if="!singleCar" />
    </client-only>
    <div v-if="singleCar" class="container-lg single-car-container">
      <div class="row justify-content-end">
        <PreviousButton v-if="singleCar" class="d-inline" />
      </div>
      <div class="row">
        <div class="col-12 col-md-8 mt-4" v-if="singleCar.photos">
          <div class="main-carousel-wrapper mx-auto">
            <div class="ribbon-wrapper-Ficha" v-if="singleCar.labelTitle">
              <div class="ribbon-css-Ficha"
                :style="`background-color:${singleCar.labelColor};color:${singleCar.labelTitleColor}`">
                {{ singleCar.labelTitle }}
              </div>
            </div>
            <client-only>
              <VueSlickCarousel ref="c1" v-model="carousel_1" v-if="singleCar.photos" @beforeChange="syncSliders"
                class="images-wrapper">
                <div v-for="(img, i) in singleCar.photos" :key="i" @click="index = i">
                  <img :src="img" alt="main-pic" class="main-carousel-wrapper__img image" @click="onModal(true)" />
                </div>
                <template #prevArrow="arrowOption">
                  <div class="custom-arrow-prev">
                    {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                  </div>
                </template>
                <template #nextArrow="arrowOption">
                  <div class="custom-arrow-next">
                    {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                  </div>
                </template>
              </VueSlickCarousel>
            </client-only>
          </div>
          <div class="bg-dark indicator-wrapper mx-auto" v-if="singleCar.photos">
            <div class="indicator-wrapper__within">
              <client-only>
                <VueSlickCarousel ref="c2" :pauseOnHover="true" :draggable="true" :autoplay="true" :slidesToShow="6"
                  :arrows="false" :edgeFriction="1" :focusOnSelect="true" :autoplaySpeed="3000" :speed="1000"
                  @beforeChange="syncSliders">
                  <div v-for="(img, i) in singleCar.photos" :key="i">
                    <img :src="img" alt="indicator-pic" class="indicator-carousel d-inline" />
                  </div>
                </VueSlickCarousel>
              </client-only>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-4" v-if="singleCar.photos">
          <h4 class="text-capitalize">
            {{ singleCar.brandName }} {{ singleCar.modelName }}
          </h4>
          <div class="precios">
            <h5>
              Precio:
              <span class="text-danger fw-bold">$ {{ singleCar.price.toLocaleString() }}</span>
            </h5>
            <hr />
            <!-- <h5 v-if="getFicha.VCHLEGALPRECIO">
              Precio con financiamiento:
              <span class="text-danger fw-bold">{{
                getFicha.VCHLEGALPRECIO
              }}</span>
            </h5> -->
          </div>
          <div class="text-center"></div>
          <div class="container-fluid px-1">
            <div class="row">
              <div class="col-6">
                <fa icon="circle" class="text-danger me-1"></fa>Año
              </div>
              <div class="col-6">
                <p class="mb-0 d-inline-block">{{ singleCar.year }}</p>
              </div>
              <div class="col-6">
                <fa icon="circle" class="text-danger me-1"></fa>Kilometraje
              </div>
              <div class="col-6">
                {{ singleCar.kilometers.toLocaleString() }}
              </div>
              <div class="col-6">
                <fa icon="circle" class="text-danger me-1"></fa>Transmisión
              </div>
              <div class="col-6 text-capitalize">
                {{ singleCar.transmissionName.replace("Transmisión ", "") }}
              </div>
              <div class="col-6">
                <fa icon="circle" class="text-danger me-1"></fa>Combustible
              </div>
              <div class="col-6 text-capitalize">{{ singleCar.fuelName }}</div>
              <div class="col-6">
                <fa icon="circle" class="text-danger me-1"></fa>Color
              </div>
              <div class="col-6 text-capitalize">{{ singleCar.color }}</div>
            </div>
          </div>

          <quotation-form :numberPlate="singleCar.patent" :photo="singleCar.photos[0]" :price="singleCar.price" 
            :brand="singleCar.brandName" :model="singleCar.modelName" :version="singleCar.version" 
            :year="singleCar.year" :kms="singleCar.kilometers"
          />

        </div>

        <!-- <FichaModal
          :lightboxPics="singleCar.photos"
          :brandName="singleCar.brandName"
          :anio="singleCar.year"
          :price="singleCar.price"
          v-if="showModal"
        ></FichaModal> -->
      </div>
      <div class="row mb-5">
        <div class="col-12 col-md-8 mt-3" v-if="singleCar.photos">
          <div class="border p-4 shadow equip-list h-100">
            <h5 v-if="equipmentList">Equipamiento</h5>
            <div class="pt-4 px-4" v-if="equipmentList">
              <ul class="des-lista p-0">
                <li v-for="(equip, i) in equipmentList" :key="i">
                  <fa icon="check" class="text-success me-2"></fa>
                  {{ equip }}
                </li>
              </ul>
            </div>
            <h5>Descripción</h5>
            <p>{{ singleCar.description }}</p>
          </div>
        </div>

        <div class="col-12 col-md-4 mt-3" v-if="singleCar.photos">
          <div class="border p-4 shadow h-100">
            <div class="d-flex justify-content-between">
              <div>
                <h5>Ubicación</h5>
                <a :href="`tel:${singleCar.phone1}`" class="ubication-phone">{{ singleCar.phone1 }}</a>
              </div>
              <div class="waze-button my-auto">
                <a :href="`https://ul.waze.com/ul?ll=${singleCar.latitude}%2C${singleCar.length}&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location`"
                  target="_blank">
                  <img src="~static/img/waze-brands.svg" alt="waze-pic" class="waze-button__icon" />
                </a>
              </div>
            </div>
            <div class="mapa pt-4">
              <div id="map-wrap" class="map-wrap">
                <client-only>
                  <l-map ref="map" :zoom="20" :center="[`${singleCar.latitude}`, `${singleCar.length}`]">
                    <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                    <l-marker ref="marker" :lat-lng="[`${singleCar.latitude}`, `${singleCar.length}`]">
                      <l-popup ref="popup" :options="{
                        closeOnClick: false,
                        autoClose: false,
                        openPopup: true,
                      }">
                        <div class="client-logo-wrapper">
                          <img :src="`${singleCar.clientLogo}`" class="client-logo" />
                          <div class="client-name">
                            {{ singleCar.clientName }}
                          </div>
                        </div>
                      </l-popup>
                    </l-marker>
                  </l-map>
                </client-only>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5" v-if="getSuggestedCars && getSuggestedCars.length">
        <h2 class="pb-4" v-if="getSuggestedCars">Sugeridos</h2>
        <div class="col-md-4 pb-3" v-for="(car, i) in getSuggestedCars" :key="i">
          <div class="card my-2 suggested-cards">
            <nuxt-link :to="`/autos/${car.AUTOID}`">
              <div v-if="car.ETIQUETA" class="ribbon-wrapper-big">
                <div class="ribbon-css-big" :class="car.VCHETIQUETA_COLOR"
                  :style="`background-color:${car.VCHETIQUETA_COLOR}`">
                  {{ car.VCHETIQUETA_TITULO }}
                </div>
              </div>
              <img :src="car.url_foto_particular" class="card-img-top" alt="vehículo imagen" />
            </nuxt-link>
            <div class="card-body">
              <h5 class="card-title text-center text-uppercase">
                {{ car.MARCA }}
              </h5>
              <hr />
              <h5 class="card-title text-center text-uppercase text-danger">
                $ {{ car.VCHPRECIO.toLocaleString() }}
              </h5>
              <hr />
              <div class="row text-center pb-5">
                <div class="col-6 pt-2">
                  <fa icon="calendar" /> {{ car.INTANO }}
                </div>
                <div class="col-6 pt-2">
                  <fa icon="code-branch" />
                  {{ car.TRANSMISION.replace("Transmisión ", "") }}
                </div>
                <div class="col-6 pt-2">
                  <fa icon="gas-pump" /> {{ car.COMBUSTIBLE }}
                </div>
                <div class="col-6 pt-2">
                  <fa icon="road" /> {{ car.VCHKILOMETROS }} Kms
                </div>
              </div>
              <div class="d-grid gap-2 d-md-block suggested-btn">
                <button class="btn btn-dark">VER MÁS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import PreviousButton from "@/components/PreviousButton.vue";
import QuotationForm from "@/components/forms/QuotationForm.vue";
export default {
  name: "auto",
  layout: "Destacados",
  data() {
    return {
      carousel_1: {
        pauseOnHover: true,
        draggable: true,
        arrows: true,
        autoplay: true,
        focusOnSelect: true,
        edgeFriction: 1,
        speed: 1000,
        autoplaySpeed: 3000

      },
      index: null,
      active: 0,
      width: "100%",
      // suggestedCars: [],
      
    };
    
  },
  computed: {
    ...mapState("singleCar", ["seminuevosCars", "showModal", "singleCar"]),
    // ...mapState("seminuevosCars", ["seminuevosCars", "showModal", "singleCar"]),
    ...mapGetters("singleCar", ["getSuggestedCars"]),
    equipmentList() {
      let equipment = [];
      const features = this.singleCar.features;
      if (features) features.forEach((feature) => equipment.push(feature));

      if (this.singleCar.radio)
        equipment.unshift(`Radio ${this.singleCar.radio}`);
      if (this.singleCar.airbag)
        equipment.unshift(`Airbags ${this.singleCar.airbag}`);
      if (this.singleCar.roof)
        equipment.unshift(`Techo ${this.singleCar.roof}`);
      if (this.singleCar.doors)
        equipment.unshift(`Puertas ${this.singleCar.doors}`);
      if (this.singleCar.air) equipment.unshift(`Aire ${this.singleCar.air}`);
      if (this.singleCar.carBodyName)
        equipment.unshift(this.singleCar.carBodyName);
      if (this.singleCar.directionName)
        equipment.unshift(`Dirección ${this.singleCar.directionName}`);
      if (this.singleCar.elevationHeight)
        equipment.unshift(
          `Altura de elevación ${this.singleCar.elevationHeight}`
        );
      if (this.singleCar.hp) equipment.unshift(`HP {this.singleCar.hp}`);
      if (this.singleCar.carDisplacement)
        equipment.unshift(`Cilindrada ${this.singleCar.carDisplacement}`);
      if (this.singleCar.lights)
        equipment.unshift(`Luces ${this.singleCar.lights}`);
      if (this.singleCar.loadingCapacity)
        equipment.unshift(
          `capacidad de carga ${this.singleCar.loadingCapacity}`
        );
      if (
        this.singleCar.operationalWeight &&
        this.singleCar.operationalWeight !== 0 &&
        this.singleCar.operationalWeight !== null
      )
        equipment.unshift(
          `Peso operacional ${this.singleCar.operationalWeight}`
        );
      if (this.singleCar.origin)
        equipment.unshift(`Origen ${this.singleCar.origin}`);
      if (this.singleCar.tractionName)
        equipment.unshift(`Tracción ${this.singleCar.tractionName}`);
      return equipment;
    },
  },
  methods: {
    ...mapMutations("seminuevosCars", ["setModal", "fillSugestedData"]),
    ...mapActions("singleCar", ["getSingleCar", "getData"]),

    

    goToPrev() {
      this.$router.go(-1);
    },

    async getFichaAmpliada() {
      const id = this.$route.params.id;
      if (!id) return;
      try {
        await this.getSingleCar(id);
      } catch (error) {
        console.log(error);
      }
    },

    setActive(index) {
      let active = index;
      if (index === this.singleCar.photos.length) active;
      else if (index === -1) active = this.singleCar.photos.length - 1;
      this.active = active;
    },
    onModal(on) {
      this.setModal(on);
    },
    syncSliders(currentPosition, nextPosition) {
      this.$refs["c1"].goTo(nextPosition);
      this.$refs["c2"].goTo(nextPosition);
    },
  },
  created() {
    // this.getSingleCar();
    this.getFichaAmpliada();
  },
  updated() {
    if (this.$refs.marker) {
      this.$nextTick(() => {
        this.$refs.marker.mapObject.openPopup();
      });
    }
  },
  components: {
    PreviousButton,
    QuotationForm
  },
  //   watch: {
  //   showModal: function() {
  //     if(this.showModal){
  //       document.documentElement.style.overflow = 'hidden'
  //       return
  //     }
  //     document.documentElement.style.overflow = 'auto'
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.single-car-container {
  margin-top: 100px
}

.ubication-phone {
  text-decoration: none
}

.map-wrap {
  height: 50vh
}

.client-logo-wrapper {
  width: 160px;
  display: inline-block;
}

.client-logo {
  width: 72px;
  height: 50px;
  display: block;
  margin: 0 auto;
  vertical-align: top;
}

.client-name {
  width: 160px;
  display: inline-block;
  vertical-align: top;
  margin: 0px auto;
}

.suggested-cards {
  height: 100%
}

.suggested-btn {
  position: absolute;
  bottom: 3%
}

.ribbon-wrapper-Ficha {
  z-index: 9;
  width: 173px;
  height: 148px;
  overflow: hidden;
  position: absolute;
}

.ribbon-css-Ficha {
  font-size: 15px;
  font-weight: 600;
  text-shadow: rgb(255 255 255 / 50%) 0 1px 0;
  position: relative;
  left: -62px;
  top: 45px;
  width: 268px;
  font-weight: bold;
  // color: #fff;
  text-transform: uppercase;
  text-align: center;
  -webkit-transform: rotate(320deg);
  -moz-transform: rotate(320deg);
  -ms-transform: rotate(320deg);
  -o-transform: rotate(320deg);
  padding: 7px 35px;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
}

.enviar-cotizacion {
  margin-top: -1.25rem;
}

.des-lista {
  columns: 2;
  list-style: none;
  margin-right: 0;
}

.textDes {
  padding: 1% 2%;
  color: #000;
  font-size: 0.6875rem;
  text-align: justify;
}

.waze-button {
  background-color: #fff;
  height: fit-content;
  border: 0.25rem solid #42d5ff;
  border-radius: 0.8125rem 0.8125rem;

  &__icon {
    width: 2.8125rem;
    color: #42d5ff !important;
  }
}

.carousel-ficha {
  width: 90% !important;
  height: 88vh !important;
  margin: 0 auto;
}

.main-carousel-wrapper {
  width: 90%;
  cursor: pointer;
  margin: 0 auto;

  &__img {
    width: 100%;
  }
}

.indicator-carousel {
  width: 100%;
  padding: 0 0.3125rem;
  cursor: pointer;
}

.indicator-wrapper {
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  margin: -0.4375rem 0;
  border: 7px solid #212529;

  &__within {
    margin: 0 -0.3rem 0 -0.3rem;
  }
}

.equip-list {
  width: 100%;
  // margin: 0 auto;
}

// div.slick-slide {
//   width: 500px;
// }
.custom-arrow-prev {
  z-index: 9;
}

.custom-arrow-next {
  z-index: 9;
}

.slick-prev::before {
  color: rgb(255, 255, 255) !important;
  font-size: 3.125rem;
  line-height: 1;
  position: absolute;
  display: inline-block;
  left: 1.9375rem;
  opacity: 0.75;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.slick-next {
  right: 39.5625rem;
}

.slick-next::before {
  color: rgb(255, 255, 255) !important;
  font-size: 3.125rem;
  line-height: 1;
  position: absolute;
  display: inline-block;
  left: 37.25rem;
  opacity: 0.75;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.mapa {
  position: relative;
  z-index: 9;
}
  

@media (max-width: 767px) {
  .main-carousel-wrapper {
    width: 100%;
  }

  .indicator-wrapper {
    width: 100%;
    margin: -0.4375rem 0;
    border-top: 0.4375rem solid #212529;
  }

  .carousel-ficha {
    width: 100% !important;
    margin: 0;
  }
}

@media (max-width: 567px) {
  .indicator-carousel {
    width: 100%;
    padding: 0 0.125rem;
  }
}
</style>
