const rot13 = str => {
    let decodedMessage = '';
    // turn the string into an array inorder to iterate and decode
    const strArr = str.split('');
    // object of the ROT13 cipher shift
    const cipherShift = {
        A: 'N',
        B: 'O',
        C: 'P',
        D: 'Q',
        E: 'R',
        F: 'S',
        G: 'T',
        H: 'U',
        I: 'V',
        J: 'W',
        K: 'X',
        L: 'Y',
        M: 'Z',
        N: 'A',
        O: 'B',
        P: 'C',
        Q: 'D',
        R: 'E',
        S: 'F',
        T: 'G',
        U: 'H',
        V: 'I',
        W: 'J',
        X: 'K',
        Y: 'L',
        Z: 'M'
    }

    // iterating through the strArr and decoding the str by matching with the keys from the object
    strArr.forEach(letter => {
        // check if its a letter within the object, if it is it exchanges for the correct one, if not its a space or punctuation passing it thru
        if(cipherShift.hasOwnProperty(letter)){
            decodedMessage += cipherShift[letter];
        } else {
            decodedMessage += letter;
        }
    });

    return decodedMessage;
};

rot13('SERR PBQR PNZC');