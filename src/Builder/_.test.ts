/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/27 21:15:04 (GMT+0900)
 */
import { describe, expect, it, vi } from 'vitest'
import { CarDirector, CarBuilder, CarManualBuilder, Car, Manual } from './index'

describe('Builder', () => {
  it('Car', () => {
    const director = new CarDirector()

    const carBuilder = new CarBuilder()

    const carResetSpy = vi.spyOn(carBuilder, 'reset')
    const carSetSeatsSpy = vi.spyOn(carBuilder, 'setSeats')
    const carSetEngineSpy = vi.spyOn(carBuilder, 'setEngine')
    const carSetTripComputerSpy = vi.spyOn(carBuilder, 'setTripComputer')

    director.constructSportsCar(carBuilder)

    expect(carResetSpy).toBeCalled()
    expect(carSetSeatsSpy).toBeCalled()
    expect(carSetEngineSpy).toBeCalled()
    expect(carSetTripComputerSpy).toBeCalled()

    const car = carBuilder.getProduct()
    expect(car).toBeInstanceOf(Car)

    const manualBuilder = new CarManualBuilder()

    const manualResetSpy = vi.spyOn(manualBuilder, 'reset')
    const manualSetSeatsSpy = vi.spyOn(manualBuilder, 'setSeats')
    const manualSetEngineSpy = vi.spyOn(manualBuilder, 'setEngine')
    const manualSetTripComputerSpy = vi.spyOn(manualBuilder, 'setTripComputer')

    director.constructSportsCar(manualBuilder)

    expect(manualResetSpy).toBeCalled()
    expect(manualSetSeatsSpy).toBeCalled()
    expect(manualSetEngineSpy).toBeCalled()
    expect(manualSetTripComputerSpy).toBeCalled()

    const manual = manualBuilder.getProduct()
    expect(manual).toBeInstanceOf(Manual)
  })
})
