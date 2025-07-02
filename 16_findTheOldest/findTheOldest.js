function getAge(person) {
    const currentYear = new Date().getFullYear(); //grab current year
    const yearOfDeath = person.yearOfDeath ?? currentYear; //if death use it otherwise current yr
    return yearOfDeath - person.yearOfBirth; //subtract to give age
};

function findTheOldest(people) {
  return people.reduce((oldestSoFar, currentPerson) => {
    const currentAge = getAge(currentPerson);
    const oldestAge = getAge(oldestSoFar);

    if (currentAge > oldestAge) {
      return currentPerson;
    } else {
      return oldestSoFar;
    }
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;