import { expect } from "chai";
import {BigNumber} from "../src";

const absolute: string = '12221212221211321312'
const negate: string = '-12221212221211321312'

suite('Negate', () => {
  test('Negate number must remain Negate', () => {
    expect(new BigNumber(negate).negate().result()).to.be.equal(negate)
  })

  test('Absolute number must be negate', () => {
    expect(new BigNumber(absolute).negate().result()).to.be.equal(negate)
  })
})
