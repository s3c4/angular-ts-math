
export namespace angularMath {

    /**
     * Get const
     */
    export function getPi(): number { return Math.PI }
    export function getE(): number { return Math.E }
    export function getLn2(): number { return Math.LN2 }
    export function getLn10(): number { return Math.LN10 }
    export function getLog2E(): number { return Math.LOG2E }
    export function getLog10E(): number { return Math.LOG10E }
    export function getMinSafeInteger(): number { return -9007199254740991 }
    export function getMaxSafeInteger(): number { return 9007199254740991 }

    /**
     * Get random
     */
    /** Example: return = 0.123456789 */
    export function getRandom(): number { return Math.random() }
    /** Example: min = 1; max = 6; return = 4 */
    export function getIntegerRandomRange(min: number, max: number): number { return Math.floor(Math.random() * (max - min + 1) + min) }
    export function getNIntegerRandomRange(min: number, max: number, n: number): Array<number> {
        if(isInteger(min) && isInteger(max) && isInteger(n) && min < max && n > 0) {
            let arrayOfNumbers = [];
            for (let i = 0; i < n; i++) {
                arrayOfNumbers.push(getIntegerRandomRange(min, max));
            }
            return arrayOfNumbers;
        } else {
            return [];
        }
    }

    /**
     * Util
     */
    /** Example: number = 10; return = true */
    export function isNumber(number: number): boolean { return typeof number === 'number' }
    /** Example: number = 10; return = true */
    export function isInteger(number: number): boolean {return isNumber(number) && number % 1 === 0 }
    /** Example: number = 10; return = true */
    export function isEven(number: number): boolean {return isNumber(number) && number % 2 === 0 }
    /** Example: number = 10; return = false */
    export function isOdd(number: number): boolean {return isNumber(number) && number % 2 !== 0 }
    /**
     * Example: number = 123; return = false
     * Example: number = 12321; return = true
     */
    export function isPalindrome(number: number): boolean {
        if(isNumber(number)) {
            let reverseNumber = reverseOfNumber(number);
            return (isNumber(reverseNumber) && number === reverseNumber);
        } else {
            return false;
        }
    }

    /**
     * Convert
     */
    /** Example: number = 123; return = '123'*/
    export function numberToString(number: number): string { return number.toString() }
    /** Example: number = 26; return = 11010 */
    export function numberToBinary(number: number): string { return this.converter(number, 'B') }
    /** Example: number = 26; return = 32 */
    export function numberToOct(number: number): string { return this.converter(number, 'O') }
    /** Example: number = 26; return = 1a */
    export function numberToHex(number: number): string { return this.converter(number, 'H') }

