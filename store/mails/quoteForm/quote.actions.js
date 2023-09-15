
import axios from "axios";
import { generateQuotationSellerHtml } from "~/utils/quotationSellerMail.js";

export const sendQuotationForm = async ( { commit }, quotation ) => {

  const url = `${process.env.SEND_MAILS_API}`;
  
  commit('');
  
  
  try {
    const html = generateQuotationSellerHtml(quotation);
    console.log( await quotation)
    const body = {
      "userMail": "jlmv84@gmail.com",
      "subject": "Contacto por: ",
      "htmlForUser": html,
      "sandboxMode": false,
      "sellerMail": "jose.luis@destacados.cl",
      "textForSeller": "Texto de prueba",
      "htmlForSeller": html
    };
    const headers = {
      'Authorization': `Bearer ${process.env.AUTH}`,
    };

    await axios.post(url, body, { headers: headers });

    
  } catch (error) {
    console.log(error);
  }




}