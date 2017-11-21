"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angularMath;
(function (angularMath) {
    /**
     * Get const
     */
    function getPi() { return Math.PI; }
    angularMath.getPi = getPi;
    function getE() { return Math.E; }
    angularMath.getE = getE;
    function getLn2() { return Math.LN2; }
    angularMath.getLn2 = getLn2;
    function getLn10() { return Math.LN10; }
    angularMath.getLn10 = getLn10;
    function getLog2E() { return Math.LOG2E; }
    angularMath.getLog2E = getLog2E;
    function getLog10E() { return Math.LOG10E; }
    angularMath.getLog10E = getLog10E;
    function getMinSafeInteger() { return -9007199254740991; }
    angularMath.getMinSafeInteger = getMinSafeInteger;
    function getMaxSafeInteger() { return 9007199254740991; }
    angularMath.getMaxSafeInteger = getMaxSafeInteger;
    /**
     * Get random
     */
    /** Example: return = 0.123456789 */
    function getRandom() { return Math.random(); }
    angularMath.getRandom = getRandom;
    /** Example: min = 1; max = 6; return = 4 */
    function getIntegerRandomRange(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }
    angularMath.getIntegerRandomRange = getIntegerRandomRange;
    function getNIntegerRandomRange(min, max, n) {
        if (isInteger(min) && isInteger(max) && isInteger(n) && min < max && n > 0) {
            var arrayOfNumbers = [];
            for (var i = 0; i < n; i++) {
                arrayOfNumbers.push(getIntegerRandomRange(min, max));
            }
            return arrayOfNumbers;
        }
        else {
            return [];
        }
    }
    angularMath.getNIntegerRandomRange = getNIntegerRandomRange;
    /**
     * Util
     */
    /** Example: number = 10; return = true */
    function isNumber(number) { return typeof number === 'number'; }
    angularMath.isNumber = isNumber;
    /** Example: number = 10; return = true */
    function isInteger(number) { return isNumber(number) && number % 1 === 0; }
    angularMath.isInteger = isInteger;
    /** Example: number = 10; return = true */
    function isEven(number) { return isNumber(number) && number % 2 === 0; }
    angularMath.isEven = isEven;
    /** Example: number = 10; return = false */
    function isOdd(number) { return isNumber(number) && number % 2 !== 0; }
    angularMath.isOdd = isOdd;
    /**
     * Example: number = 123; return = false
     * Example: number = 12321; return = true
     */
    function isPalindrome(number) {
        if (isNumber(number)) {
            var reverseNumber = reverseOfNumber(number);
            return (isNumber(reverseNumber) && number === reverseNumber);
        }
        else {
            return false;
        }
    }
    angularMath.isPalindrome = isPalindrome;
    /**
     * Convert
     */
    /** Example: number = 123; return = '123'*/
    function numberToString(number) { return number.toString(); }
    angularMath.numberToString = numberToString;
    /** Example: number = 26; return = 11010 */
    function numberToBinary(number) { return this.converter(number, 'B'); }
    angularMath.numberToBinary = numberToBinary;
    /** Example: number = 26; return = 32 */
    function numberToOct(number) { return this.converter(number, 'O'); }
    angularMath.numberToOct = numberToOct;
    /** Example: number = 26; return = 1a */
    function numberToHex(number) { return this.converter(number, 'H'); }
    angularMath.numberToHex = numberToHex;
    /**
     * Helper
     */
    function converter(number, type) {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }
        number = parseInt(number.toString(), 10);
        switch (type) {
            case 'B':
                return number.toString(2);
            case 'O':
                return number.toString(8);
            case 'H':
                return number.toString(16);
            default:
                return number.toString(10);
        }
    }
    angularMath.converter = converter;
    /**
     * Number actions
     */
    /** Example: number = 10; percent = 50; return = 5; */
    function percentOfNumber(number, percent) { return (isNumber(percent) && percent >= 0) ? number * percent / 100 : 0; }
    angularMath.percentOfNumber = percentOfNumber;
    /** Example: number = 5; return = -5; */
    function oppositeOfNumber(number) { return -number; }
    angularMath.oppositeOfNumber = oppositeOfNumber;
    /** Example number = 7; div = 3; return = 1; */
    function getRest(number, div) { return number % div; }
    angularMath.getRest = getRest;
    /** Example number = 10.25; return = 10; */
    function integerOfNumber(number) { return number.toFixed(); }
    angularMath.integerOfNumber = integerOfNumber;
    /** Example number = 10.123456; decimals = 2; return = 10.12 */
    function getNumberWithDecimals(number, decimals) { return (this.isNumber(decimals) && decimals >= 0 && this.isInteger(decimals)) ? number.toFixed(decimals) : number; }
    angularMath.getNumberWithDecimals = getNumberWithDecimals;
    /** Example: number = -10; return = 10 */
    function absoluteOfNumber(number) { return isNumber(number) ? Math.abs(number) : 0; }
    angularMath.absoluteOfNumber = absoluteOfNumber;
    /** Example: number = 10; p = 2; return = 100 */
    function powerOfNumber(number, p) { return Math.pow(number, p); }
    angularMath.powerOfNumber = powerOfNumber;
    /** Example: number = 100; return = 10; */
    function squareOfNumber(number) { return Math.sqrt(number); }
    angularMath.squareOfNumber = squareOfNumber;
    /** Example: number = 10; return = 2.302585092994046 */
    function logarithmOfNumber(number) { return Math.log(number); }
    angularMath.logarithmOfNumber = logarithmOfNumber;
    /** Example: number = 10.3; return = 10 */
    function nearOfNumber(number) { return Math.round(number); }
    angularMath.nearOfNumber = nearOfNumber;
    /** Example: number = 10.5; return = 11 */
    function nextIntegerOfNumber(number) { return Math.ceil(number); }
    angularMath.nextIntegerOfNumber = nextIntegerOfNumber;
    /** Example: number = 10.5; return = 10 */
    function backIntegerOfNumber(number) { return Math.floor(number); }
    angularMath.backIntegerOfNumber = backIntegerOfNumber;
    /** Example: number = 123; return = 321 */
    function reverseOfNumber(number) {
        if (isNumber(number)) {
            var stringNumber = numberToString(number) + '';
            return Number(stringNumber.split('').reverse().join(''));
        }
        else {
            return 0;
        }
    }
    angularMath.reverseOfNumber = reverseOfNumber;
    /** Example: number = 12345; return = 5 */
    function lengthOfNumber(number) {
        if (isNumber(number)) {
            var length_1 = 0;
            while (number > 0) {
                length_1++;
                number = backIntegerOfNumber(number / 10);
            }
            return length_1;
        }
        else {
            return 0;
        }
    }
    angularMath.lengthOfNumber = lengthOfNumber;
    /** Example: number = 3; return = 6; */
    function factorialOfNumber(number) {
        if (isInteger(number)) {
            var arrayOfNumbers = [];
            while (number >= 1) {
                arrayOfNumbers.push(number);
                number--;
            }
            return this.mul(arrayOfNumbers);
        }
        else {
            return 0;
        }
    }
    angularMath.factorialOfNumber = factorialOfNumber;
    /** Example: number = 12321; figure = 1; return = 2; */
    function figureOfNumber(number, figure) {
        if (isNumber(number) && isInteger(number) &&
            isNumber(figure) && isInteger(figure) &&
            figure >= 0 && figure <= 9) {
            var count = 0;
            var stringNumber = numberToString(number);
            var stringFigure = numberToString(figure);
            for (var i = 0; i < stringNumber.length; i++) {
                if (stringNumber[i] === stringFigure) {
                    count++;
                }
            }
            return count;
        }
        else {
            return false;
        }
    }
    angularMath.figureOfNumber = figureOfNumber;
    /**
     * Operations
     */
    /** Example: numbers = 1, 2, 3, 4, 5; return = 15 */
    function sum() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var sum = 0;
        if (args.length > 0) {
            args.map(function (number) {
                if (isNumber(number)) {
                    sum += number;
                }
            });
        }
        return sum;
    }
    angularMath.sum = sum;
    /** Example: numbers = 10, 1, 2, 3; return = 4 */
    function dif() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var dif = args[0] || 0;
        if (args.length > 0) {
            args.map(function (number, index) {
                if (isNumber(number) && index !== 0) {
                    dif -= number;
                }
            });
        }
        return dif;
    }
    angularMath.dif = dif;
    /** Example: numbers = 1, 2, 3; return = 6 */
    function mul() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var mul = 1;
        if (args.length > 0) {
            args.map(function (number) {
                if (isNumber(number)) {
                    mul *= number;
                }
            });
        }
        else {
            return 0;
        }
        return mul;
    }
    angularMath.mul = mul;
    /** Example: numbers = 100, 2, 5; return = 10 */
    function div() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var div = args[0] || 0;
        if (args.length > 0) {
            args.map(function (number, index) {
                if (isNumber(number) && index !== 0) {
                    div /= number;
                }
            });
        }
        return div;
    }
    angularMath.div = div;
    /** Example: numbers = 10, 20, 30, 40; return 10 */
    function getMinimum() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Math.min.apply(Math, args);
    }
    angularMath.getMinimum = getMinimum;
    /** Example: numbers = 10, 20, 30, 40; return 40 */
    function getMaximum() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Math.max.apply(Math, args);
    }
    angularMath.getMaximum = getMaximum;
    /**
     * Math
     */
    function cosNumber(number) { return Math.cos(number); }
    angularMath.cosNumber = cosNumber;
    function sinNumber(number) { return Math.sin(number); }
    angularMath.sinNumber = sinNumber;
    function tanNumber(number) { return Math.tan(number); }
    angularMath.tanNumber = tanNumber;
    function asinNumber(number) { return Math.asin(number); }
    angularMath.asinNumber = asinNumber;
    function acosNumber(number) { return Math.acos(number); }
    angularMath.acosNumber = acosNumber;
    function atanNumber(number) { return Math.atan(number); }
    angularMath.atanNumber = atanNumber;
    function sigma(min, max) {
        if (isInteger(min) && isInteger(max) && min < max) {
            var sum_1 = 0;
            for (var i = min; i <= max; i++) {
                sum_1 += i;
            }
            return sum_1;
        }
        else {
            return 0;
        }
    }
    angularMath.sigma = sigma;
    function pi(min, max) {
        if (isInteger(min) && isInteger(max) && min < max) {
            var mul_1 = 1;
            for (var i = min; i <= max; i++) {
                mul_1 *= i;
            }
            return mul_1;
        }
        else {
            return 0;
        }
    }
    angularMath.pi = pi;
})(angularMath = exports.angularMath || (exports.angularMath = {}));
