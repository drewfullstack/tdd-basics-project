const {max, min} = require("../katas/max-and-min.js")
//return 0 if the entered array is empty

describe("max", ()=> {
    test('return 0 if the entered array is empty', ()=> {
        const output = max("")
        expect(output).toBe(0)
    })
    test('return the max value or the entered array', ()=> {
        const output = max([4,3])
        expect(output).toBe(4)
    })
    
})
describe("min", ()=> {
    test('return 0 if the entered array is empty', ()=> {
        const output = min("")
        expect(output).toBe(0)
    })
    test('return the min value or the entered array', ()=> {
        const output = min([4,3])
        expect(output).toBe(3)
    })
    
})