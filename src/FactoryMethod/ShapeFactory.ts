/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/29 20:57:04 (GMT+0900)
 */
interface Shape {
  draw(): string
}

class Rectangle implements Shape {
  draw() {
    return 'Inside Rectangle::draw() method.'
  }
}

class Square implements Shape {
  draw() {
    return 'Inside Square::draw() method.'
  }
}

class Circle implements Shape {
  draw() {
    return 'Inside Circle::draw() method.'
  }
}

export type SHAPE_TYPES_KEYS = 'Rectangle' | 'Square' | 'Circle'

const SHAPE_TYPES = {
  Rectangle,
  Square,
  Circle,
}

export class ShapeFactory {
  getShape(shapeType: SHAPE_TYPES_KEYS): Shape {
    return new SHAPE_TYPES[shapeType]()
  }
}
