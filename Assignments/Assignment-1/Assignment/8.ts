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