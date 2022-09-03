/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/09/03 13:47:40 (GMT+0900)
 */
interface MediaPlayer {
  play(audioType: string, fileName: string): string
}

interface AdvancedMediaPlayer {
  playVlc(fileName: string): void
  playMp4(fileName: string): void
}

export class VlcPlayer implements AdvancedMediaPlayer {
  playVlc(fileName: string) {
    return `Playing vlc file. Name: ${fileName}`
  }

  playMp4() {
    // ...
  }
}

export class Mp4Player implements AdvancedMediaPlayer {
  playVlc() {
    // ...
  }

  playMp4(fileName: string) {
    return `Playing mp4 file. Name: ${fileName}`
  }
}

class MediaAdapter implements MediaPlayer {
  advancedMusicPlayer: AdvancedMediaPlayer | null = null

  constructor(audioType: string) {
    if (audioType === 'vlc') {
      this.advancedMusicPlayer = new VlcPlayer()
    } else if (audioType === 'mp4') {
      this.advancedMusicPlayer = new Mp4Player()
    }
  }

  play(audioType: string, fileName: string): string {
    if (audioType === 'vlc') {
      this.advancedMusicPlayer!.playVlc(fileName)
    } else if (audioType === 'mp4') {
      this.advancedMusicPlayer!.playMp4(fileName)
    }
    return fileName
  }
}

export class AudioPlayer implements MediaPlayer {
  play(audioType: string, fileName: string) {
    switch (audioType) {
      case 'mp3':
        return `Playing mp3 file. Name: ${fileName}`
      case 'vlc':
      case 'mp4': {
        const adapter = new MediaAdapter(audioType)
        adapter.play(audioType, fileName)
        return fileName
      }
      default:
        throw new Error(`Invalid media. ${audioType} format not supported`)
    }
  }
}
