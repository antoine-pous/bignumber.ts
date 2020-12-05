import {expect} from "chai";
import {BigNumber} from "../src";

const lowAbsolute: string = '100'
const highAbsolute: string = '500'
const lowNegate: string = '-500'
const highNegate: string = '-100'

suite('Compare', () => {
  test('500 is higher than 100', () => {
    expect(new BigNumber(highAbsolute).isHigherThan(lowAbsolute)).to.be.true
  })

  test('100 is not higher than 500', () => {
    expect(new BigNumber(lowAbsolute).isHigherThan(highAbsolute)).to.be.false
  })

  test('500 is higher than -500', () => {
    expect(new BigNumber(highAbsolute).isHigherThan(lowNegate)).to.be.true
  })

  test('-100 is higher than -500', () => {
    expect(new BigNumber(highNegate).isHigherThan(lowNegate)).to.be.true
  })

  test('-500 is not higher than -100', () => {
    expect(new BigNumber(lowNegate).isHigherThan(highNegate)).to.be.false
  })
})