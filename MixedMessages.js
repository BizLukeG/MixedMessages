const teamNames = ["Cowboys", "Bills", "Ravens", "Falcons", "Panthers", "Jets"];

const prospects = ["Anthony Richardson", "Bryce Young", "Bijan Robinson", "Jahmyr Gibbs", "Zay Flowers"];

const draftPick = ["1st", "2nd", "3rd", "4th", "5th", "6th"];

function getRandomArrayValue(array){
  return array[Math.floor(Math.random() * array.length)];
}

console.log(`With the ${getRandomArrayValue(draftPick)} overall draft pick in the 2023 NFL draft,
the ${getRandomArrayValue(teamNames)} select ${getRandomArrayValue(prospects)}!`)