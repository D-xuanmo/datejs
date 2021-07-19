class DateJS {
  date: Date

  constructor (date: number | string | Date) {
    this.date = new Date(date)
  }

  /**
   * 小于 10 的填充 0 补位
   * @param {number} n
   * @returns {string}
   */
  private _paddingZero(num: number): string {
    return `${num}`.padStart(2, '0')
  }

  /**
   * 格式化时间
   * @param {string} formatter yyyy-MM-dd HH:mm:ss
   * @returns {string} 2021-07-19 00:23:44
   */
  public format(formatter: string = 'yyyy-MM-dd HH:mm:ss'): string {
    const day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const obj = {
      'y+': this.date.getFullYear(),
      'M{2}': this._paddingZero(this.date.getMonth() + 1),
      'd{2}': this._paddingZero(this.date.getDate()),
      'H{2}': this._paddingZero(this.date.getHours()),
      'h{2}': this._paddingZero(this.date.getHours() % 12),
      'm{2}': this._paddingZero(this.date.getMinutes()),
      's{2}': this._paddingZero(this.date.getSeconds()),
      'M': this.date.getMonth() + 1,
      'd': this.date.getDate(),
      'H': this.date.getHours(),
      'h': this.date.getHours() % 12,
      'm': this.date.getMinutes(),
      's': this.date.getSeconds(),
      'CW': day[this.date.getDay()],
      'W': this.date.getDay()
    }
    for (let [key, value] of Object.entries(obj)) {
      const regexp = new RegExp(`(${key})([^a-zA-Z])?`)
      if (regexp.test(formatter)) {
        formatter = formatter.replace(RegExp.$1, `${value}`)
      }
    }
    return formatter
  }
}

export default (date?: number | string | Date | undefined) => new DateJS(date || Date.now())
