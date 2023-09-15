<template >
	<div class="text-end pe-3 previous-button">
		<!-- <nuxt-link :to="`/seminuevos#${singleCar.autoID}`"> -->
		<button class="btn btn-danger rounded-circle" @click="goToPrev()">
			<fa icon="angle-left" class="angle-left"></fa>
		</button>
		<!-- </nuxt-link> -->
	</div>
</template>
<script>
export default {
	name: "previousButton",
  methods: {
		goToPrev() {
			this.$router.back()
		}
	},
}
</script>
<style lang="scss" >
.angle-left {
  font-size: 1.875rem;
}    
.previous-button {
  margin-top: 0px;
  position: relative;
  z-index: 1;
	width: 100px;
}
</style>