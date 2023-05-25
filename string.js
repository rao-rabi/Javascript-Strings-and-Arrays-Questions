// //String Handling

// 1. Write a js program to find length of a string.

let strLength = "Rao Rabi Khan";
console.log(`length of string is: ${strLength.length}`);

// 2. Write a js program to copy one string to another string.

let strCopy = "Hello There!";
let strCopy1 = strCopy.slice();
console.log(strCopy1);

// 3. Write a js program to concatenate two strings.

let strconc1 = "Good Morning!";
let strconc2 = "I am your fellow.";
console.log(strconc1.concat(strconc2));

// 4. Write a js program to compare two strings.

console.log(strconc1.localeCompare(strconc2));

// 5. Write a js program to convert lowercase string to uppercase.

let strCase = "hElLo";
console.log(strCase.toUpperCase());

// 6. Write a js program to convert uppercase string to lowercase.

console.log(strCase.toLowerCase());

// 7. Write a js program to toggle case of each character of a string.

let strToggle = "HeLlO";
let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Lower = "abcdefghijklmnopqrstuvwxyz";

const result = [];

for (let i = 0; i < strToggle.length; i++) {
    if (Upper.includes(strToggle[i])) {
        result.push(strToggle[i].toLowerCase());
    }
    else if (Lower.includes(strToggle[i])) {
        result.push(strToggle[i].toUpperCase());
    }
    else {
        result.push(strToggle[i]);
    }
}
console.log(result.join(''));

// 8. Write a js program to find total number of alphabets, digits or special character in a string.

let strNum = "rabirao1039@gmail.com";
let countAlphabets = 0;
let countDigits = 0;
let countSpecChra = 0;
function countNum(str) {
    for (let i = 0; i < str.length; i++) {
        if ((/[a-zA-Z]/g).test(str[i])) {
            countAlphabets++;
        }
        else if ((/[0-9]/g).test(str[i])) {
            countDigits++;
        }
        else {
            countSpecChra++;
        }
    }
    console.log(`The total Alphabets are ${countAlphabets}, total digits are ${countDigits} and total special characters are ${countSpecChra} in the string.`);

}
countNum(strNum);

// 9. Write a js program to count total number of vowels and consonants in a string.

let strvowCons = "Hello, Rao Rabi khan".toLowerCase();
let countVowels = 0;
let countConsonents = 0;
function vowCons(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let consonents = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            countVowels++;
        }
        else if (consonents.includes(str[i])) {
            countConsonents++;
        }
    }
    console.log(`The number of vowels in string is ${countVowels} and number of consonents is ${countConsonents}`);
}
vowCons(strvowCons);

// 14. Write a js program to find first occurrence of a character in a given string.

let strChar = "hello There";
let char = "e"
console.log(`First occurrence of ${char} in  given string is at index: ${strChar.indexOf(char)}`);

// 15. Write a js program to find last occurrence of a character in a given string.

function charOccur(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (char === str[i]) {
            return i;
        }
    }
    return -1;
}
console.log(`Last occurrence of ${char} in  given string is at index: ${charOccur(strChar)}`);

// 16. Write a js program to search all occurrences of a character in given string.

console.log(`The all occurences of ${char} is at the following indexes:`);
function allOccur(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            console.log(i);
        }
    }
}
allOccur(strChar);

// 17. Write a js program to count occurrences of a character in given string.

console.log(`The total number of occurences of ${char} is :`);
function allOccurCount(str) {
    let countOccur = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            countOccur++;
        }
    }
    return countOccur;
}
console.log(allOccurCount(strChar));

// 18. Write a js program to find highest frequency character in a string.



// 19. Write a js program to find lowest frequency character in a string.

// 20. Write a js program to count frequency of each character in a string.

// 21. Write a js program to remove first occurrence of a character from string.

let strRemove = "Hi I am Rao Rabi"
let remChar = "a";
function RemFirstOccur(str) {
    str.replace(remChar, " ")
    console.log(str);
}

console.log("str after removing");
RemFirstOccur(strRemove);

// 22. Write a js program to remove last occurrence of a character from string.

// 23. Write a js program to remove all occurrences of a character from string.

// 24. Write a js program to remove all repeated characters from a given string.

// 25. Write a js program to replace first occurrence of a character with another in a string.

// 26. Write a js program to replace last occurrence of a character with another in a string.

// 27. Write a js program to replace all occurrences of a character with another in a string.

// 28. Write a js program to find first occurrence of a word in a given string.

// 29. Write a js program to find last occurrence of a word in a given string.

// 30. Write a js program to search all occurrences of a word in given string.

// 31. Write a js program to count occurrences of a word in a given string.

// 32. Write a js program to remove first occurrence of a word from string.

// 33. Write a js program to remove last occurrence of a word in given string.

// 34. Write a js program to remove all occurrence of a word in given string.

// 35. Write a js program to trim leading white space characters from given string.

// 36. Write a js program to trim trailing white space characters from given string.

// 37. Write a js program to trim both leading and trailing white space characters from given string.

// 38. Write a js program to remove all extra blank spaces from given string.
