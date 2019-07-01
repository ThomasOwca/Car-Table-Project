export class Car {
    public Model : string;
    public Make : string;
    public Year: number;

    constructor(model: string, make: string, year: number) {
        this.Model = model;
        this.Make = make;
        this.Year = year;
    }
}