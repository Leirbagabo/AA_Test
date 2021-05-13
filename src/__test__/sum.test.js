import sum from '../main.js';

//const sum =require('../main')

describe('pruebas para suma',()=>{
    test('1 + 2 is 3',()=>{
        expect(sum(1,2)).toBe(3)
    })
})