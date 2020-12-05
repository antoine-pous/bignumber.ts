import {expect} from "chai";
import {BigNumber} from "../src";

const lowAbsolute: string = '100'
const highAbsolute: string = '500'
const lowNegate: string = '-500'
const highNegate: string = '-100'

suite('Compare', () => {
  test('500 is not lower than 100', () => {
    expect(new BigNumber(highAbsolute).isLowerThan(lowAbsolute)).to.be.false
  })

  test('100 is lower than 500', () => {
    expect(new BigNumber(lowAbsolute).isLowerThan(highAbsolute)).to.be.true
  })

  test('500 is not lower than -500', () => {
    expect(new BigNumber(highAbsolute).isLowerThan(lowNegate)).to.be.false
  })

  test('-100 is not lower than -500', () => {
    expect(new BigNumber(highNegate).isLowerThan(lowNegate)).to.be.false
  })

  test('-500 is lower than -100', () => {
    expect(new BigNumber(lowNegate).isLowerThan(highNegate)).to.be.true
  })
})