    /**
     * Helper
     */
    export function converter(number: number, type: string) {
        if (number < 0) {
            number = 0xFFFFFFFF + number + 1;
        }
        number = parseInt(number.toString(), 10);

        switch(type) {
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

    /**
     * Number actions
     */
    /** Example: number = 10; percent = 50; return = 5; */
    export function percentOfNumber(number: number, percent: number): number { return (isNumber(percent) && percent >= 0) ? number * percent/100 : 0 }
    /** Example: number = 5; return = -5; */
    export function oppositeOfNumber(number: number): number { return -number; }
    /** Example number = 7; div = 3; return = 1; */
    export function getRest(number: number, div: number): number { return number % div }
    /** Example number = 10.25; return = 10; */
    export function integerOfNumber(number: number): string { return number.toFixed() }
    /** Example number = 10.123456; decimals = 2; return = 10.12 */
    export function getNumberWithDecimals(number: number, decimals: number) { return (this.isNumber(decimals) && decimals >= 0 && this.isInteger(decimals)) ? number.toFixed(decimals) : number }
    /** Example: number = -10; return = 10 */
    export function absoluteOfNumber(number: number): number { return isNumber(number) ? Math.abs(number) : 0 }
    /** Example: number = 10; p = 2; return = 100 */
    export function powerOfNumber(number: number, p: number): number { return Math.pow(number, p) }
    /** Example: number = 100; return = 10; */
    export function squareOfNumber(number: number): number { return Math.sqrt(number) }
    /** Example: number = 10; return = 2.302585092994046 */
    export function logarithmOfNumber(number: number): number { return Math.log(number) }
    /** Example: number = 10.3; return = 10 */
    export function nearOfNumber(number: number): number { return Math.round(number) }
    /** Example: number = 10.5; return = 11 */
    export function nextIntegerOfNumber(number: number): number { return Math.ceil(number) }
    /** Example: number = 10.5; return = 10 */
    export function backIntegerOfNumber(number: number): number { return Math.floor(number) }

    /** Example: number = 123; return = 321 */
    export function reverseOfNumber(number: number): number {
        if(isNumber(number)) {
            let stringNumber = numberToString(number) + '';
            return Number(stringNumber.split('').reverse().join(''));
        } else {
            return 0;
        }
    }

    /** Example: number = 12345; return = 5 */
    export function lengthOfNumber(number: number): number {
        if (isNumber(number)) {
            let length = 0;
            while (number > 0) {
                length++;
                number = backIntegerOfNumber(number / 10);
            }
            return length;
        } else {
            return 0;
        }
    }

    /** Example: number = 3; return = 6; */
    export function factorialOfNumber(number: number): number {

        if(isInteger(number)) {
            let arrayOfNumbers = [];
            while(number >= 1) {
                arrayOfNumbers.push(number);
                number--;
            }
            return this.mul(arrayOfNumbers);
        } else {
            return 0;
        }
    }

    /** Example: number = 12321; figure = 1; return = 2; */
    export function figureOfNumber(number: number, figure: number): number|boolean {
        if(isNumber(number) && isInteger(number) &&
            isNumber(figure) && isInteger(figure) &&
            figure >= 0 && figure <= 9
        ) {
            let count = 0;
            let stringNumber = numberToString(number);
            let stringFigure = numberToString(figure);
            for(let i = 0; i < stringNumber.length; i++) {
                if(stringNumber[i] === stringFigure) {
                    count++;
                }
            }
            return count;
        } else {
            return false;
        }
    }

    /**
     * Operations
     */
    /** Example: numbers = 1, 2, 3, 4, 5; return = 15 */
    export function sum(...args: number[]) {
        let sum = 0;
        if (args.length > 0) {
            args.map((number) => {
                if (isNumber(number)) {
                    sum += number;
                }
            });
        }
        return sum.toFixed(2);
    }

    /** Example: numbers = 10, 1, 2, 3; return = 4 */
    export function dif(...args: number[]) {
        let dif = args[0] || 0;
        if (args.length > 0) {
            args.map((number, index) => {
                if (isNumber(number) && index !== 0) {
                    dif -= number;
                }
            });
        }
        return dif.toFixed(2);
    }

    /** Example: numbers = 1, 2, 3; return = 6 */
    export function mul(...args: number[]) {
        let mul = 1;
        if (args.length > 0) {
            args.map(number => {
                if (isNumber(number)) {
                    mul *= number;
                }
            });
        } else {
            return 0;
        }
        return mul.toFixed(2);
    }

    /** Example: numbers = 100, 2, 5; return = 10 */
    export function div(...args: number[]) {
        let div = args[0] || 0;
        if (args.length > 0) {
            args.map((number, index) => {
                if (isNumber(number) && index !== 0) {
                    div /= number;
                }
            });
        }
        return div.toFixed(2);
    }

    /** Example: numbers = 10, 20, 30, 40; return 10 */
    export function getMinimum(...args: number[]): number { return Math.min(...args) }
    /** Example: numbers = 10, 20, 30, 40; return 40 */
    export function getMaximum(...args: number[]): number { return Math.max(...args) }

    /**
     * Math
     */
    export function cosNumber(number : number): number { return Math.cos(number) }
    export function sinNumber(number: number): number { return Math.sin(number) }
    export function tanNumber(number: number): number { return Math.tan(number) }
    export function asinNumber(number: number): number { return Math.asin(number) }
    export function acosNumber(number: number): number { return Math.acos(number) }
    export function atanNumber(number: number): number { return Math.atan(number) }
    export function sigma(min: number, max: number): number {
        if(isInteger(min) && isInteger(max) && min < max) {
            let sum = 0;
            for (let i = min; i <= max; i++) {
                sum += i;
            }
            return sum;
        } else {
            return 0;
        }
    }
    export function pi(min: number, max: number):number {
        if(isInteger(min) && isInteger(max) && min < max) {
            let mul = 1;
            for (let i = min; i <= max; i++) {
                mul *= i;
            }
            return mul;
        } else {
            return 0;
        }
    }

}