/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/09/03 13:35:04 (GMT+0900)
 */
import { describe, expect, it } from 'vitest'
import { AudioPlayer } from './index'

describe('Adapter', () => {
  it('AudioPlayer', () => {
    const audioPlayer = new AudioPlayer()

    let playResult = audioPlayer.play('mp3', 'beyond the horizon.mp3')
    expect(playResult).toBe('Playing mp3 file. Name: beyond the horizon.mp3')

    playResult = audioPlayer.play('mp4', 'alone.mp4')
    expect(playResult).toBe('alone.mp4')

    playResult = audioPlayer.play('vlc', 'far far away.vlc')
    expect(playResult).toBe('far far away.vlc')

    const playAvi = () => audioPlayer.play('avi', 'mind me.avi')
    expect(playAvi).toThrowError('Invalid media. avi format not supported')
  })
})
