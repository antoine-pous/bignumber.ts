import { expect } from "chai";
import {BigNumber} from "../src";

const floatAbsolute: string = '12221212221211321312.5454564546'
const floatNegate: string = '-12221212221211321312.5454564546'
const integerAbsolute: string = '12221212221211321312'
const integerNegate: string = '-12221212221211321312'

suite('To Integer', () => {
  test('Absolute float must be absolute integer', () => {
    expect(new BigNumber(floatAbsolute).toInteger().result()).to.be.equal(integerAbsolute)
  })

  test('Negated float must be negated integer', () => {
    expect(new BigNumber(floatNegate).toInteger().result()).to.be.equal(integerNegate)
  })

  test('Absolute integer must remain absolute integer', () => {
    expect(new BigNumber(integerAbsolute).toInteger().result()).to.be.equal(integerAbsolute)
  })

  test('Negated integer must remain negated integer', () => {
    expect(new BigNumber(integerNegate).toInteger().result()).to.be.equal(integerNegate)
  })
})