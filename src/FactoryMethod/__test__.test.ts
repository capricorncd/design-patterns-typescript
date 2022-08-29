/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/27 21:15:04 (GMT+0900)
 */
import { describe, expect, it, vi } from 'vitest'
import { ShapeFactory, DialogApplication } from './index'

describe('FactoryMethod', () => {
  it('ShapeFactory', () => {
    const shapeFactory = new ShapeFactory()

    expect(shapeFactory.getShape('Square').draw()).toBe(
      'Inside Square::draw() method.'
    )

    expect(shapeFactory.getShape('Rectangle').draw()).toBe(
      'Inside Rectangle::draw() method.'
    )

    expect(shapeFactory.getShape('Circle').draw()).toBe(
      'Inside Circle::draw() method.'
    )
  })

  it('DialogApplication', () => {
    const dialog = new DialogApplication()

    const spy = vi.spyOn(dialog, 'initialize')

    expect(spy.getMockName()).toEqual('initialize')

    dialog.initialize('Window')

    expect(spy).toHaveBeenCalled()

    expect(() => dialog.initialize('x')).toThrowError(
      'Error! Unknown operating system.'
    )
  })
})
