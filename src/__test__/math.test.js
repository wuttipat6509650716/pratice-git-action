const { add, subtract, multiply } = require('../math.js');

describe('simple arithmetic', () => {
describe('addition', () => {
it('should return the sum of two numbers', async ()  =>{
expect(add(1,2)).toBe(3);
});
});

describe('subtract', () => {
it('should return the difference of two numbers', async ()  =>{
expect(subtract(10,2)).toBe(9);
});
});

describe('multiply', () => {
it('should return multiply of two numbers', async ()  =>{
expect(multiply(5,2)).toBe(10);
});
});

});

