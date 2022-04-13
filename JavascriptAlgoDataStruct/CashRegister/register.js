function checkCashRegister(price, cash, cid) {
    // Copy array to prevent mutation
    let newArr = cid.slice();
    // Object for returning results
    let obj = {};
    // Amount due back to customer
    let changeDue = cash - price;
    console.log(`changeDue = ${changeDue}`);
    // Array for tracking what change was given
    let change = [];
    // Track number of times a value was removed from changeDue
    let counter = 0;

    // Handle 100s
    while (changeDue - 100 >= 0) {
        if (newArr[newArr.length - 1][1] == 0) break;
        newArr[newArr.length - 1][1] -= 100;
        counter++;
        changeDue -= 100;
        changeDue = changeDue.toFixed(2);
    }
    if (counter != 0) {
        change.push([
            cid[cid.length - 1][0],
            100 * counter
        ]);
    }
    // console.log(`change array = ${change}`);
    // console.log(`100s still due = ${changeDue}`);


    // Handle 20s
    counter = 0;
    while (changeDue - 20 >= 0) {
        if (newArr[newArr.length - 2][1] == 0) break;
        newArr[newArr.length - 2][1] -= 20;
        counter++;
        changeDue -= 20;
        changeDue = changeDue.toFixed(2);
    }
    if (counter != 0) {
        change.push([
            cid[cid.length - 2][0],
            20 * counter
        ]);
    }
    // console.log(`change array = ${change}`);
    // console.log(`20s still due = ${changeDue}`);

    // Handle 10s
    counter = 0;
    while (changeDue - 10 >= 0) {
        if (newArr[newArr.length - 3][1] == 0) break;
        newArr[newArr.length - 3][1] -= 10;
        counter++;
        changeDue -= 10;
        changeDue = changeDue.toFixed(2);
    }
    if (counter != 0) {
        change.push([
            cid[cid.length - 3][0],
            10 * counter
        ]);
    }
    // console.log(`change array = ${change}`);
    // console.log(`change still due = ${changeDue}`);

    // Handle 5s
    counter = 0;
    while (changeDue - 5 >= 0) {
        if (newArr[newArr.length - 4][1] == 0) break;
        newArr[newArr.length - 4][1] -= 5;
        counter++;
        changeDue -= 5;
        changeDue = changeDue.toFixed(2);
    }
    if (counter != 0) {
        change.push([
            cid[cid.length - 4][0],
            5 * counter
        ]);
    }
    // console.log(`change array = ${change}`);
    // console.log(`change still due = ${changeDue}`);

    // Handle 1s
    counter = 0;
    while (changeDue - 1 >= 0) {
        if (newArr[newArr.length - 5][1] == 0) break;
        newArr[newArr.length - 5][1] -= 1;
        counter++;
        changeDue -= 1;
        changeDue = changeDue.toFixed(2);
    }
    if (counter != 0) {
        change.push([
            cid[cid.length - 5][0],
            1 * counter
        ]);
    }
    // console.log(`change array = ${change}`);
    // console.log(`change still due = ${changeDue}`);

    // Handle quarters
    counter = 0;
    while (changeDue - 0.25 >= 0) {
        if (newArr[newArr.length - 6][1] == 0) break;
        newArr[newArr.length - 6][1] -= 0.25;
        counter++;
        changeDue -= 0.25;
        changeDue = changeDue.toFixed(2);
    }
    if (counter != 0) {
        change.push([
            cid[cid.length - 6][0],
            0.25 * counter
        ]);
    }
    // console.log(`change array = ${change}`);
    // console.log(`change still due = ${changeDue}`);

    // Handle dimes
    counter = 0;
    while (changeDue - 0.1 >= 0) {
        if (newArr[newArr.length - 7][1] == 0) break;
        newArr[newArr.length - 7][1] -= 0.1;
        counter++;
        changeDue -= 0.1;
        changeDue = changeDue.toFixed(2);
    }
    if (counter != 0) {
        change.push([
            cid[cid.length - 7][0],
            0.1 * counter
        ]);
    }
    // console.log(`change array = ${change}`);
    // console.log(`change still due = ${changeDue}`);

    // Handle nickels
    counter = 0;
    while (changeDue - 0.05 >= 0) {
        if (newArr[newArr.length - 8][1] == 0) break;
        newArr[newArr.length - 8][1] -= 0.05;
        counter++;
        changeDue -= 0.05;
        changeDue = changeDue.toFixed(2);
    }
    if (counter != 0) {
        change.push([
            cid[cid.length - 8][0],
            0.05 * counter
        ]);
    }
    // console.log(`change array = ${change}`);
    // console.log(`change still due = ${changeDue}`);

    // Handle pennies
    counter = 0;
    while (changeDue - 0.01 >= 0) {
        if (newArr[newArr.length - 9][1] == 0) break;
        newArr[newArr.length - 9][1] -= 0.01;
        counter++;
        changeDue -= 0.01;
        changeDue = changeDue.toFixed(2);
    }
    if (counter != 0) {
        change.push([
            cid[cid.length - 9][0],
            0.01 * counter
        ]);
    }
    console.log(`change array = ${change}`);
    console.log(`change still due = ${changeDue}`);

    // Validate results
    // Check if all change is zeroed out
    let allZeroes = true;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i][1] <= 0) continue;
        else allZeroes = false;
    }
    // If there is still change and changeDue has been taken
    if (!allZeroes && changeDue <= 0) {
        obj.status = "OPEN";
        obj.change = [...change];
    }
    // If there is no change and change due has been taken
    else if (allZeroes && changeDue <= 0) {
        let temp = [...change[0]];
        for (let i = 0; i < newArr.length; i++) {
            change.unshift([
                cid[cid.length - (i + 1)][0],
                0
            ]);
        }
        change.shift();
        change.pop();
        change.unshift(temp)
        obj.status = "CLOSED";
        obj.change = [...change];
    }
    // Cannot make change
    else {
        obj.status = "INSUFFICIENT_FUNDS";
        obj.change = [];
    }

    return obj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));