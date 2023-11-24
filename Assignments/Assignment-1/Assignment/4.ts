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