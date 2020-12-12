import {expect} from "chai";
import {BigNumber} from "../src";

suite('Add', () => {
  test('99 + 1 = 100', () => {
    expect(new BigNumber('99').add('1').result()).to.be.equal('100')
  })

  test('1 + 99 = 100', () => {
    expect(new BigNumber('1').add('99').result()).to.be.equal('100')
  })

  test('6845341545465654 + 654987215454 = 6845996532681108', () => {
    expect(new BigNumber('6845341545465654').add('654987215454').result()).to.be.equal('6845996532681108')
  })

  test('879786844554 + 897878989524546454564 = 897878990404333299118', () => {
    expect(new BigNumber('879786844554').add('897878989524546454564').result()).to.be.equal('897878990404333299118')
  })
})
