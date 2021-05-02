// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,nameToCheck){
  let filtered = drivers.filter(n =>{return n.toLowerCase()===nameToCheck.toLowerCase();});
  return filtered;
}

findMatching(drivers,'Bobby')

function fuzzyMatch(drivers, check){
  let filtered = drivers.filter(n =>{return n.toLowerCase()===nameToCheck.toLowerCase();});
  return filtered;
}