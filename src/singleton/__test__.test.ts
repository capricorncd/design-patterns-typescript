/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/27 21:15:04 (GMT+0900)
 */
import { describe, expect, it } from 'vitest'
import { HungrySingleton as Hungry } from './HungrySingleton'
import { InnerClassSingleton as InnerClassSingletonInstance } from './InnerClassSingleton'
import { LazySingleton as Lazy } from './LazySingleton'
import { LazySingleton, InnerClassSingleton, HungrySingleton } from './index'

describe('Singleton', () => {
  it('LazySingleton', () => {
    expect(LazySingleton.getInstance()).toBe(LazySingleton.getInstance())
    expect(Lazy.getInstance()).toBe(LazySingleton.getInstance())

    // Constructor of class 'LazySingleton' is private and only accessible within the class declaration.
    // expect(new LazySingleton()).toThrowError(
    //   'The constructor is private, please use LazySingleton.getInstance().'
    // )
  })

  it('InnerClassSingleton', () => {
    expect(InnerClassSingleton).toBe(InnerClassSingletonInstance)
  })

  it('HungrySingleton', () => {
    expect(Hungry.getInstance()).toBe(HungrySingleton.getInstance())
  })
})
