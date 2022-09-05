/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/09/05 22:11:41 (GMT+0900)
 */
interface Device {
  _volume: number
  _channel: number
  _disable: boolean
  isEnabled(): boolean
  disable(): void
  setVolume(percent: number): void
  getVolume(): number
  setChannel(channel: number): void
  getChannel(): number
}

export class RemoteControl {
  device: Device

  constructor(device: Device) {
    this.device = device
  }

  togglePower() {
    this.device.disable()
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10)
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10)
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1)
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1)
  }
}

export class AdvancedRemoteControl extends RemoteControl {
  constructor(device: Device) {
    super(device)
  }
  mute() {
    this.device.setVolume(0)
  }
}

export class Tv implements Device {
  _volume: number
  _channel: number
  _disable: boolean

  constructor() {
    this._volume = 0
    this._channel = 1
    this._disable = false
  }

  isEnabled(): boolean {
    return !this._disable
  }
  disable(): void {
    this._disable = !this._disable
  }
  setVolume(percent: number): void {
    this._volume = Math.max(percent, 0)
  }
  getVolume(): number {
    return this._volume
  }
  setChannel(channel: number): void {
    this._channel = Math.max(channel, 1)
  }
  getChannel(): number {
    return this._channel
  }
}

export class Radio implements Device {
  _volume: number
  _channel: number
  _disable: boolean

  constructor() {
    this._volume = 0
    this._channel = 1
    this._disable = false
  }

  isEnabled(): boolean {
    return !this._disable
  }
  disable(): void {
    this._disable = !this._disable
  }
  setVolume(percent: number): void {
    this._volume = Math.max(percent, 0)
  }
  getVolume(): number {
    return this._volume
  }
  setChannel(channel: number): void {
    this._channel = Math.max(channel, 1)
  }
  getChannel(): number {
    return this._channel
  }
}
