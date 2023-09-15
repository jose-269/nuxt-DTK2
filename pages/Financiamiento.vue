<template>
  <div class="container financig-wrapper">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center mb-5">
          SOLICITUD DE <br />
          FINANCIAMIENTO
        </h1>
      </div>
    </div>
    <div class="container py-md-5">
      <div class="row">
        <div class="col-md-4 mb-4">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre y Apellido"
          />
        </div>
        <div class="col-md-4 mb-4">
          <input type="text" class="form-control" placeholder="RUT" />
        </div>
        <div class="col-md-4 mb-4">
          <input type="text" class="form-control" placeholder="Teléfono" />
        </div>
        <div class="col-md-4 mb-4">
          <input
            type="text"
            class="form-control"
            placeholder="Correo Electrónico"
          />
        </div>
        <div class="col-md-4 mb-4">
          <input
            type="text"
            class="form-control"
            placeholder="Monto de crédito"
          />
        </div>
        <div class="col-md-4 mb-4">
          <select type="text" class="form-select">
            <option value="" selected>Cantidad de cuotas</option>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
        </div>
        <p class="text-center">
        <button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          ¿Desea entregar vehículo como parte de pago?
        </button>

        </p>
        
        <div class="collapse my-4" id="collapseExample">
            <div class="row">
              <div class="col-md-4">
                <input
                  type="text"
                  class="form-control mb-4"
                  placeholder="Marca del Vehículo"
                />
              </div>
              <div class="col-md-4">
                <input
                  type="text"
                  class="form-control mb-4"
                  placeholder="Modelo del Vehículo"
                />
              </div>
              <div class="col-md-4">
                <input
                  type="text"
                  class="form-control mb-4"
                  placeholder="Año del Vehículo"
                />
              </div>
            </div>
        </div>
        <div class="col-12">
          <div class="form-floating">
            <textarea class="form-control financig-msg" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">¿Desea agregar un mensaje?</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Financiamiento",
  layout: "Destacados",
};
</script>

<style lang="scss" scoped>
.financig-wrapper {
  margin-top: 139px !important;
}
.financig-msg {
  height: 150px;
}
</style>
