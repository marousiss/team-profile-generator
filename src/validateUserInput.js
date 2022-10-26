// function to check for a valid name
function valName(name) {
    const valid = /[a-z]/gi.test(name);
    if (valid) {
        return true;
    } else {
        console.log(" - Please enter a valid name.");
        return false;
    }
}

//function to check ID for numeric characters
function valId(id) {
    const valid = /[0-9]/gi.test(id);
    if (valid) {
        return true;
    } else {
        console.log(" - ID must be numeric. Please enter a valid Id.");
        return false;
    }
}

//function to validate email
function valEmail(email) {
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (valid) {
        return true;
    } else {
        console.log(" - Please enter a valid email");
        return false;
    }
}

//function to check office number to be of numeric charachers
function valOfficeNumber(offNum) {
    const valid = /[0-9]/gi.test(offNum);
    if (valid) {
        return true;
    } else {
        console.log(" - Office Number must be numeric. Please enter a valid Office Number.");
            return false;
    }
}

function valGitHub(github) {
    if (github) {
        return true;
    } else {
        console.log(" - Please enter a value");
        return false;
    }
}

function valSchool(school) {
    if (school) {
        return true;
    } else {
        console.log(" - Please enter a value");
        return false;
    }
}

module.exports = {
    valName,
    valId,
    valEmail,
    valOfficeNumber,
    valGitHub,
    valSchool,
}





