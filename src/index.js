module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    let rule = [["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    ["hundred"],
    ["thousand"]]
    let result = [];
    let arr = number.toString().split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr.length - i > 2) {
            result.push(`${rule[0][arr[i]]} ${rule[arr.length - i - 1][0]}`);
        }
        if (arr.length - i === 2) {
            if (Number(arr[i]) === 0) continue;
            let t = Number(arr[i] + arr[i + 1]);
            if (t <= 19) {
                result.push(`${rule[0][t]}`);
            } else {
                result.push(`${rule[1][arr[i]]} ${rule[0][arr[i + 1]]}`);
            }
            return result.join(' ').trim();
        }
        if (arr.length - i === 1) {
            result.push(`${rule[0][arr[i]]}`);
        }
    }
    return result.join(' ').trim();
}
