/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/29 21:17:11 (GMT+0900)
 */
export class Car {
  name: string
  constructor() {
    this.name = 'car'
  }
}

export class Manual {
  name: string
  constructor() {
    this.name = 'manual'
  }
}

interface Builder {
  reset(): void
  setSeats(num: number): void
  setEngine(engine: Engine): void
  setTripComputer(isNeed: boolean): void
  setGPS(isNeed: boolean): void
}

interface Engine {
  version: string
}

class SportEngine implements Engine {
  version: string

  constructor() {
    this.version = '1.0.0'
  }
}

export class CarBuilder implements Builder {
  private car: Car | null = null

  reset() {
    this.car = new Car()
  }

  setSeats(num: number) {
    // Set the number of seats in the car.
    console.log(num)
  }

  setEngine(engine: Engine) {
    // Install a given engine.
    console.log(engine)
  }

  setTripComputer(isNeed: boolean) {
    // Install a trip computer.
    console.log(isNeed)
  }

  setGPS(isNeed: boolean) {
    // Install a global positioning system.
    console.log(isNeed)
  }

  getProduct(): Car {
    return this.car as Car
  }
}

export class CarManualBuilder implements Builder {
  private manual: Manual | null = null

  reset() {
    this.manual = new Manual()
  }

  setSeats(num: number) {
    // Document car seat features.
    console.log(num)
  }

  setEngine(engine: Engine) {
    // Add engine instructions.
    console.log(engine)
  }

  setTripComputer(isNeed: boolean) {
    // Add trip computer instructions.
    console.log(isNeed)
  }

  setGPS(isNeed: boolean) {
    // Add GPS instructions.
    console.log(isNeed)
  }

  getProduct(): Manual {
    return this.manual as Manual
  }
}

export class CarDirector {
  constructSportsCar(builder: Builder) {
    builder.reset()
    builder.setSeats(2)
    builder.setEngine(new SportEngine())
    builder.setTripComputer(true)
    builder.setGPS(true)
  }
}
