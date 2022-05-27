var addTwoNumbers = function(l1, l2) {
    let result;
    let temp1 = l1.split('').reverse();
    let temp2 = l2.split('').reverse();
    const  x = +temp1.join("");
    const  y = +temp2.join("");
    result = (x+y).toString().split("").reverse();
    return result
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))