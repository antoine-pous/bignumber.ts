import { expect } from "chai";
import {BigNumber} from "../src";

suite('Instantiate', () => {
  test('BigNumber instantiated with string', () => {
    expect(new BigNumber('654564564456456456').result()).to.be.equal('654564564456456456')
  })

  test('BigNumber instantiated with number', () => {
    expect(new BigNumber(99).result()).to.be.equal('99')
  })

  test('BigNumber instantiated with BigNumber', () => {
    const number: BigNumber = new BigNumber('65487846455654548787')
    expect(new BigNumber(number).result()).to.be.equal('65487846455654548787')
  })
})
