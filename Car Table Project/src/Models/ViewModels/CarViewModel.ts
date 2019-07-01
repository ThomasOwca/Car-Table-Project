export class CarViewModel {
    public Model : string;
    public Make : string;
    public Year: number;
    public Price: number;

    constructor(model: string, make: string, year: number, price: number) {
        this.Model = model;
        this.Make = make;
        this.Year = year;
        this.Price = price;
    }
}