export const StringLengthFrequency = (array) => {
    const arr = [...array];
    const mapCountLenght = {};
    const output = [];

    arr.forEach(str => {
        let curItems = mapCountLenght[`${str}`.length] || [];
        curItems.push(str);
        mapCountLenght[`${str}`.length] = curItems;
    });

    let max_f = 0;
    Object.keys(mapCountLenght).forEach(key => {
        if(max_f < mapCountLenght[key].length) max_f = mapCountLenght[key].length;
    });

    Object.keys(mapCountLenght).forEach(key => {
        if(mapCountLenght[key].length === max_f) output.push(mapCountLenght[key]);
    });

    return output.length <= 1 ? output?.[0] || [] : output;
}