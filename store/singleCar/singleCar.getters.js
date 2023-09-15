
export const getSuggestedCars = (state, getters, rootState) =>{
  if(!state.sugestedDataCars) return;
  const minSuggestedPrice = state.sugestedDataCars[0] - 1000000;
  const maxSuggestedPrice = state.sugestedDataCars[0] + 1000000;
  const suggestedCars = rootState.seminuevosCars.seminuevosCars.filter(el => el.VCHPRECIO >= minSuggestedPrice && el.VCHPRECIO <= maxSuggestedPrice);
  const idFilter = suggestedCars.filter(el => el.AUTOID !== state.sugestedDataCars[1]);
  const sugestedSortedCars = idFilter.sort(() => Math.random() - 0.5).slice(0, process.env.SUGERIDOS);
  return sugestedSortedCars;
}
// export const comparadorSeleccion = (state) => {
//   if (state.seleccionados.length > 3) {
//     state.seleccionados.pop();
//     alert("No puede seleccionar más de 3 automóviles");
//   }
//   return state.seleccionados;
// }