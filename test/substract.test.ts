import {expect} from "chai";
import {BigNumber} from "../src";

suite('Subtract', () => {
  test('100 - 1 = 99', () => {
    expect(new BigNumber('100').subtract('1').result()).to.be.equal('99')
  })

  test('100 - 99 = 1', () => {
    expect(new BigNumber('100').subtract('99').result()).to.be.equal('1')
  })

  test('6845341545465654 - 654987215454 = 6844686558250200', () => {
    expect(new BigNumber('6845341545465654').subtract('654987215454').result()).to.be.equal('6844686558250200')
  })

  test('879786844554 - 897878989524546454564 = 897878988644759610010', () => {
    expect(new BigNumber('879786844554').subtract('897878989524546454564').result()).to.be.equal('-897878988644759610010')
  })
})
