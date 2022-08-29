/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/08/29 21:17:11 (GMT+0900)
 */
interface Button {
  render(): void
  onClick(): void
}

class WindowsButton implements Button {
  render() {
    console.log('WindowsButton is rendered.')
  }

  onClick() {
    console.log('WindowsButton is on click')
  }
}

class HTMLButton implements Button {
  render() {
    console.log('HTMLButton is rendered.')
  }

  onClick() {
    console.log('HTMLButton is on click')
  }
}

abstract class Dialog {
  abstract createButton(): Button

  render() {
    // Call the factory method to create a product object.
    const okButton = this.createButton()
    // Now use the product.
    okButton.onClick()
    okButton.render()
  }
}

class WindowsDialog extends Dialog {
  createButton(): Button {
    return new WindowsButton()
  }
}

class WebDialog extends Dialog {
  createButton(): Button {
    return new HTMLButton()
  }
}

export class DialogApplication {
  private dialog: Dialog | null

  constructor() {
    this.dialog = null
  }

  initialize(type: string) {
    if (type === 'Window') {
      this.dialog = new WindowsDialog()
    } else if (type === 'Web') {
      this.dialog = new WebDialog()
    } else {
      throw new Error('Error! Unknown operating system.')
    }
    this.dialog.render()
  }
}
