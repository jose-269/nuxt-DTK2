
export const setFavoriteForm = (state, form) => {
  if(!form) return;
  state.favoriteForm = form;
};

export const setShowFavoriteForm = (state, payload) => {
  // console.log(payload);
  if(!payload) return;
  state.showFavoriteForm = payload;

};

