/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/27 15:29:49 (GMT+0900)
 */
class SingletonHolder {
  private name: string

  constructor() {
    this.name = 'InnerClassSingleton'
  }

  public static showMessage(): void {
    console.log(`This is class ${this.name}.`)
  }
}

export const InnerClassSingleton = new SingletonHolder()
