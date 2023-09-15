export const getFiltrosLateral = (state) => {
    // CATEGORIA MARCA TRANSMISION COMBUSTIBLE
    if (
      state.selectedCategories.length &&
      state.selectedBrands.length &&
      state.selectedTransmisions.length &&
      state.selectedFuels.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // CATEGORIA MARCA TRANSMISION
    else if (
      state.selectedCategories.length &&
      state.selectedBrands.length &&
      state.selectedTransmisions.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // CATEGORIA MARCA COMBUSTIBLE
    else if (
      state.selectedCategories.length &&
      state.selectedBrands.length &&
      state.selectedFuels.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    //CATEGORIA TRANSMISION COMBUSTIBLE
    else if (
      state.selectedCategories.length &&
      state.selectedTransmisions.length &&
      state.selectedFuels.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // MARCA TRANSMISION COMBUSTIBLE
    else if (
      state.selectedBrands.length &&
      state.selectedTransmisions.length &&
      state.selectedFuels.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // CATEGORIA Y MARCAS
    else if (state.selectedCategories.length && state.selectedBrands.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // CATEGORIAS Y TRANSMISION
    else if (
      state.selectedCategories.length &&
      state.selectedTransmisions.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // CATEGORIAS Y COMBUSTIBLE
    else if (state.selectedCategories.length && state.selectedFuels.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // MARCAS Y TRANSMISION
    else if (state.selectedBrands.length && state.selectedTransmisions.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
      // MARCAS Y COMBUSTIBLE
    else if (state.selectedBrands.length && state.selectedFuels.length) return state.seminuevosCars.filter(
      (obj) =>
        state.selectedBrands.includes(obj.MARCA) &&
        state.selectedFuels.includes(obj.COMBUSTIBLE) &&
        state.selectedYears[0] <= obj.INTANO &&
        state.selectedYears[1] >= obj.INTANO &&
        state.selectedPrices[0] <= obj.VCHPRECIO &&
        state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // TRANSMISION Y COMBUSTIBLE
    else if (state.selectedTransmisions.length && state.selectedFuels.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    
    // SOLO CATEGORIAS
    else if (state.selectedCategories.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedCategories.includes(obj.CATEGORIAID) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // SOLO MARCAS
    else if (state.selectedBrands.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedBrands.includes(obj.MARCA) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // SOLO TRANSMISION
    else if (state.selectedTransmisions.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedTransmisions.includes(obj.TRANSMISION.replace("Transmisión ", "")) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // SOLO COMBUSTIBLE
    else if (state.selectedFuels.length)
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedFuels.includes(obj.COMBUSTIBLE) &&
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      );
    // SOLO ANIOS Y PRECIO
    else if (
      !state.selectedFuels.length &&
      !state.selectedTransmisions.length &&
      !state.selectedBrands.length &&
      !state.selectedCategories.length
    )
      return state.seminuevosCars.filter(
        (obj) =>
          state.selectedYears[0] <= obj.INTANO &&
          state.selectedYears[1] >= obj.INTANO &&
          state.selectedPrices[0] <= obj.VCHPRECIO &&
          state.selectedPrices[1] >= obj.VCHPRECIO
      )
    else return state.seminuevosCars;
  };

  /***  CATEGORIAS  ***/
  export const itemsCategorias = (state) => {
    const categorias = state.seminuevosCars
      .map((el) => el.CATEGORIAID)
      .filter((categoria, i, arr) => arr.indexOf(categoria) === i);
    return categorias;
  }
  /***  MARCAS  ***/
  export const brandsItems = (state) => {
    const marcas = state.seminuevosCars
      .map((el) => el.MARCA)
      .filter((marca, i, arr) => arr.indexOf(marca) === i);
    return marcas;
  }
  /***  TRANSMISIONES  ***/
  export const itemsTransmision = (state) => {
    const transmissionNameReplaced = state.seminuevosCars
      .map((el) => el.TRANSMISION.replace("Transmisión ", ""))
      .filter((transmission, i, arr) => arr.indexOf(transmission) === i);
    return transmissionNameReplaced;
  }
  /***  COMBUSTIBLES  ***/
  export const itemsCombustible = (state) => {
    const fuels = state.seminuevosCars
      .map((el) => el.COMBUSTIBLE)
      .filter((combustible, i, arr) => arr.indexOf(combustible) === i);
    return fuels;
  }
  /***  AÑOS  ***/
  export const itemsAnios = (state) => {
    const anios = state.seminuevosCars
      .map((el) => el.INTANO)
      .filter((anio, i, arr) => arr.indexOf(anio) === i);
    return anios;
  };
  export const yearsItems = (state) => {
    let arr = [];
    const anios = state.seminuevosCars
      .map((el) => el.INTANO)
      .filter((anio, i, arr) => arr.indexOf(anio) === i);
    const min = Math.min.apply(null, anios) || 0;
    const max = Math.max.apply(null, anios) || 0;
    arr.push(min);
    arr.push(max);
    return arr;
  };
  export const getSuggestedCars = (state) =>{
    if(!state.sugestedDataCars) return;
    const minSuggestedPrice = state.sugestedDataCars[0] - 1000000;
    const maxSuggestedPrice = state.sugestedDataCars[0] + 1000000;
    const suggestedCars = state.seminuevosCars.filter(el => el.VCHPRECIO >= minSuggestedPrice && el.VCHPRECIO <= maxSuggestedPrice);
    const idFilter = suggestedCars.filter(el => el.AUTOID !== state.sugestedDataCars[1]);
    const sugestedSortedCars = idFilter.sort(() => Math.random() - 0.5).slice(0, );
    return sugestedSortedCars;
  }
  export const selectedToCompare = (state) => {
    if (state.comparatorSelector.length > 3) {
      // state.comparatorSelector.pop();
      alert("No puede seleccionar más de 3 automóviles");
    }
    return state.comparatorSelector;
  }