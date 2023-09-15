<template>
  <transition name="fade">
    <div class="modal-overlay" v-if="showModal">
      <div class="container-fluid px-0 px-sm-3">
        <div class="row">
          <div class="col-12 mt-2">
            <div class="close-wrap d-flex justify-content-end">
              <fa
              icon="circle-xmark"
                class="text-white close-btn-FA"
                @click="offModal(false)"
              ></fa>
            </div>
          </div>
          <div class="col-12 col-xl-8">
            <h4 class="text-white text-capitalize text-center mb-0 lightbox-title">{{ brandName }} - {{ anio }} - {{ price }}</h4>
          </div>
          <div class="col-12 col-xl-8">
             
            <div class="main-carousel-wrapper my-1" v-if="showModal">
              
              <VueSlickCarousel  style="cursor: pointer" ref="c3" :asNavFor="c4" v-bind="modalSettings" class="images-wrapper">
                <div v-for="img in lightboxPics" :key="img" @click="index = img" >
                  <img :src="img" alt="main-pic" class="main-carousel-wrapper__img image">
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
            </div>
            <div class="bg-dark indicator-wrapper">
              <div class="indicator-wrapper__within">
                <VueSlickCarousel ref="c4" v-bind="indicatorsSettings"  :asNavFor="c3" :autoplaySpeed=5000 :speed="500" :slidesToShow="6" :focusOnSelect="true">
                  <div v-for="img,i in lightboxPics" :key="i" >
                    <img :src="img" alt="indicator-pic" class="indicator-carousel" style="cursor:pointer">
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
          </div>
          <div class="col-4 d-none d-xl-block ">
            <div class="bg-white form-wrap rounded px-5 my-1">
              <h3 class="text-center py-2 py-lg-4 mb-0 form-title">Contactar al vendedor</h3>
              <input
                type="text"
                class="form-control mx-auto mb-2"
                placeholder="Nombre"
              />
              <input
                type="tel"
                class="form-control mx-auto mb-2"
                placeholder="Teléfono"
              />
              <input
                type="email"
                class="form-control mx-auto mb-2"
                placeholder="E-mail"
              />
              <input
                type="number"
                class="form-control mx-auto mb-2"
                placeholder="Rut"
              />
              <textarea
                class="form-control mx-auto mb-2"
                placeholder="Mensaje..."
              ></textarea>
              <div class="form-check pb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-credito"
                />
                <label class="form-check-label label-credito">
                  COTIZA TU CRÉDITO
                </label>
              </div>
              <div id="collapse-credito" class="collapse">
                <input
                  type="text"
                  class="form-control form-control-sm mb-2 mx-auto"
                  placeholder="Pie"
                />
                <h6 class="label-credito ms-2">Cuotas</h6>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" />
                  <label class="form-check-label label-credito">12</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" />
                  <label class="form-check-label label-credito">24</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" />
                  <label class="form-check-label label-credito">36</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" />
                  <label class="form-check-label label-credito">48</label>
                </div>
                <div class="form-check form-check-inline pb-2">
                  <input class="form-check-input" type="checkbox" />
                  <label class="form-check-label label-credito">60</label>
                </div>
              </div>
              <div class="form-check pb-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  data-bs-toggle="collapse"
                  data-bs-target="#parte-de-pago"
                />
                <label class="form-check-label label-credito ">
                  DEJA TU AUTO EN PARTE DE PAGO
                </label>
              </div>
              <div id="parte-de-pago" class="collapse">
                <input
                  type="text"
                  class="form-control form-control-sm mb-2"
                  placeholder="Automóvil, marca, modelo, versión, año, kilometraje, etc"
                />
              </div>
              <div class="py-4 py-lg-0">
                <button class="btn btn-danger w-100  mb-4">COTIZAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  name: "Lightbox",
  data() {
    return {
      index: null,
      active: 0,
      c3: undefined,
      c4: undefined,
      modalSettings: {
        "arrows": true,
        "dots": false,
        "autoplay": true,
        "speed": 500,
        "autoplaySpeed": 5000,
      },
      indicatorsSettings: {
        "arrows": false,
        "dots": false,
        "autoplay": true,
        "speed": 500,
        "autoplaySpeed": 5000,
      },
    }
  },
  computed: {
    ...mapState(['showModal']),
  },
  methods: {
    ...mapMutations(['setModal']),
    setActive(index) {
      let active = index;
      if (index === this.pics.length) active;
      else if (index === -1) active = this.pics.length - 1;
      this.active = active;
    },
    offModal(off) {
      this.setModal(off);
    }
  },
  components: {
    VueSlickCarousel,
  },
  props: {
    lightboxPics: {
      type: Array,
    },
    brandName : {
      type: String,
    },
    anio: {
      type: Number,
    },
    price: {
      type: Number,
    }
  },
  mounted () {
    this.c3 = this.$refs.c3;
    this.c4 = this.$refs.c4;
  },
};
</script>
<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1055;
  background-color: rgba(0, 0, 0, 0.85);
}
.close-btn-FA {
  font-size: 1.8125rem;
  cursor: pointer;
}
.main-carousel-wrapper {
    margin-top: 1.25rem;
    &__img {
      margin: 0 auto;
      width: 74%;
    }
  }
