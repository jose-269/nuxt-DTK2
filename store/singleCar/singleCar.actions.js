import axios from "axios";


export const getSingleCar = async({ commit }, payload) => {
  await commit("fillSingleCar", null); 
  await commit("fillSugestedData", null);
  const carga = await payload;
  if (!carga.length) return;
  const req = axios.create({
      baseURL: `${process.env.BASE_URL_API}`,
      headers: {
          Authorization: `Bearer ${process.env.AUTH}`,
        },
      });
      try {
    const response = await req.get(
      `/cars/${carga}`
    );
    // if(!response) return;
    const singleCar = await response.data;
    const sugestedCars = [singleCar.price ,singleCar.autoID];
    singleCar.sugestedInfo = sugestedCars;

    await commit("fillSingleCar", singleCar); 
    await commit("fillSugestedData", sugestedCars);
  } catch (error) {
    console.log(error);
  }
};