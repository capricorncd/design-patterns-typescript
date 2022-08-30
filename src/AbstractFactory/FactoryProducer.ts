/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/30 20:24:00 (GMT+0900)
 */
interface Shape {
  draw(): string
}

class Rectangle implements Shape {
  public draw(): string {
    return 'Inside Rectangle::draw() method.'
  }
}

class Square implements Shape {
  public draw(): string {
    return 'Inside Square::draw() method.'
  }
}

class Circle implements Shape {
  public draw(): string {
    return 'Inside Circle::draw() method.'
  }
}

interface Color {
  fill(): string
}

class Red implements Color {
  fill(): string {
    return 'Inside Red::fill() method.'
  }
}

class Green implements Color {
  fill(): string {
    return 'Inside Green::fill() method.'
  }
}

class Blue implements Color {
  fill(): string {
    return 'Inside Blue::fill() method.'
  }
}

abstract class AbstractFactory {
  abstract getColor(color: string): Color | null
  abstract getShape(shape: string): Shape | null
}

class ShapeFactory extends AbstractFactory {
  getColor(): null {
    return null
  }

  getShape(shape: string): Shape {
    switch (shape) {
      case 'rectangle':
        return new Rectangle()
      case 'square':
        return new Square()
      case 'circle':
        return new Circle()
    }
    throw new Error(`Invalid Shape: ${shape}`)
  }
}

class ColorFactory extends AbstractFactory {
  getColor(color: string): Color {
    switch (color) {
      case 'red':
        return new Red()
      case 'green':
        return new Green()
      case 'blue':
        return new Blue()
    }
    throw new Error(`Invalid Color: ${color}`)
  }

  getShape(): null {
    return null
  }
}

export class FactoryProducer {
  static getFactory(type: 'COLOR' | 'SHAPE'): AbstractFactory | null {
    switch (type) {
      case 'COLOR':
        return new ColorFactory()
      case 'SHAPE':
        return new ShapeFactory()
    }
    return null
  }
}
