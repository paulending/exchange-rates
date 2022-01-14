export type TRate = {
    zeme: string;
    mena: string;
    mnozstvi: number;
    kod: string;
    kurz: number;
}
export interface TCurrencyRates {
    date: string;
    number: number;
    headers: string[];
    rates: Rate[];
}