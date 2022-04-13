function telephoneCheck(str) {
    // Copy argument to prevent mutation
    let newStr = str.slice();

    // Check for valid formats with regex
    // 555-555-5555
    if (!newStr.search(/^\d{3}-\d{3}-\d{4}$/)) {
        return true;
    }
    // (555)555-5555
    else if (!newStr.search(/^\(\d{3}\)\d{3}-\d{4}$/)) {
        return true;
    }
    // (555) 555-5555
    else if (!newStr.search(/^\(\d{3}\) \d{3}-\d{4}$/)) {
        return true;
    }
    // 555 555 5555
    else if (!newStr.search(/^\d{3} \d{3} \d{4}$/)) {
        return true;
    }
    // 5555555555
    else if (!newStr.search(/^\d{10}$/)) {
        return true;
    }
    // 1 555 555 5555
    else if (!newStr.search(/^\d \d{3} \d{3} \d{4}$/)) {
        let temp = newStr.slice(0, 1);
        if (temp == 1) return true;
        else return false;
    }
    // 1 555-555-5555
    else if (!newStr.search(/^\d \d{3}-\d{3}-\d{4}$/)) {
        let temp = newStr.slice(0, 1);
        if (temp == 1) return true;
        else return false;
    }
    // 1 (555) 555-5555
    else if (!newStr.search(/^\d \(\d{3}\) \d{3}-\d{4}$/)) {
        let temp = newStr.slice(0, 1);
        if (temp == 1) return true;
        else return false;
    }
    // 1(555)555-5555
    else if (!newStr.search(/^\d\(\d{3}\)\d{3}-\d{4}$/)) {
        let temp = newStr.slice(0, 1);
        if (temp == 1) return true;
        else return false;
    }
    // 15555555555
    else if (!newStr.search(/^\d{11}$/)) {
        let temp = newStr.slice(0, 1);
        if (temp == 1) return true;
        else return false;
    }
    // No match
    else {
        return false;
    }
}

console.log(telephoneCheck("15555555555"));