module.exports = function toReadable(numb) {
    const numList = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const tenList = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let hundredNumber = numb.toString().slice(0, 1);
    console.log("hundredNumber", hundredNumber);
    let tenNumber = numb.toString().slice(-2);
    console.log("tenNumber", tenNumber);
    let twoNumber = tenNumber.slice(0, 1);
    console.log("twoNumber", twoNumber);
    let firstNumber = tenNumber.slice(1);
    console.log("firstNumber", firstNumber);

    if (numb >= 100) {
        if (tenNumber === "00") {
            return `${numList[+hundredNumber]} hundred`;
        } else {
            if (0 < +tenNumber && +tenNumber < 20) {
                return `${numList[+hundredNumber]} hundred ${
                    numList[+tenNumber]
                }`;
            }

            if (20 <= +tenNumber < 100) {
                if (firstNumber === "0") {
                    return `${numList[+hundredNumber]} hundred ${
                        tenList[+twoNumber]
                    }`;
                } else if (0 < +firstNumber && +firstNumber < 10) {
                    return `${numList[+hundredNumber]} hundred ${
                        tenList[+twoNumber]
                    } ${numList[+firstNumber]}`;
                }
            }
        }
    }
    if (20 <= numb && numb < 100) {
        if (firstNumber === "0") {
            return `${tenList[+twoNumber]}`;
        } else {
            return `${tenList[+twoNumber]} ${numList[+firstNumber]}`;
        }
    }
    if (0 <= numb && numb < 20) {
        return numList[numb];
    }
};
