<template>
		<div class="modal fade" id="modalFavoritos" ref="favoriteFormRef" tabindex="-1" aria-hidden="true" @keydown.enter="validateFavoritesForm">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">
							ALERTA DE <strong>FAVORITO</strong>
						</h5>
						<button @click="clearFavorite" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<form >
						
					</form>
						<div class="modal-body">
							<p>
								Te enviaremos toda la información referente al automóvil
								que marcaste como favorito, alertas cuando se modifique su
								precio o cuando el mismo no se encuentre disponible.
							</p>
							<div class="row">
								<div class="col-md-6">
									<label class="form-label">Nombre:</label>
									<input type="text" class="form-control" placeholder="Nombre" v-model="favorites.name" @keydown.enter="validateFavoritesForm" />
									<span v-show="missingName && attemptSubmit" class="text-danger false-fields">* Debe ingresar un Nombre vàlido</span>
								</div>
								<div class="col-md-6">
									<label class="form-label">Rut:</label>
									<input type="text" class="form-control" placeholder="Rut" v-model="favorites.rut" @keydown.enter="validateFavoritesForm" />
									<span v-show="missingRut && attemptSubmit" class="text-danger false-fields">* Debe ingresar un Rut vàlido</span>

								</div>
								<div class="col-md-6">
									<label class="form-label">Teléfono:</label>
									<input type="text" class="form-control" placeholder="Teléfono" v-model="favorites.phone" @keydown.enter="validateFavoritesForm" />
									<span v-show="missingPhone && attemptSubmit" class="text-danger false-fields">* Debe ingresar un Telèfono vàlido</span>

								</div>
								<div class="col-md-6">
									<label class="form-label">Email:</label>
									<input type="email" class="form-control" placeholder="Email" v-model="favorites.email" @keydown.enter="validateFavoritesForm" />
									<span v-show="missingEmail && attemptSubmit" class="text-danger false-fields">* Debe ingresar un Email vàlido</span>

								</div>
							</div>
								
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
								Cerrar
							</button>
							<button  class="btn btn-danger" ref="favoriteBtn" @click="validateFavoritesForm" @keydown.enter="validateFavoritesForm">Enviar</button>
							<input type="text" hidden>
						</div>
				</div>
			</div>
		</div>
</template>

<script>




import { mapMutations, mapActions } from 'vuex';

export default {
	name: "favoriteForm",
	data() {
		return {
		
		attemptSubmit: false,
		emailRegex: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/,
		rutRegex: /\b[0-9|.]{1,10}\-[K|k|0-9]/gmi,
      favorites: {
        // autoID: this.car.AUTOID,
        name: '',
        rut: '',
        phone: '',
        email: ''
      },
    }
  },
	computed: {
		missingName() {
			return this.favorites.name === '' || this.favorites.name.length < 3;
		},
		missingRut() {
			return this.favorites.rut === '' || !this.rutRegex.test(this.favorites.rut);
		},
		missingPhone() {
			return this.favorites.phone === '' || this.favorites.phone.length < 9 || this.favorites.phone.length > 11;
		},
		missingEmail() {
			return this.favorites.email === '' || !this.emailRegex.test(this.favorites.email);
		},
	},
	methods: {
		...mapMutations("mails/favoritesForm", ["setShowFavoriteForm", "setFavoriteForm"]),
    ...mapActions("mails/favoritesForm", ["sendFavoriteForm"]),

		async validateFavoritesForm  () {

			this.attemptSubmit = true;
			if (this.missingName || this.missingRut || this.missingPhone || this.missingEmail) return;
			else {
				// this.setShowFavoriteForm(this.favorites);
				await this.sendFavoriteForm(this.favorites);
			};
		},
		clearFavorite () {
			this.favorites.name = '';
			this.favorites.rut = '';
			this.favorites.phone = '';
			this.favorites.email = '';

			this.setFavoriteForm(this.favorites);


		}
	},
	props: {
		car: {
			type: Object,
		},
	},
}
</script>

<style>
.false-fields {
	font-size: 13.5px;
}
</style>