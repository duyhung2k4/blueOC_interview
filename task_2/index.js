const SumOfTopTwoIntegers = (array) => {
    let arrayIsSoft = [...array].sort((a, b) => b - a);
    return (arrayIsSoft?.[0] || 0) + (arrayIsSoft?.[1] || 0);
}

module.exports = SumOfTopTwoIntegers;