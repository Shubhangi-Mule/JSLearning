class Vehicle{
    constructor(Name, No, color, price, speed ){
        this.Name=Name;
        this.No=No;
        this.color=color;
        this.price=price;
        this.speed=speed;
    }
    show(){
        console.log('Vehicle details is Name : ${this.Name}, No :${this.No}, color:${this.color}, price:${this.price},speed:${this.speed}');
    }
}
let vehicle1 = new Vehicle("astor", 1122, "black", 1200000, 200);

let vehicle2 = new Vehicle("Zest", 1133, "black", 1200000, 200);
let vehicle3 = new Vehicle("Hector", 1144, "red", 12000, 200);
let vehicle4 = new Vehicle("Swift", 1155, "blue", 1200, 200);
let vehicle5 = new Vehicle("Duster", 1166, "white", 120000, 200);

const arrayOfVehicle = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];
  console.log(`Traversing array`);
  for (const vehicle of arrayOfVehicle) {
      vehicle.show();
  }
  