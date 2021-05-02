// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,nameToCheck){
  let filtered = drivers.filter(n =>{return n.toLowerCase()===nameToCheck.toLowerCase();});
  return filtered;
}

findMatching(drivers,'Bobby')

function fuzzyMatch(drivers, portionCheck){
  let filtered = drivers.filter(n =>{return n.toLowerCase().slice(0,len(portionCheck))===portionCheck.toLowerCase();});
  return filtered;
}

fuzzyMatch(drivers,"Sa")
