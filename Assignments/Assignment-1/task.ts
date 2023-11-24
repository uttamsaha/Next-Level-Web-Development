//Problem-1
const number = (param: string | number) : string | number => {
    if(typeof param === 'number'){
        return param*param;
    } 
    else if(typeof param === 'string') {
        return param.length;
    } else {
        return "Wrong input";
    }
}
const res1 = number("string");
const res2 = number(5);


//Problem-2
interface Person {
    address?: {
        city: string;
        street: string;
    }
    phone?: string;
}

const getAddressCity = (input: Person) : string | undefined => {
    return input?.address?.city;
}
const person : Person = {
    address: {
        city: "Dhaka",
        street: "Mohakhali Amtoli"
    },
    phone: '017'
}
const result = getAddressCity(person);

//Problem-3
class Cat {
    constructor(public name : string, public species : string){
    }
}

const isCat = (cat : Cat) : string => {
    if(cat instanceof Cat){
        return "yes, it's a cat."
    } else {
        return "no, it's not a cat"
    }
}
const cat1 = new Cat("Cat","Deshi");
isCat(cat1);


//Problem-4
function addNumbers(mixedData: (number | string)[]): number {
    let sum = 0;
    mixedData.forEach(item => {
        if(typeof item === 'number'){
            sum = sum+item as number;
        }
    })

    if(sum==0){
        return 0;
    }
    return sum;
  }
  
  const mixedData: (number | string)[] = [1, 'two', 3, 'four', 5];
  const addingResult = addNumbers(mixedData);

//Problem-5
  interface Car {
    make: string;
    model: string;
    year: number;
}

interface Driver {
    name: string;
    licenseNumber: string;
}
const combineObject = (car: Car, driver: Driver) => {
    return {car, driver}
}
const car1 : Car = {
    make: "Toyota",
    model: "rz5",
    year: 2020
}

const driver1 : Driver = {
    name: "Uttam Saha",
    licenseNumber: "1215251252225"
}
const result3 = combineObject(car1, driver1);


//Problem-6
const arrayOfNumberFinder = (type: unknown)  => {

    let result : number = 0;
    if( Array.isArray(type) && type?.every(item => typeof item === 'number')){
        type.forEach(item => result+=item);
        console.log(result);
    } else {
        console.log("Please input number array");
    }
}

const result4 = [1,3,5,6,7];
arrayOfNumberFinder(result4);

//Problem-8
interface Product {
    name: string;
    price: number;
    quantity: number;
}
function getTotalCost(cart: Product[]): number {
    let totalCost = 0;
    cart.forEach(product => totalCost += product.price * product.quantity)
    return totalCost;
  }

const products : Product[] = [
    {
        name: "I phone 14",
        price: 200,
        quantity: 2
    },
    {
        name: "Apple watch",
        price: 1000,
        quantity: 4
    },
    {
        name: "Macbook pro",
        price: 2000,
        quantity: 1
    }
]

const totalCost = getTotalCost(products);