class Card {
  constructor(name, cost){
    this.name = name;
    this.cost = cost;
  }
  hardAlgorithm(){
    this.cost -= 2;
    console.log( `increase ${this.name}'s resilience by 3`);
    this.resilience += 3;
  }
  unhandledPromiseRejection(){
    this.cost -= 1;
    console.log( `reduce ${this.name}'s resilience by 2`);
    this.resilience -= 2;
  }
  pairPrograming(){
    this.cost -= 3;
    console.log( `increase ${this.name}'s power by 2`);
    this.power += 2;
  }
  attack(target){
    console.log( `${this.name} attacks ${target.name}` );
  }
}
class Unit extends Card {
  constructor(name, cost, power, resilience){
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
}
class Effect extends Card {
  constructor(name, cost, text, stat, magnitude){
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
}

const ninja1 = new Unit("Red Belt Ninja", 3, 3, 4)
const effect1 = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", +3)
ninja1.hardAlgorithm()
const ninja2 = new Unit("Black Belt Ninja", 4, 5, 4)
const effect2 = new Effect("Unhanded Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2)
ninja1.unhandledPromiseRejection()
const effect3 = new Effect("Pair Programmming", 3, "Incerease target's power by 2", "power", +2)
ninja1.pairPrograming()
ninja1.attack(ninja2)
console.log(ninja2)
console.log(ninja1)