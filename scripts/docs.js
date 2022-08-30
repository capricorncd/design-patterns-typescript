/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/27 13:58:14 (GMT+0900)
 */
const fs = require('fs')
const { resolve, join } = require('path')
const { outputFile, BLANK_LINE } = require('zx-sml/nodejs')

const outputFileOptions = {
  lines: {
    end: [
      '## Reference',
      BLANK_LINE,
      '- https://www.runoob.com/design-pattern/design-pattern-tutorial.html',
      BLANK_LINE,
      '- https://refactoring.guru/design-patterns',
    ],
  },
}

function main() {
  const srcDir = resolve(__dirname, '../src')
  // const docsDir = resolve(__dirname, '../docs');

  let tempDir, stat
  fs.readdirSync(srcDir).forEach((dir) => {
    tempDir = join(srcDir, dir)
    stat = fs.statSync(tempDir)
    if (stat.isDirectory()) {
      // outputFile(tempDir, docsDir)
      outputFile(tempDir, join(tempDir, 'README.md'), outputFileOptions)
    }
  })
}

main()
