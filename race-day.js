// Initialize raceNumber
let raceNumber = Math.floor(Math.random() * 1000);

// Initialize registeredEarly and runnersAge
const registeredEarly = true;
const runnersAge = 44;

// Update race number for adult runners who registered early
if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Display message for runner 
if (runnersAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnersAge < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log(`Please see the registration desk.`);
}