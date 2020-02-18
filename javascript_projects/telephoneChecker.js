const telephoneCheck = str => {
    const phone = str.match(/[0-9]/g);
    const regex = /([1]?)(\(\d{3}\))([ -]?)(\d{3})([ -]?)(\d{4})$/;
    const regex2 = /([1]?)([^(])(\d{3})([^)])([ -]?)(\d{3})([ -]?)(\d{4})$/;
    const regex4 = /^\d{3}([ -]?)\d{3}([ -]?)\d{4}$/;

    if (phone.length < 10 || phone.length > 13 || str.match(/[^- )(0-9]/g)) {
        return false;
    } else if (str.match(regex) || str.match(regex2) || str.match(regex4)) {
        if ((phone.length === 11 && parseInt(str[0]) === 1) || phone.length === 10) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
