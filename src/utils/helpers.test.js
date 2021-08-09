import * as helpers from './helpers'

describe('Roman Numerals tests', () => {
    it('toRoman method', () => {
        let result = helpers.RomanNumerals.toRoman("12")
        expect(result).toBe('XII');

        result = helpers.RomanNumerals.toRoman('1000')
        expect(result).toBe('M')

    });

    it('fromRoman method', () => {
        let result = helpers.RomanNumerals.fromRoman("VIII")
        expect(result).toBe('8')

        result = helpers.RomanNumerals.fromRoman('M')
        expect(result).toBe('1000')

    })
});