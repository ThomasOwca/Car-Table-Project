import { Car } from "../Models/Domain Models/Car";

export default class DataOrdering {
    private sortOrderMake: boolean;
    private sortOrderModel: boolean;
    private sortOrderYear: boolean;

    constructor() {
        this.sortOrderMake = false;
        this.sortOrderModel = false;
        this.sortOrderYear = false;
    }

    private swap(cars: Car[], i: number, j: number) {
        var temp = cars[i];
        cars[i] = cars[j];
        cars[j] = temp;
    }
    
    public orderByMake(cars: Car []): Car [] {
        if (this.sortOrderMake) {
            for(let i = 0; i < cars.length; i++) {
                let min = i;
                for(let j = i + 1; j < cars.length; j++) {
                    if(cars[j].Make > cars[min].Make) {
                        min = j;
                    }
                }
                if(i !== min) {
                    this.swap(cars, i, min);
                }
            }
            this.sortOrderMake = !this.sortOrderMake;
        }
        else {
            for(let i = 0; i < cars.length; i++) {
                let min = i;
                for(let j = i + 1; j < cars.length; j++) {
                    if(cars[j].Make < cars[min].Make) {
                        min = j;
                    }
                }
                if(i !== min) {
                    this.swap(cars, i, min);
                }
            }
            this.sortOrderMake = !this.sortOrderMake;
        }

        return cars;
    }

    public orderByModel(cars: Car []): Car [] {
        if (this.sortOrderModel) {
            for(let i = 0; i < cars.length; i++) {
                let min = i;
                for(let j = i + 1; j < cars.length; j++) {
                    if(cars[j].Model > cars[min].Model) {
                        min = j;
                    }
                }
                if(i !== min) {
                    this.swap(cars, i, min);
                }
            }
            this.sortOrderModel = !this.sortOrderModel;
        }
        else {
            for(let i = 0; i < cars.length; i++) {
                let min = i;
                for(let j = i + 1; j < cars.length; j++) {
                    if(cars[j].Model < cars[min].Model) {
                        min = j;
                    }
                }
                if(i !== min) {
                    this.swap(cars, i, min);
                }
            }
            this.sortOrderModel = !this.sortOrderModel;
        }

        return cars;
    }

    public orderByYear(cars: Car []): Car [] {
        if (this.sortOrderYear) {
            for(let i = 0; i < cars.length; i++) {
                let min = i;
                for(let j = i + 1; j < cars.length; j++) {
                    if(cars[j].Year > cars[min].Year) {
                        min = j;
                    }
                }
                if(i !== min) {
                    this.swap(cars, i, min);
                }
            }
            this.sortOrderYear = !this.sortOrderYear;
        }
        else {
            for(let i = 0; i < cars.length; i++) {
                let min = i;
                for(let j = i + 1; j < cars.length; j++) {
                    if(cars[j].Year < cars[min].Year) {
                        min = j;
                    }
                }
                if(i !== min) {
                    this.swap(cars, i, min);
                }
            }
            this.sortOrderYear = !this.sortOrderYear;
        }

        return cars;
    }
}