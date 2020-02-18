const palindrome = str => {
    const newStr = str.match(/[a-z0-9]/gi).join('').toLowerCase();
    const reverseStr = str.match(/[a-z0-9]/gi).reverse().join('').toLowerCase();

    if (newStr === reverseStr) {
        return true;
    } else {
        return false;
    }
}

