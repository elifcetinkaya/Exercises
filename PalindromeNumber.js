var isPalindrome = function (x) {
    let arr = x.toString().split('');
    return (arr.toString() == arr.reverse().toString())

};

(isPalindrome(234));