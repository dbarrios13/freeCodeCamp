const convertToRoman = num => {
    let romanNum = '';
    const romanArr = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    // loop through the romanArr to check what fits into num 
    for(let i = 0; i < romanArr.length; i++){
        // break the loop when there is no more converting
        if(num === 0) {
            break;
        }

        // checks for an instance where it divides into the num at least one 
        if(1 <= num/romanArr[i][0]){
            // how many times to add specific roman number to string
            const numTimes = Math.floor(num/romanArr[i][0]);

            // changing the num to the remainder
            num -= (romanArr[i][0] * numTimes);

            // adding the roman number into string based on numTimes
            for(let y = 0; y < numTimes; y++){
                romanNum += romanArr[i][1];
            };

        } else {
            // continue if that instance of romanArr does not fit into number
            continue;
        }
    };

    // return converted roman number
    return romanNum;
}

convertToRoman(798);