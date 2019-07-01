import { CarViewModel } from './CarViewModel';

export class DealershipViewModel {
    public Id: number;
    public Address: string;
    public City: string;
    public ZipCode: number;
    public PhoneNumber: string;
    public Stock: CarViewModel [];

    constructor(id: number, address: string, city: string, zipCode: number, phoneNumber: string, stock: CarViewModel []) {
        this.Id = id;
        this.Address = address;
        this.City = city;
        this.ZipCode = zipCode;
        this.PhoneNumber = phoneNumber;
        this.Stock = stock;    
    }
}