<template>
  <div>
    <Slider style="z-index: -1;margin-top:99px;" />
    <Cars />
    <Mapa />
    <Nuestro v-if="!dataLoader" />
  </div>
</template>

<script>
import Slider from "~/components/MainSlider.vue";
import Cars from "~/components/Cars.vue";
import Mapa from "~/components/partials/Mapa.vue";
import Nuestro from "~/components/partials/NuestroStock.vue";
import { mapState } from 'vuex';

export default {
  name: "Index",
  layout: "Destacados",
    computed: {
    ...mapState("seminuevosCars", ["dataLoader"]),
  },
  components: {
    Slider,
    Cars,
    Nuestro,
    Mapa,
  },
};
</script>
