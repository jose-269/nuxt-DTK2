

export const fillIndexData = (state, payload) => {
  const data = payload;
  if (!data) return;
  state.dataLoader = false;
  state.indexCars = data;
};
export const fillSeminuevosData = (state, payload) => {
  const data = payload;
  if (!data) return;
  state.seminuevosCars = data;
};
export const fillminMaxYears = (state, payload) => {
  const data = payload;
  if (!data) return;
  state.minMaxYears = data;
  state.selectedYears = data;
};

export const fillminMaxPrices = (state, payload) => {
  const data = payload;
  if (!data) return;
  state.minMaxPrices = data;
  state.selectedPrices = data;
};
//OBSERVADOR DE MARCAS
export const brandsObserver = (state, payload) => {
  const carga = payload;
  if (!carga) return;
  state.selectedBrands = carga;
};
// OBSERVADOR DE CATEGORIAS
export const categoriesObserver = (state, payload) => {
  const carga = payload;
  if (!carga) return;
  state.selectedCategories = carga;
};

// OBSERVADOR DE TRANSMISION
export const transmissionsObserver = (state, payload) => {
  const carga = payload;
  if (!carga) return;
  state.selectedTransmisions = carga;
}
//OBSERVADOR DE COMBUSTIBLE
export const fuelsObserver = (state, payload) => {
  const carga = payload;
  if (!carga) return;
  state.selectedFuels = carga;
};
// OBSERVADOR ANOS
export const yearsObserver = (state, payload) => {
  const carga = payload;
  if (!carga) return;
  state.selectedYears = carga;
};
// OBSERVADOR PRECIOS
export const pricesObserver = (state, payload) => {
  const carga = payload;
  if (!carga) return;
  state.selectedPrices = carga;
};
// OBSERVADOR DE ORDEN POR PRECIO
export const sorterByPrices = (state, payload) => {
  const carga = payload;
  if(!carga) return;
  if(carga === "min") {
    const menorMayor = state.seminuevosCars.sort((a, b) => a.VCHPRECIO - b.VCHPRECIO);
    state.seminuevosCars = menorMayor;
  }
  else if(carga === "max") {
    const mayorMenor = state.seminuevosCars.sort((a, b) => b.VCHPRECIO - a.VCHPRECIO);
    state.seminuevosCars = mayorMenor;
  }

  state.sortByPrices = carga;
}
export const setModal = (state, payload) => {
  state.showModal = payload;
};
// export const fillClientData = (state, payload) => {
//   const carga = payload;
//   if (!carga) return;
//   state.clientData = carga;
// };

export const selectedObserver = (state, payload) => {
  const carga = payload;
  if (!carga) return;
  state.comparatorSelector = carga;

};
export const deleteComparatorItem = (state, payload) => {
  const id = payload;
  if (!id) return;
  const removeById = state.comparatorSelector.findIndex(el => el.id === id);
  state.comparatorSelector.splice(removeById, 1)
};

export const deleteAllSelected = (state) => {
  state.comparatorSelector = [];
}

export const setCurrentPage = (state, page) => {
  state.currentPagerNumber = Number(page);
}

export const setItemsPerPage = (state, items) => {
  state.itemsPerPage = items;
}
 