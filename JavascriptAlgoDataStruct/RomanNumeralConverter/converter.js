function convertToRoman(num) {

    let newNum = num;

    // Object holds roman numeral values
    const romanValues = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    // String to add roman numerals to
    let returnStr = "";

    // Get array of values for iteration
    let valuesArr = Object.values(romanValues);

    // Iterate values in array
    for (let i = 0; i < valuesArr.length; i++) {
        // While the value can be subtracted and get a difference >= 0
        while (newNum - valuesArr[i] >= 0) {
            // Add the roman numeral character(s) to the return string
            returnStr += Object.keys(romanValues)[i];
            // Subtract the value from the number
            newNum -= valuesArr[i];
        }
    }
    return returnStr;
}

console.log(convertToRoman(36));