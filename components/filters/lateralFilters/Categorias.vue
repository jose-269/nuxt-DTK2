<template>
  <div class="container px-0 mb-3 pt-5 pt-md-0" id="preOwnerCars">
    <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
      CATEGORÍA
    </p>
    <div
      class="container ps-xs-5 ps-sm-5 ps-md-2 ps-lg-2 ps-xl-5 shadow p-3 bg-body rounded-bottom"
    >
      <div class="form-check" v-for="(item, i) in categories" :key="i">
        <input
          class="form-check-input"
          type="checkbox"
          :id="item"
          :value="item"
          v-model="categoriesValue"
        />
        <label v-if="item === 1" class="form-check-label text-capitalize">
          Automóviles
        </label>
        <label v-if="item === 2" class="form-check-label text-capitalize">
          Camionetas
        </label>
        <label v-if="item === 3" class="form-check-label text-capitalize">
         Suv/Station Wagon
        </label>
        <label v-if="item === 4" class="form-check-label text-capitalize">
         Híbridos
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Categorias",
  computed: {
    ...mapState("seminuevosCars", ["selectedCategories"]),
    categoriesValue: {
      get() {
        return this.selectedCategories;
      },
      set(v) {
        this.categoriesObserver(v);
      },
    },
  },
  methods: {
    ...mapMutations("seminuevosCars", ["categoriesObserver"]),
  },
  props: {
    categories: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.form-check-input {
  cursor: pointer;
}
</style>
