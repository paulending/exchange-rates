
export interface CurrencyRates {
    date: string;
    number: number;
    headers: string[];
    rates: any[]; // type any because properties names are parsed from data
}