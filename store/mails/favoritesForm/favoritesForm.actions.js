import Vue from "vue";
import axios from "axios";
import { generateFavoriteHtml } from "~/utils/favoriteUserMail.js";

export const sendFavoriteForm = async ( { commit }, favorite ) => {
  const url = `${process.env.SEND_MAILS_API}`;

  await commit("setFavoriteForm", favorite);

  const body = {
    "userMail": "jlmv84@gmail.com",
    "subject": "Contacto por: ",
    "htmlForUser": generateFavoriteHtml(favorite),
    "sandboxMode": false,
    "sellerMail": "jose.luis@destacados.cl",
    "textForSeller": "Texto de prueba",
    "htmlForSeller": "<p>Aqui esta la info de automotora.....</p>"
  };
  const headers = {
    'Authorization': `Bearer ${process.env.AUTH}`,
  };
  
  try {

    const cleaner = {};
    
    await axios.post(url, body, { headers: headers });
    // console.log(response);
    await commit("setFavoriteForm", cleaner);
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};





