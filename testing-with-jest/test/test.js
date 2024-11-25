const uppercase = require('./../uppercase.js');

describe('uppercase', () => {
  test('uppercase hello return Hello', () => {
    expect(uppercase('hello')).toBe('HELLO');
  });
});
