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