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