const alternateCase = require("../katas/alternate-case");
//base case return empty string when input is empty string
describe('alternate case', () => {
    test('base case return empty string when input is empty string', ()=> {
        const output =  alternateCase("")
        expect(output).toBe("")
    })
    test("function returns an alternate case string", ()=> {
        const output =  alternateCase("hello")
        expect(output).toBe("HeLlO")
    })
})







