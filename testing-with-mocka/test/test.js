import * as chai from 'chai';
import { add } from './../calculator.js';

describe('Calculator Test', () => {
  describe('add() Test', () => {
    it('add(1,2) should return 3', () => {
      chai.assert.equal(add(1, 2), 3);
    });
    it("add('1','2') should return 3", () => {
      chai.assert.equal(add('1', '2'), 3);
    });
  });
});
