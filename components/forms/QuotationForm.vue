<template>
  <div>
    <div class="cotiza border border-warning mt-3">
      <div class="form-group py-4 px-3">
        <h4 class="text-center">COTIZAR ESTE VEHÍCULO</h4>
        <div class="row mb-3">
          <div class="col-12 mb-2">
            <input v-model="quote.fullName" type="text" class="form-control" placeholder="Nombre y Apellido">
            <span v-show="missingFullName && attemptQuoteSubmit" class="text-danger false-fields">* Debe ingresar un Nombre vàlido</span>
          </div>
          <div class="col-6">
            <input v-model="quote.phone" type="text" class="form-control" placeholder="Teléfono" />
            <span v-show="missingPhone && attemptQuoteSubmit" class="text-danger false-fields">* Debe ingresar un Teléfono vàlido</span>
          </div>
          <div class="col-6">
            <input v-model="quote.email" type="email" class="form-control" placeholder="E-mail" />
            <span v-show="missingEmail && attemptQuoteSubmit" class="text-danger false-fields">* Debe ingresar un Email vàlido</span>
          </div>
        </div>
        <textarea v-model="quote.message" class="form-control mb-4" name="mensaje" cols="30" rows="2" placeholder="Mensaje"></textarea>
        <div class="form-check pb-2">
          <input id="credit" class="form-check-input" type="checkbox" data-bs-toggle="collapse"
            data-bs-target="#collapse-credito" />
          <label class="form-check-label label-credito pointer" for="credit">
            COTIZA TU CRÉDITO
          </label>
        </div>
        <div id="collapse-credito" class="collapse">
          <input v-model="quote.payment" type="text" class="form-control form-control-sm mb-2" placeholder="Pie" />
          <h6 class="label-credito ms-2">Cuotas</h6>
          <div class="form-check form-check-inline">
            <input @change="selectedQuoteOption(12)" :value="12" :checked="selectedQuote === 12" id="twelve" class="form-check-input pointer" type="checkbox" />
            <label class="form-check-label label-credito pointer" for="twelve">12</label>
          </div>
          <div class="form-check form-check-inline">
            <input @change="selectedQuoteOption(24)" :value="24" :checked="selectedQuote === 24" id="twentyFour" class="form-check-input" type="checkbox" />
            <label class="form-check-label label-credito pointer" for="twentyFour">24</label>
          </div>
          <div class="form-check form-check-inline">
            <input @change="selectedQuoteOption(36)" :value="36" :checked="selectedQuote === 36" id="thirtySix" class="form-check-input" type="checkbox" />
            <label class="form-check-label label-credito pointer" for="thirtySix">36</label>
          </div>
          <div class="form-check form-check-inline">
            <input @change="selectedQuoteOption(48)" :value="48" :checked="selectedQuote === 48" id="fortyEigth" class="form-check-input" type="checkbox" />
            <label class="form-check-label label-credito pointer" for="fortyEigth">48</label>
          </div>
          <div class="form-check form-check-inline pb-2">
            <input @change="selectedQuoteOption(60)" :value="60" :checked="selectedQuote === 60" id="sixty" class="form-check-input" type="checkbox" />
            <label class="form-check-label label-credito pointer" for="sixty">60</label>
          </div>
        </div>
        <div class="form-check pb-2">
          <input class="form-check-input pointer" type="checkbox" data-bs-toggle="collapse" id="payPartCheckbox"
            data-bs-target="#parte-de-pago" />
          <label class="form-check-label label-credito pointer" for="payPartCheckbox">
            DEJA TU AUTO EN PARTE DE PAGO
          </label>
        </div>
        <div id="parte-de-pago" class="collapse">
          <input v-model="quote.payPart" type="text" class="form-control form-control-sm mb-2"
            placeholder="Automóvil, marca, modelo, versión, año, kilometraje, etc" />
        </div>
      </div>
    </div>
    <div class="text-end">
      <button @click="sendForm" class="btn btn-danger px-4 enviar-cotizacion me-3">
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      attemptQuoteSubmit: false,
		  emailRegex: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/,
      selectedQuote: null,
      quote: {
        fullName: '',
        phone: '',
        email: '',
        message: '',
        payment: '',
        twelve: '',
        twentyFour: '',
        thirtySix: '',
        fortyEigth: '',
        sixty: '',
        payPart: '',
        numberPlate: this.numberPlate,
        photo: this.photo,
        price: this.price,
        brand: this.brand,
        model: this.model,
        brand: this.brand,
        version: this.version,
        year: this.year,
        kms: this.kms,

      }
    };
  },
  computed: {
    // ...mapState("mails/quoteForm", ["quote"]),
    missingFullName() {
			return this.quote.fullName === '' || this.quote.fullName.length < 3;
		},
    missingPhone() {
			return this.quote.phone === '' || this.quote.phone.length < 9 || this.quote.phone.length > 11;
		},
    missingEmail() {
			return this.quote.email === '' || !this.emailRegex.test(this.quote.email);
		},
  },
  methods: {
    ...mapActions("mails/quoteForm", ["sendQuotationForm"]),

     async sendForm() {
      this.attemptQuoteSubmit = true;

      if (this.missingFullName || this.missingPhone || this.missingEmail) return;
      // console.log(this.quote)
      // const quote = JSON.parse(JSON.stringify(this.quote));

      // console.log(quote)
      try {
        await this.sendQuotationForm(this.quote);
        
      } catch (error) {
        console.log(error)
      }

    },
    selectedQuoteOption(v) {
      if(this.selectedQuote === v ) this.selectedQuote = null;
      else this.selectedQuote = v;
//       En Vue.js, la directiva v-model permite vincular una variable a un input, de manera que el valor del input se actualiza automáticamente cada vez que la variable cambia y viceversa. En el caso de los checkboxes, v-model permite controlar su estado de marcado/desmarcado.

// Sin embargo, en este caso particular, queremos permitir que solo se seleccione un checkbox a la vez o ninguno. Por lo tanto, no podemos utilizar v-model, ya que vincula los checkboxes de manera que se pueden seleccionar varios de ellos al mismo tiempo.

// Para permitir que solo se seleccione un checkbox a la vez o ninguno, debemos utilizar una variable de datos (selectedOption en este caso) que almacene el valor del checkbox seleccionado. Luego, utilizamos la propiedad :checked para controlar el estado de cada checkbox según el valor de selectedOption.

// En el ejemplo que te proporcioné, utilizamos la propiedad :checked en lugar de v-model para controlar el estado de los checkboxes. La propiedad :checked toma una expresión condicional que evalúa si el valor del checkbox es igual al valor de selectedOption. Si es así, el checkbox se marca; de lo contrario, se desmarca.

// También creamos un método llamado onCheckboxChange que se ejecuta cada vez que se hace clic en un checkbox. Este método verifica si el valor del checkbox seleccionado es igual al valor actual de selectedOption. Si es así, significa que el checkbox se está desmarcando y establecemos selectedOption en null. Si no es así, establecemos selectedOption en el valor del checkbox seleccionado.

// En resumen, al utilizar la propiedad :checked en lugar de v-model y un método de manejo de eventos para actualizar selectedOption, podemos controlar el estado de los checkboxes de manera que solo se seleccione uno a la vez o ninguno.
    }
  },
  props: {
    numberPlate: {
      type: String,
    },
    photo: {
      type: String
    },
    price: {
      type: Number
    },
    brand: {
      type: String
    },
    model: {
      type: String
    },
    brand: {
      type: String
    },
    version: {
      type: String
    },
    year: {
      type: Number
    },
    kms: {
      type: Number
    },
  },
}
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
.label-credito {
  font-size: 0.8125rem;
}
</style>>