.indicator-carousel {
    width: 100%;
    padding: 0 0.3125rem;
    cursor: pointer;
}
.indicator-wrapper {
  overflow: hidden;
  width: 74%; 
  margin:-0.4375rem auto;
  border-top: 0.4375rem solid #212529;

  &__within {
    margin: 0 -0.3rem 0 -0.3rem;
  }
}
.modal-indicator-wrapper {
   overflow: hidden;
  width: 72%; 
  margin:-0.4375rem auto;
  border-top: 0.4375rem solid #212529;

  &__within {
    margin: 0 -0.3rem 0 -0.3rem;
  }
}
.close-wrap {
  i {
    cursor: pointer;
    color: white;
  }
}
.form-wrap {
  margin-top: 1.25rem;
}
.modal-indicator-wrapper {
  margin-bottom: 18.75rem;
}
.slick-prev::before {
  position: absolute;
  color: rgb(255, 255, 255) !important;
  font-size: 3.125rem;
  line-height: 1;
  display: inline-block;
  opacity: 0.75;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  z-index: 9999;
}
.custom-arrow-prev {
  margin-left: 10rem;
}
.custom-arrow-next {
  margin-right: 11.875rem;
}

.slick-next::before {
  position: absolute;
  color: rgb(255, 255, 255) !important;
  font-size: 3.125rem;
  line-height: 1;
  display: inline-block;
  opacity: 0.75;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.slick-next {
  z-index: 9999;
}
.slick-prev {
    z-index: 9999;
}
@media only screen and (min-width:1501px) and (max-width:1700px) {
  .main-carousel-wrapper {
    &__img {
      width: 73%;
    }
  }
  .indicator-wrapper {
  width: 73%; 
  }
  .custom-arrow-prev {
  margin-left: 10.3125rem;
  }
.custom-arrow-next {
  margin-right: 12.1875rem;
  }
}
@media only screen and (min-width:1253px) and (max-width:1500px) {
  .main-carousel-wrapper {
    &__img {
      width: 80%;
    }
  }
  .indicator-wrapper {
  width: 80%; 
  }
  .custom-arrow-prev {
  margin-left: 7.8125rem;
  }
  .custom-arrow-next {
    margin-right: 9.6875rem;
  }
}
@media only screen and (min-width:1200px) and (max-width:1252px) {
  .main-carousel-wrapper {
    &__img {
      width: 83%;
    }
  }
  .indicator-wrapper {
  width: 83%; 
  }
  .custom-arrow-prev {
  margin-left: 5.9375rem;
  }
  .custom-arrow-next {
    margin-right: 7.8125rem;
  }
 .form-title {
   font-size: 1.25rem;
 }
}
@media only screen and (min-width: 1000px) and (max-width:1199px) {
.main-carousel-wrapper {
  text-align: center;
    &__img {
      width: 60%;
    }
  }
  .indicator-wrapper {
  width: 60%; 
  }
  .custom-arrow-prev {
  margin-left: 15.3125rem;
  }
  .custom-arrow-next {
    margin-right: 18.4375rem;
  }
}
@media only screen and (min-width: 577px) and (max-width:837px) {
.main-carousel-wrapper {
  text-align: center;
    &__img {
      width: 89%;
    }
  }
  .indicator-wrapper {
  width: 89%; 
  }
  .custom-arrow-prev {
  margin-left: 60px;
  }
  .custom-arrow-next {
    margin-right: 110px;
  }
}
@media only screen and (min-width: 320px) and (max-width:576px) {
  .main-carousel-wrapper {
  text-align: center;
    &__img {
      width: 100%;
    }
  }
  .indicator-wrapper {
  width: 100%; 
  }
  .custom-arrow-prev {
  margin-left: 0.9375rem;
  }
  .custom-arrow-next {
    margin-right: 4.0625rem;
  }
}
</style>
