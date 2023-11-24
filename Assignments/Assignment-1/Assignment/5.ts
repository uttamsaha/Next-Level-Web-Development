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