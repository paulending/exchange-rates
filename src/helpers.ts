import { TCurrencyRates, TRate } from "./Types/App";

/**
 * Parse date, rates number in year and particular currency rates from string
 * @param data 
 * @returns 
 */
export const parseDataObject = (data: string): TCurrencyRates => {
    const rows = data.trim().split('\n');

    const date = rows[0].split(' ')[0] ?? '';
    const number = Number(rows[0].split('#')[1]);
    const headers = rows[1].split('|');
    let rates: TRate[] = [];

    for (var i = 2; i < rows.length; i++) {
        const splitRow = rows[i].split('|');
        let obj: any = {};

        for (var j = 0; j < splitRow.length; j++) {
            const key = removeDiacritics(headers[j].trim());
            let value: any = splitRow[j].trim();
            if (key === 'mnozstvi') value = parseInt(splitRow[j].trim());
            if (key === 'kurz') value = parseFloat(splitRow[j].trim().replace(',', '.'));

            obj[key] = value;
        }

        rates.push(obj);
    }

    return { date, number, headers, rates };
}

/**
 * Remove diacritics and lowercase the string - https://github.com/mkrcek/odstraneni-diakritiky/blob/master/removeDiacritics.js
 * @param inputText 
 * @returns 
 */
export const removeDiacritics = (inputText: string) => {
    var r = inputText.toLowerCase();
    r = r.replace(new RegExp(/\s/g), "-");
    r = r.replace(new RegExp(/[àáâãäå]/g), "a");
    r = r.replace(new RegExp(/[æ]/g), "ae");
    r = r.replace(new RegExp(/[çč]/g), "c");
    r = r.replace(new RegExp(/[ď]/g), "d");
    r = r.replace(new RegExp(/[èéêëě]/g), "e");
    r = r.replace(new RegExp(/[ìíîï]/g), "i");
    r = r.replace(new RegExp(/[ñň]/g), "n");
    r = r.replace(new RegExp(/[òóôõö]/g), "o");
    r = r.replace(new RegExp(/[œ]/g), "oe");
    r = r.replace(new RegExp(/[ř]/g), "r");
    r = r.replace(new RegExp(/[š]/g), "s");
    r = r.replace(new RegExp(/[ť]/g), "t");
    r = r.replace(new RegExp(/[ůùúûü]/g), "u");
    r = r.replace(new RegExp(/[ýÿ]/g), "y");
    r = r.replace(new RegExp(/[ž]/g), "z");
    return r;
}

/**
 * Parse czech date format
 * @param date 
 */
export const parseDate = (date?: string): { day: number, month: number, year: number } => {
    if (!date) return { day: 0, month: 0, year: 0 };

    const d = date.split('.');

    return { day: parseInt(d[0]), month: parseInt(d[1]) - 1, year: parseInt(d[2]) };
}