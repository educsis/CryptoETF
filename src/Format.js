import Utils from './Utils'

export default class Format {
  static money(number) {
    if (!number) {
      return ''
    }
    let formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0
    })
    return formatter.format(parseInt(number))
  }

  static percent(number) {
    if (!number) {
      return ''
    }
    return Utils.round(number * 100, 3).toFixed(1)
  }

  static bitcoin(number, chars_) {
    let chars = (chars_) ? chars_ : 2
    if (!number) {
      return ''
    }
    return Utils.round(number, chars).toFixed(chars)
  }

  static addPlusSign(number) {
    if (number.search('-')) {
      return '+' + number
    }
    return number
  }
}