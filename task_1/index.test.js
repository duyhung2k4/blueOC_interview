import { StringLengthFrequency } from "./index";



describe('{ StringLengthFrequency}', () => {
    test('1', () => {
        expect(StringLengthFrequency(['a', 'ab', 'abc', 'cd', 'def', 'gh', 'iii'])).toEqual([['ab', 'cd', 'gh'], ['abc', 'def', 'iii']]);
        expect(StringLengthFrequency(['one', 'two', 'three', 'four', 'five'])).toEqual([['one', 'two'], ['four', 'five']]);
        expect(StringLengthFrequency(['test', 'data', 'code', 'run', 'fun'])).toEqual(['test', 'data', 'code']);
    });

    test('2', () => {
        expect(StringLengthFrequency([])).toEqual([]);
    });

    test('3', () => {
        expect(StringLengthFrequency([''])).toEqual(['']);
    });

    test('4', () => {
        expect(StringLengthFrequency(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    });
});
