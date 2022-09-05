/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/09/05 22:11:41 (GMT+0900)
 */
import { describe, expect, it } from 'vitest'
import { AdvancedRemoteControl, RemoteControl, Tv, Radio } from './index'

describe('Bridge', () => {
  it('RemoteControl', () => {
    const tv = new Tv()
    const remote = new RemoteControl(tv)

    expect(tv.isEnabled()).toBeTruthy()

    remote.togglePower()

    expect(tv.isEnabled()).toBeFalsy()

    const radio = new Radio()
    const advancedRemote = new AdvancedRemoteControl(radio)

    expect(radio.getVolume()).toBe(0)

    advancedRemote.volumeUp()

    expect(radio.getVolume()).toBe(10)

    advancedRemote.mute()

    expect(radio.getVolume()).toBe(0)
  })
})
