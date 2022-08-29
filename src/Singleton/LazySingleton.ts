/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/27 15:29:49 (GMT+0900)
 */
// let initializing = false

export class LazySingleton {
  private static instance: LazySingleton
  private name: string

  private constructor() {
    // if (initializing) {
    //   throw new Error(
    //     'The constructor is private, please use LazySingleton.getInstance().'
    //   )
    // }
    // initializing = true
    this.name = 'LazySingleton'
  }

  public static getInstance(): LazySingleton {
    if (!this.instance) this.instance = new LazySingleton()
    return this.instance
  }

  public static showMessage(): void {
    console.log(`This is class ${this.name}.`)
  }
}
