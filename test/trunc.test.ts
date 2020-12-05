import { expect } from "chai";
import {BigNumber} from "../src";

suite('Truncate', () => {
  test('-10288225485857.26565656 become -10288225485857', () => {
    expect(new BigNumber('-10288225485857.26565656').trunc()).to.be.equal('-10288225485857')
  })

  test('5868453454534544.8678465454 become 5868453454534544', () => {
    expect(new BigNumber('5868453454534544.8678465454').trunc()).to.be.equal('5868453454534544')
  })
})
