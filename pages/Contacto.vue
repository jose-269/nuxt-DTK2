<template>
  <section class="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-12">
              <fa icon="envelope" class="envelope" />
              <h2 class="contact-main-text d-inline-block">
                !Comunícate con Nosotros!
              </h2>
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control mb-4"
                placeholder="Nombre"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control mb-4"
                placeholder="Apellido"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control mb-4"
                placeholder="Correo Electrónico"
              />
            </div>
            <div class="col-md-6">
              <input
                type="text"
                class="form-control mb-4"
                placeholder="Teléfono"
              />
            </div>
            <div class="col-12">
              <div class="form-floating">
                <textarea
                  class="form-control contact-msg"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">¿Desea agregar un mensaje?</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="row">
            <div class="col-12">
              <h2 class="contact-main-text text-center mb-4">Nuestros Datos</h2>
              <div class="text-center">
                <div class="d-block">
                  <fa icon="location-dot" class="location-dot" />
                  <p class="d-inline-block">Av. Nombre 123 Comuna.</p>
                </div>
                <div class="d-block">
                  <fa icon="phone" class="phone" />
                  <p class="d-inline-block">+569 1234 5678</p>
                  <div class="d-block">
                    <fa icon="envelope" class="envelope-our" />
                    <p class="d-inline-block">Contacto@sitioweb.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contacto",
  layout: "Destacados",
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 139px !important;
}
.contact-main-text {
  font-size: 28px;
  font-weight: 600;
}
.contact-msg {
  height: 100px;
}
.envelope {
  font-size: 28px;
}
.location-dot {
  font-size: 19px;
}
</style>
