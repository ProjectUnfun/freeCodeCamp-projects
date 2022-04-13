function rot13(str) {
    // Copy argument to prevent mutation
    let newStr = str.slice();

    // Create string for return value
    let returnStr = "";

    // Create array of alphabet
    const charArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
        "Y", "Z"];

    // Split string into array of characters
    newStr = newStr.split("");

    // Iterate array of characters
    for (let i = 0; i < newStr.length; i++) {
        // Ignore conversion when value character is not a letter
        if (!newStr[i].search(/[^a-zA-Z]/) || !newStr[i].search(/ /)) {
            returnStr += newStr[i];
        }
        // Convert characters
        else {
            // Get the index of the current character
            let charIndex = charArr.indexOf(newStr[i]);
            // Convert index
            charIndex += 13;
            // Validate index wrapping
            if (charIndex >= charArr.length) {
                charIndex -= charArr.length;
            }
            // Add converted letter to return string
            returnStr += charArr[charIndex];
        }
    }
    return returnStr;
}

console.log(rot13("SERR PBQR PNZC"));