import Calculator from './test.mjs';
 
describe('string calculator', () => {
    it('Given the user input is empty when calculating the sum then it should return zero.', () => {
        const calculator= new Calculator();
        const result= calculator.sum();
        expect(result).toEqual(0);
    });
    it('Given the user input is one number when calculating the sum then it should return the same number.', () => {
        const calculator= new Calculator();
        const result= calculator.sum("3");
        expect(result).toEqual(3);
    });
    it('Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)', () => {
        const calculator= new Calculator();
        const result= calculator.sum("1,2");
        expect(result).toEqual(3);
    });
});