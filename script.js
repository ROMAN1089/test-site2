const getMore = (str, num) => {
    let result = '';
    for (let i = 0; i < num; i++) {
        result = `${result}${str}`;
    }
    return result;
}

const getMoreMore = (str, num) => {
    let result = '';
    for (const char of str) {
        result = `${result}${getMore(char, num)}`;
    }
    return result;
}

let string = getMoreMore("fall", 3)
console.log(string);

string = getMoreMore(string, 3)
console.log(string);