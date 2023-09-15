  import axios from "axios";

  export const getData = async ({ commit }) => {
    const req = axios.create({
      baseURL: `${process.env.BASE_URL_API}`,
      headers: {
        Authorization: `Bearer ${process.env.AUTH}`,
      },
    });
    try {
      const pageSizeResponse = await req.get(
        `/carDealers/stock/total?CLIENTEID=${process.env.CLIENT_ID}&TABLA=${process.env.TABLA}`
      );
      const totalCarNumber = await pageSizeResponse.data[0].TOTAL;
      if(!totalCarNumber) return;
      const response = await req.get(
        `/carDealers/stock?CLIENTEID=${process.env.CLIENT_ID}&TABLA=${process.env.TABLA}&PageNumber=1&PageSize=${totalCarNumber}`
      );

      // All Data
      const roughData = response.data;
      const sortAlphabetically = roughData.map(el => el).sort((a ,b) => a.MARCA.localeCompare(b.MARCA));
      //Min Max years
      let minMaxyearsArr = [];
      const minMaxYears = roughData
        .map((obj) => obj.INTANO)
        .filter((el, i, arr) => arr.indexOf(el) === i);
      const min = Math.min.apply(Math, minMaxYears);
      minMaxyearsArr.push(min);
      const max = Math.max.apply(Math, minMaxYears);
      minMaxyearsArr.push(max);
      commit("fillminMaxYears", minMaxyearsArr);
      // Min Max Prices
      let minMaxPricesArr = [];
      const minMaxPrices = roughData
        .map((obj) => obj.VCHPRECIO)
        .filter((el, i, arr) => arr.indexOf(el) === i);
      const minPrice = Math.min.apply(Math, minMaxPrices);
      minMaxPricesArr.push(minPrice);
      const maxPrice = Math.max.apply(Math, minMaxPrices);
      minMaxPricesArr.push(maxPrice);
      commit("fillminMaxPrices", minMaxPricesArr);
      // Index data
      const indexData = roughData.sort(() => Math.random() - 0.5).slice(0, 6);

      commit("fillIndexData", indexData);
      //Seminuevos data
      commit("fillSeminuevosData", sortAlphabetically);
    } catch (error) {
      console.log(error);
    }
  };
// export const getClientData = async({ commit }) => {
//   const req = axios.create({
//     baseURL:  `${process.env.BASE_URL_API}`,
//     headers: {
//       Authorization: `Bearer ${process.env.AUTH}`,
//     },
//   });
//   try {
//     const response = await req.get(`/client?CLIENTEID=${process.env.CLIENT_ID}&TABLA=${process.env.TABLA}`);
//     const client = response.data[0];
//     console.log(client);
//     commit("fillClientData", client);
//   } catch (error) {
//     console.log(error);
//   }
// }