const getCentury = require("../katas/get-century.js")
//base case if input is an empty string return an empty string

describe("getCentury", () => {
    test("base case returns empty string when input is empty string", ()=> {
        const output = getCentury("")
        expect(output).toBe("")
    })

    test("if century ends with 1 return correct century end in st", ()=> {
        const output = getCentury(2001)
        expect(output).toBe('21st')
})

test("if century ends with 2 return correct century end in nd", ()=> {
    const output = getCentury(2101)
    expect(output).toBe('22nd')
})
test("if century ends with 3 return correct century end in rd", ()=> {
    const output = getCentury(2201)
    expect(output).toBe('23rd')
})
test("if century ends with 4, 5, 6, 7, 8, 9, 0 return correct century end in th", ()=> {
    const output1 = getCentury(2301)
    expect(output1).toBe('24th')
    const output2 = getCentury(2401)
    expect(output2).toBe('25th')
    const output3 = getCentury(2501)
    expect(output3).toBe('26th')
    const output4 = getCentury(2601)
    expect(output4).toBe('27th')
    const output5 = getCentury(2701)
    expect(output5).toBe('28th')
    const output6 = getCentury(2801)
    expect(output6).toBe('29th')
    const output7 = getCentury(9999)
    expect(output7).toBe('100th')
})

    })