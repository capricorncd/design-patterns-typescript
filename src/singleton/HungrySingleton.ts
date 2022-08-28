/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/28 10:14:28 (GMT+0900)
 */
export class HungrySingleton {
  private name: string
  private static instance: HungrySingleton = new HungrySingleton()

  private constructor() {
    this.name = 'HungrySingleton'
  }

  public static getInstance(): HungrySingleton {
    return this.instance
  }

  public static showMessage(): void {
    console.log(`This is class ${this.name}.`)
  }
}
