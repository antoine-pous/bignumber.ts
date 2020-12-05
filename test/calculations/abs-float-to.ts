import { expect } from "chai";
import {BigNumber} from "../../src";

suite('Absolute float to', () => {
  test('Truncated negative', () => {
    expect(new BigNumber('655649889745454.785787877').negate().trunc().result()).to.be.equal('655649889745454')
  })
})
