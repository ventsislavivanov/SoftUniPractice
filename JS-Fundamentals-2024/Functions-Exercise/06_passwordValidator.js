function solve(password) {
    function checkIsValidLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        }

        console.log("Password must be between 6 and 10 characters");
        return false;
    }

    function checkIsAlphaNumeric(pass) {
        const pattern = /^[A-Za-z0-9]+$/;
        if (pattern.test(pass)) {
            return true;
        }

        console.log("Password must consist only of letters and digits");
        return false;
    }

    function checkIsMin2Digits(pass) {
        const pattern = /[0-9]{2,}/;
        if (pattern.test(pass)) {
            return true;
        }

        console.log("Password must have at least 2 digits");
        return false;
    }

    const isValidLength = checkIsValidLength(password);
    const isAlphaNumeric = checkIsAlphaNumeric(password);
    const isMin2Digits = checkIsMin2Digits(password);

    if (isValidLength && isAlphaNumeric && isMin2Digits) {
        console.log("Password is valid");
    }
}

// solve('logIn');
solve('Pa$s$s')