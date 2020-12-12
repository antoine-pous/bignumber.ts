import {expect} from "chai";
import {BigNumber} from "../src";

const lowAbsolute: string = '100'
const highAbsolute: string = '500'
const lowNegate: string = '-500'
const highNegate: string = '-100'

suite('Compare', () => {
  test('500 is higher than 100', () => {
    expect(new BigNumber(highAbsolute).compare(lowAbsolute)).to.be.equal(1)
  })

  test('100 is lower than 500', () => {
    expect(new BigNumber(lowAbsolute).compare(highAbsolute)).to.be.equal(-1)
  })

  test('500 is equal to 500', () => {
    expect(new BigNumber(highAbsolute).compare(highAbsolute)).to.be.equal(0)
  })

  test('500 is higher than -500', () => {
    expect(new BigNumber(highAbsolute).compare(lowNegate)).to.be.equal(1)
  })

  test('-100 is higher than -500', () => {
    expect(new BigNumber(highNegate).compare(lowNegate)).to.be.equal(1)
  })

  test('-500 is lower than -100', () => {
    expect(new BigNumber(lowNegate).compare(highNegate)).to.be.equal(-1)
  })

  test('958549847878787898789 is higher than 858549847878787898789', () => {
    expect(new BigNumber('958549847878787898789').compare('858549847878787898789')).to.be.equal(1)
  })

  test('858549847778787898789 is lower than 858549847878787898789', () => {
    expect(new BigNumber('858549847778787898789').compare('858549847878787898789')).to.be.equal(-1)
  })

  test('-500 is lower than 100', () => {
    expect(new BigNumber(lowNegate).compare(lowAbsolute)).to.be.equal(-1)
  })

  test('858549847878787898 is lower than 958549847878787898789', () => {
    expect(new BigNumber('858549847878787898').compare('958549847878787898789')).to.be.equal(-1)
  })

  test('958549847878787898789 is lower than 858549847878787898', () => {
    expect(new BigNumber('958549847878787898789').compare('858549847878787898')).to.be.equal(1)
  })
})