import { expect } from "chai";
import {BigNumber} from "../src";

const absolute: string = '12221212221211321312'
const negate: string = '-12221212221211321312'

suite('Absolute', () => {
  test('Absolute number must remain absolute', () => {
    expect(new BigNumber(absolute).abs().result()).to.be.equal(absolute)
  })

  test('Negated number must be absolute', () => {
    expect(new BigNumber(negate).abs().result()).to.be.equal(absolute)
  })
})
