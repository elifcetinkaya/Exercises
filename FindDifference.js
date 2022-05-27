var findTheDifference = function (s, t) {
    let tempS = s.split("").sort();
    let tempT = t.split("").sort();
    
    for(let i = 0; i < tempT.length; i++){
        if(tempS[i]!=tempT[i]){
            return tempT[i];
        }
    }
};

findTheDifference("abr", "abra");