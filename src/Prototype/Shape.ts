/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/09/01 21:28:04 (GMT+0900)
 */
export interface ShapeOptions {
  x: number
  y: number
  color: string
}

export abstract class Shape {
  public x: number
  public y: number
  public color: string

  constructor(options: ShapeOptions) {
    this.x = options.x
    this.y = options.y
    this.color = options.color
  }

  abstract clone(): Shape
}

export interface RectangleOptions extends ShapeOptions {
  width: number
  height: number
}

export class Rectangle extends Shape {
  public width: number
  public height: number

  constructor(options: RectangleOptions) {
    super(options)
    this.width = options.width
    this.height = options.height
  }

  clone(): Rectangle {
    return new Rectangle(this)
  }
}

export interface CircleOptions extends ShapeOptions {
  radius: number
}

export class Circle extends Shape {
  public radius: number

  constructor(options: CircleOptions) {
    super(options)
    this.radius = options.radius
  }

  clone(): Circle {
    return new Circle(this)
  }
}
