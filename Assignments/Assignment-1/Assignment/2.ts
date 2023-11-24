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