const findTheOldest = function() {

};

// Do not edit below this line
module.exports = findTheOldest;

function getAge(person) {
    const currentYear = new Date().getFullYear(); //grab current year
    const yearOfDeath = person.yearOfDeath ?? currentYear; //if death use it otherwise current yr
    return yearOfDeath - person.yearOfBirth; //subtract to give age
};