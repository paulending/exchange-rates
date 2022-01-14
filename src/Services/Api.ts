import axios from "axios";
import { parseDataObject } from "../helpers";

export const getCurrencyRates = async () => {
    const response = await axios({
        url: `https://api.allorigins.win/get?url=${encodeURIComponent('http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt')}`,
        method: 'get',
    });
    
    if (response.status === 200) return parseDataObject(response.data.contents);

    throw new Error('Currency rates fetching failed.');
}