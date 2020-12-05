import {expect} from "chai";
import {BigNumber} from "../src";

const lowAbsolute: string = '100'
const highAbsolute: string = '500'
const lowNegate: string = '-500'
const highNegate: string = '-100'

suite('Is higher than or equal', () => {
  test('500 is not lower than or equal to 100', () => {
    expect(new BigNumber(highAbsolute).isLowerThanOrEqual(lowAbsolute)).to.be.false
  })

  test('100 is lower than or equal to 500', () => {
    expect(new BigNumber(lowAbsolute).isLowerThanOrEqual(highAbsolute)).to.be.true
  })

  test('500 is not lower than or equal to -500', () => {
    expect(new BigNumber(highAbsolute).isLowerThanOrEqual(lowNegate)).to.be.false
  })

  test('-100 is lower than or equal to -100', () => {
    expect(new BigNumber(highNegate).isLowerThanOrEqual(highNegate)).to.be.true
  })

  test('-500 is lower than or equal to -100', () => {
    expect(new BigNumber(lowNegate).isLowerThanOrEqual(highNegate)).to.be.true
  })
})