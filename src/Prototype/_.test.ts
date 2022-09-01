/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/09/01 21:28:04 (GMT+0900)
 */
import { describe, expect, it } from 'vitest'
import { Circle, Rectangle } from './index'

describe('Prototype', () => {
  it('Shape', () => {
    const circle = new Circle({ x: 100, y: 100, color: 'red', radius: 50 })
    const rectangle = new Rectangle({
      x: 100,
      y: 100,
      color: 'red',
      width: 50,
      height: 80,
    })

    const circleClone = circle.clone()

    expect(circle.x).toBe(circleClone.x)
    expect(circle.y).toBe(circleClone.y)
    expect(circle.color).toBe(circleClone.color)
    expect(circle.radius).toBe(circleClone.radius)
    expect(circle).not.toBe(circleClone)

    const rectangleClone = rectangle.clone()

    expect(rectangle.x).toBe(rectangleClone.x)
    expect(rectangle.y).toBe(rectangleClone.y)
    expect(rectangle.color).toBe(rectangleClone.color)
    expect(rectangle.width).toBe(rectangleClone.width)
    expect(rectangle.height).toBe(rectangleClone.height)
    expect(rectangle).not.toBe(rectangleClone)
  })
})
