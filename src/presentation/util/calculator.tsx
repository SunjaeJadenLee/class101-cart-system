export class Calculator {
    static getRatedValue = (rate:number,value: number) => {
        return ( 100 - rate ) / 100 * value;
    } 

    static getSubstractedValue = (amount: number, value: number) => {
        return (value - amount);
    }
}