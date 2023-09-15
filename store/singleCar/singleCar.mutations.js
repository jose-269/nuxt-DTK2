export const fillSingleCar = (state, payload) => {
  const carga = payload;
  // if(!carga) return;
  state.singleCar = carga;
};
export const fillSugestedData = (state, payload) => {
  const carga = payload;
  state.sugestedDataCars = carga;
};