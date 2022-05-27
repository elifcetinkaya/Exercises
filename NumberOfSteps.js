var numberOfSteps  = function(num) {
    let counter = 0
    for (; num; counter++)
        if (num % 2){
            num = num - 1;
        }
        else{
            num = num / 2;
        }
    return counter
};

console.log(numberOfSteps(123));