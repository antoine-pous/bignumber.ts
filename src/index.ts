export class BigNumber {

  protected asString: string

  protected isNegative: boolean

  constructor(readonly number: string | number | BigNumber) {
    if(number instanceof BigNumber) {
      this.asString = number.asString
      this.number = number.number
      this.isNegative = number.isNegative
      return this
    }

    const _number: string = typeof number === 'string' ? number : number.toString()
    this.asString = _number
    this.isNegative = _number.startsWith('-')
    return this
  }

  public add(number: string | number | BigNumber) {
    const toAdd: BigNumber = new BigNumber(number)
    const tn: string[] = [...this.asString].reverse()
    const ta: string[] = [...toAdd.asString].reverse()
    const tr: number[] = []
    const length: number = Math.max(tn.length, ta.length)
    let remainder: boolean = false
    for(let index = 0; index < length; index++) {
      const _tn: number = parseInt(tn[index]) || 0
      const _ta: number = parseInt(ta[index]) || 0
      let _tr: number = _tn + _ta

      if(remainder) {
        _tr += 1
        remainder = false
      }

      if(_tr >= 10) {
        _tr = _tr % 10
        remainder = true
      }

      tr[index] = _tr
    }

    const result: string = tr.reverse().join('')
    this.asString = remainder ? `1${result}` : result
    return this
  }

  public abs(): BigNumber {
    if(this.asString.startsWith('-')) {
      this.asString = this.asString.slice(1, this.asString.length)
    }
    return this
  }

  public negate(): BigNumber {
    if(!this.asString.startsWith('-')) {
      this.asString = `-${this.asString}`
    }
    return this
  }

  public trunc(): BigNumber {
    const parts: string[] = this.asString.split('.')
    this.asString = parts[0]
    return this
  }

  public compare(number: string | number | BigNumber): -1 | 0 | 1 {
    const toCompare: BigNumber = new BigNumber(number)

    if(this.isNegative && !toCompare.isNegative) {
      return -1
    }

    if(!this.isNegative && toCompare.isNegative) {
      return 1
    }

    if(this.asString.length < toCompare.asString.length) {
      return -1
    }

    if(this.asString.length > toCompare.asString.length) {
      return 1
    }

    for(let index = 0; index < this.asString.length; index++) {

      if(this.isNegative) {
        if(this.asString[index] === '-') {
          continue
        }

        if (this.asString[index] < toCompare.asString[index]) {
          return 1
        }

        if (this.asString[index] > toCompare.asString[index]) {
          return -1
        }
      } else {
        if (this.asString[index] > toCompare.asString[index]) {
          return 1
        }

        if (this.asString[index] < toCompare.asString[index]) {
          return -1
        }
      }
    }

    return 0
  }

  public isHigherThan(n: number | string | BigNumber): boolean {
    return this.compare(n) === 1
  }

  public isHigherThanOrEqual(n: number | string | BigNumber): boolean {
    return [0, 1].includes(this.compare(n))
  }

  public isLowerThan(n: number | string | BigNumber): boolean {
    return this.compare(n) === -1
  }

  public isLowerThanOrEqual(n: number | string | BigNumber): boolean {
    return [-1, 0].includes(this.compare(n))
  }

  public result(): string {
    return this.asString
  }
}