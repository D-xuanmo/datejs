class DateJS {
  date: Date

  constructor(date: number | string | Date, offset?: number) {
    this.date = new Date(date)
    if (offset) this.date = new Date(Number(this.date) + offset)
  }

  /**
   * 小于 10 的填充 0 补位
   * @returns {string}
   * @param num
   */
  private static _paddingZero(num: number): string {
    return `${num}`.padStart(2, '0')
  }

  /**
   * 格式化时间
   * @param {string} formatter yyyy/MM/dd HH:mm:ss
   * @returns {string} 2021/07/19 00:23:44
   */
  public format(formatter: string = 'yyyy/MM/dd HH:mm:ss'): string {
    const day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const obj = {
      'y+': this.date.getFullYear(),
      'M{2}': DateJS._paddingZero(this.date.getMonth() + 1),
      'd{2}': DateJS._paddingZero(this.date.getDate()),
      'H{2}': DateJS._paddingZero(this.date.getHours()),
      'h{2}': DateJS._paddingZero(this.date.getHours() % 12),
      'm{2}': DateJS._paddingZero(this.date.getMinutes()),
      's{2}': DateJS._paddingZero(this.date.getSeconds()),
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

  /**
   * 获取当月最后一天时间
   */
  public lastDay() {
    return new Date(Date.UTC(+this.format('yyyy'), +this.format('M'), 0)).getDate()
  }

  /**
   * 计算相差天数
   * @param targetTime 目标日期
   */
  public calcDay(targetTime: Date) {
    return Math.abs(Math.ceil((+this.date - +targetTime) / (60 * 60 * 24 * 1000)))
  }
}

export default (date?: number | string | Date, offset?: number) => new DateJS(date || Date.now(), offset)
