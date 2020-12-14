import {expect} from "chai";
import {BigNumber} from "../../src";

suite('Convert string number to an array of int', () => {
  test('100 => [1,0,0]', () => {
    expect(new BigNumber('100').stringToArrayOfNumbers('100')).to.be.deep.equal([1,0,0])
  })
})
