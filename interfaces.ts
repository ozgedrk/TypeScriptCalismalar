interface Product {
    id: number;
    name: string;
    unitPrice: number;
    save():void;
}
class Product2 {
    id: number;
    name: string;
    unitPrice: number;

    constructor() {
        this.id = 0; // Varsayılan değerlerle başlatıyoruz.
        this.name = "";
        this.unitPrice = 0;
    }
    save(): void {
        console.log(this.name + " Kaydedildi!");
    }
}
function save(product: Product): void {
    console.log(product.name + " Kaydedildi!")
}
function save2(product2: Product2): void {
    console.log(product2.name + " Kaydedildi!")
}
save({id: 1, name: "Laptop", unitPrice: 10, save: function (): void {}})

let mouse = new Product2()
mouse.name = "ATech"

save(mouse)


interface PersonService {

}

class CustomerService implements PersonService {
    save() {

    }
}