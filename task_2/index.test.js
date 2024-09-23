const SumOfTopTwoIntegers = require("./index");



describe('SumOfTopTwoIntegers', () => {
    test('1', () => {
        expect(SumOfTopTwoIntegers([1, 4, 2, 3, 5])).toEqual(9);
        expect(SumOfTopTwoIntegers([1, 5, 2, 4, 5])).toEqual(10);
        expect(SumOfTopTwoIntegers([1, 5, 2, 5, 5])).toEqual(10);
        expect(SumOfTopTwoIntegers([1, 5, 6, 4, 5])).toEqual(11);
    });

    test('2', () => {
        expect(SumOfTopTwoIntegers([])).toEqual(0);
    });

    test('3', () => {
        expect(SumOfTopTwoIntegers([1])).toEqual(1);
    });

    test('4', () => {
        expect(SumOfTopTwoIntegers([1,2,4])).toEqual(6);
    });
});
