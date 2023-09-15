<template>
  <div class="container-lg single-car-container">
    <div class="row">
      <!-- <div class="text-end pe-3 previous-button">
        <nuxt-link to="/seminuevos">
          <button class="btn btn-danger rounded-circle">
            <fa icon="angle-left" class="angle-left"></fa>
          </button>
        </nuxt-link>
      </div> -->
      <div class="col-12 col-md-8 mt-4 text-center mx-auto">
        <vue-skeleton-loader
          class="skeleton-carousel"
          type="rect"
          animation="wave"
        />
      </div>
      <div class="col-12 col-md-4 mt-4">
        <vue-skeleton-loader
          class="mt-2"
          type="rect"
          :width="220"
          :height="30"
          animation="wave"
        />
        <vue-skeleton-loader
          class="mt-2"
          type="rect"
          :width="180"
          :height="30"
          animation="wave"
        />
        <vue-skeleton-loader
          class="mt-5 skeleton-form-width"
          type="rect"
          :height="30"
          animation="wave"
        />
        <vue-skeleton-loader
          class="mt-2 skeleton-form-width"
          type="rect"
          :height="30"
          animation="wave"
        />
        <vue-skeleton-loader
          class="mt-2 skeleton-form-width"
          type="rect"
          :height="30"
          animation="wave"
        />
        <vue-skeleton-loader
          class="mt-2 skeleton-form-width"
          type="rect"
          :height="30"
          animation="wave"
        />
        <vue-skeleton-loader
          class="mt-2 skeleton-form-width"
          type="rect"
          :height="30"
          animation="wave"
        />
        <vue-skeleton-loader
          class="mt-2 skeleton-form-width"
          type="rect"
          :height="30"
          animation="wave"
        />
        <vue-skeleton-loader
          class="skeleton-form mt-4"
          type="rect"
          :width="400"
          :height="30"
          animation="wave"
        />
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12 col-md-8 mt-3" >
        <vue-skeleton-loader
          class="skeleton-equipment"
          type="rect"
          animation="wave"
        />
      </div>
      <div class="col-12 col-md-4 mt-3" >
        <vue-skeleton-loader
          class="skeleton-ubication"
          type="rect"
          animation="wave"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkeletonFicha",
};
</script>

<style lang="scss" scoped>
.skeleton-carousel {
  width: 90% !important;
  height: 88vh !important;
  margin: 0 auto;
}
.skeleton-equipment {
  width: 90% !important;
  height: 44vh !important;
  margin: 0 auto;
}
.skeleton-ubication {
  width: 100% !important;
  height: 44vh !important;
}
.skeleton-form {
  width: 100% !important;
  height: 35% !important;
}
.skeleton-form-width {
  width: 100% !important;
}

</style>
