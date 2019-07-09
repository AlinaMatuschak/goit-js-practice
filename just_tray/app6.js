const Hero = function (name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const Cleric = function (name, xp, heal) {
  Hero.call(this, name, xp);
  this.heal = heal;
};

Cleric.prototype = Object.create(Hero.prototype);
Cleric.prototype.constructor = Cleric;
Cleric.prototype.gainHeal = function (hl) {
  console.log(`I'm running ${hl}`);
};

const mech = new Cleric('Mech', 1000, 'health');
console.log(mech);
mech.gainHeal('health');
