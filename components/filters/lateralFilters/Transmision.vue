<template>
  <div class="container z-depth-1-half px-0 mb-3">
    <p class="bg-dark text-white fw-bold p-1 text-center rounded-top m-0">
      TRANSMISIÓN
    </p>
    <div
      class="
        container
        pb-2
        ps-xs-5 ps-sm-5 ps-md-2 ps-lg-2 ps-xl-5
        shadow
        p-3
        bg-body
        rounded-bottom
      "
    >
      <div class="form-check" v-for="(item, i) in transmission" :key="i">
        <input
          class="form-check-input"
          type="checkbox"
          :value="item" 
          :id="item"
          v-model="transmissionsValue"
        />
        <label class="form-check-label text-capitalize">
          {{ item }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Transmision",
    computed: {
    ...mapState("seminuevosCars", ["selectedTransmisions"]),
    transmissionsValue: {
      get() {
        return this.selectedTransmisions;
      },
      set(v) {
        this.transmissionsObserver(v);
      },
    },
  },
  methods: {
    ...mapMutations("seminuevosCars", ["transmissionsObserver"]),
  },
  props: {
    transmission: {
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
