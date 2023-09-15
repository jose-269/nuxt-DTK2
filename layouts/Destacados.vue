<template>
  <div>
    <NavBar />
    <Nuxt />
    <!-- <Footer :automotora="clientData" /> -->
    <Footer  />
  </div>
</template>

<script>
import NavBar from "~/components/partials/navBar.vue";
import Footer from "~/components/partials/Footer.vue";
import { mapActions, mapState } from "vuex";

export default {
  layout: "Destacados",
  components: {
    NavBar,
    Footer,
  },
  methods: {
      ...mapActions("seminuevosCars", ["getData", "getClientData"]),
  },
  computed: {
    // ...mapState("seminuevosCars", ["clientData"]),
  },
  created() {
    this.getData();
    // this.getClientData();
  },
};
</script>
