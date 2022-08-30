/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/30 20:15:04 (GMT+0900)
 */
import { describe, expect, it } from 'vitest'
import { FactoryProducer } from './index'

describe('AbstractFactory', () => {
  it('FactoryProducer', () => {
    const shapeFactory = FactoryProducer.getFactory('SHAPE')

    const shapeRectangle = shapeFactory!.getShape('rectangle')
    const shapeSquare = shapeFactory!.getShape('square')
    const shapeCircle = shapeFactory!.getShape('circle')

    expect(shapeRectangle!.draw()).toBe('Inside Rectangle::draw() method.')
    expect(shapeSquare!.draw()).toBe('Inside Square::draw() method.')
    expect(shapeCircle!.draw()).toBe('Inside Circle::draw() method.')

    expect(() => shapeFactory!.getShape('abc')).toThrowError(
      'Invalid Shape: abc'
    )

    const colorFactory = FactoryProducer.getFactory('COLOR')

    const colorRed = colorFactory!.getColor('red')
    const colorGreen = colorFactory!.getColor('green')
    const colorBlue = colorFactory!.getColor('blue')

    expect(colorRed!.fill()).toBe('Inside Red::fill() method.')
    expect(colorGreen!.fill()).toBe('Inside Green::fill() method.')
    expect(colorBlue!.fill()).toBe('Inside Blue::fill() method.')

    expect(() => colorFactory!.getColor('abc')).toThrowError(
      'Invalid Color: abc'
    )
  })
})
