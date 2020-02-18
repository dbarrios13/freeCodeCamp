const telephoneCheck = str => {
    const phone = str.match(/[0-9()]/g);
    const regex = /([1]?)(\(\d{3}\))([ -]?)(\d{3})([ -]?)(\d{4})$/;
    const regex2 = /([1]?)([^(])(\d{3})([^)])([ -]?)(\d{3})([ -]?)(\d{4})$/;
    const regex3 = /^([1])([^(])(\d{3})([^)])([ -]?)(\d{3})([ -]?)(\d{4})$/;
    console.log(str.match(regex3))
    if (phone.length < 10 || phone.length > 13 || str.match(/[^- )(0-9]/g)) {
        return false;
    } else if (str.match(regex) || str.match(regex2)) {

    } else {    
        return false;
    }
};

// telephoneCheck('555-555-5555')
// telephoneCheck('(555) 555 5555')
telephoneCheck('1 (555) 555 5555')
telephoneCheck('2 (555) 555 5555')
telephoneCheck('1 (555 555 5555')
telephoneCheck('(555 555 5555)')