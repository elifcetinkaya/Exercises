var longestCommonPrefix = function (strs) {
    let result = "";
    if (strs.length == 1) {
        return strs[0];
    }
    else {
        for (let i = 0; i < strs.length; i++) {
            for (let j = 0; j < strs[i].length; j++) {
                while (strs[i][i] == strs[i + 1][i] && strs[i][j] == strs[i + 2][j]) {
                    j++;
                    result = String(strs).substr(0, j);
                    return result;
                }

            }
        }
    }
    return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))