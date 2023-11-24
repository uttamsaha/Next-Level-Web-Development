
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
