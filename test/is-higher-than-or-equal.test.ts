import {expect} from "chai";
import {BigNumber} from "../src";

const lowAbsolute: string = '100'
const highAbsolute: string = '500'
const lowNegate: string = '-500'
const highNegate: string = '-100'

suite('Is higher than or equal', () => {
  test('500 is higher than or equal to 100', () => {
    expect(new BigNumber(highAbsolute).isHigherThanOrEqual(lowAbsolute)).to.be.true
  })

  test('100 is not higher than or equal to 500', () => {
    expect(new BigNumber(lowAbsolute).isHigherThanOrEqual(highAbsolute)).to.be.false
  })

  test('500 is higher than or equal to -500', () => {
    expect(new BigNumber(highAbsolute).isHigherThanOrEqual(lowNegate)).to.be.true
  })

  test('-100 is higher than or equal to -100', () => {
    expect(new BigNumber(highNegate).isHigherThanOrEqual(highNegate)).to.be.true
  })

  test('-500 is not higher than or equal to -100', () => {
    expect(new BigNumber(lowNegate).isHigherThanOrEqual(highNegate)).to.be.false
  })
})