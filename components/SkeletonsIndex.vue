<template>
  <div class="row">
    <div
      class="col-md-6 col-lg-4 pb-4"
      v-for="(car, i) in indexCarsNumber"
      :key="i"
    >
      <div class=" h-100">
        <vue-skeleton-loader
          class="skeleton-miniFicha-pic mb-2"
          type="rect"
          :height="273"
          animation="wave"
        />
        <div class="p-1">
          <vue-skeleton-loader
            class="skeleton-miniFicha-details mb-1"
            type="rect"
            :height="30"
            animation="wave"
          />
          <div class="d-flex justify-content-between">
            <vue-skeleton-loader
              class="skeleton-miniFicha-details me-1"
              type="rect"
              :height="30"
              animation="wave"
            />
            <vue-skeleton-loader
              class="skeleton-miniFicha-details ms-1 mb-3"
              type="rect"
              :height="30"
              animation="wave"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonsIndex",
  data() {
    return {
      indexCarsNumber: parseInt(process.env.INDEXCARS),
    };
  },
};
</script>

<style lang="scss" scoped>
.skeleton-mini-wrapper {
  border-radius: 7px;
  box-shadow: 6px 6px 13px #8b8b8b;
}
.skeleton-miniFicha-pic {
  width: 100% !important;
  background-size: contain;
  aspect-ratio: 4/3;
}
.skeleton-miniFicha-details {
  width: 100% !important;
}
</style>
