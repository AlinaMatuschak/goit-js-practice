class Car {
  constructor({ maxSpeed = 0 }) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
  }

  turnOn() {
    this.running = true;
  }

  turnOff() {
    this.running = false;
  }

  accelerate(spd) {
    if (this.maxSpeed < spd) return;
    this.speed = spd;
  }

  decelerate(spd) {
    if (spd < 0) return;
    this.accelerate(spd);
  }

  drive(hours) {
    if (this.running === false) return;
    this.distance = hours * this.speed;
  }
}

const car = new Car({ maxSpeed: 100 });

car.turnOn();
console.log(car.running); // true
car.turnOff();
console.log(car.running); // false
car.turnOn();
console.log(car.running); // true
car.accelerate(200);
console.log(car.speed); // 0
car.accelerate(80);
console.log(car.speed); // 80
car.decelerate(-20);
console.log(car.speed); // 80
car.decelerate(50);
console.log(car.speed); // 50
car.drive(10);
console.log(car.distance); // 500
