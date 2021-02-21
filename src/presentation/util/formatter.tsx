export class Formatter {
    static decimal (number: number){
        return new Intl.NumberFormat().format(number) + '원'
    }
}