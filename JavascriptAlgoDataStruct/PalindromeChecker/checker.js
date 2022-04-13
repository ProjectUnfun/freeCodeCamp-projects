function palindrome(str) {
    // Copy of arg to prevent mutation
    let newStr = str.slice();

    // Convert to lower case & remove non-alphanumeric characters
    newStr = newStr.toLowerCase();
    newStr = newStr.replace(/\W/g, "");
    newStr = newStr.replace(/_/g, "");

    // Convert string into array for comparison
    let arr = newStr.split("");

    // Compare arr elements for equality
    for (let i = 0; i <= arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("1 eye for of 1 eye."));