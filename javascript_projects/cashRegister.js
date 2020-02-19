const checkCashRegister = (price, cash, cid) => {
    // reverse the array to match our currency arr to prevent issues when it comes to checking for changeDue
    cid.reverse();
    // currency 
    const currencyArr = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01],
    ];
    // results object
    const result = {
        status: '',
        change: []
    }
    // get the exact change that is due
    let changeDue = Math.round((cash - price) * 1e2) / 1e2;
    // get the total amount inside the drawer
    let totalCashInDrawer = 0;

    cid.forEach(element => {
        totalCashInDrawer = Math.round((totalCashInDrawer + element[1]) * 1e2) / 1e2;
    });

    // check if the total cash is less than the change due return status insufficient funds if true
    if (totalCashInDrawer < changeDue) {
        result.status = 'INSUFFICIENT_FUNDS';
        return result;
    } else if (totalCashInDrawer === changeDue) {
        // check if the total cash is equal to the change due return status closed and change
        result.status = 'CLOSED';
        result.change = cid.reverse();
        return result;
    } else {
        // otherwise return status object of open and amount of change is due in highest to lowest amount
        result.status = 'OPEN';

        // iterate through the currency array as well cid and get the current change and update cid
        for (let i = 0; i < currencyArr.length; i++) {
            if (changeDue === 0) {
                break;
            } else if (Math.floor(changeDue / currencyArr[i][1]) >= 1) {
                // calculate how many times at the currrent currency in the array can go into the remaining change due
                const countCur = Math.floor(changeDue / currencyArr[i][1]) * currencyArr[i][1];
                // check if the amount countCur is larger than what is inside the drawer if so return what in the drawer for the current currency
                if (cid[i][1] === 0) {
                    continue;
                } else if (countCur > cid[i][1]) {
                    result.change.push([currencyArr[i][0], cid[i][1]])
                    // substract the amount that is being put into the change result from the remaining amount that is due, because we dealing with decimals we have to round and use e
                    changeDue = Math.round((changeDue - cid[i][1]) * 1e2) / 1e2;
                } else {
                    result.change.push([currencyArr[i][0], countCur])
                    changeDue = Math.round((changeDue - countCur) * 1e2) / 1e2;
                }
            } else {
                continue;
            }
        }

        if (changeDue > 0) {
            result.status = 'INSUFFICIENT_FUNDS';
            result.change = [];
            return result;
        }

        return result;
    }
};

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])