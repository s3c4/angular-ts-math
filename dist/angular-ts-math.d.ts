export declare namespace angularMath {
    /**
     * Get const
     */
    function getPi(): number;
    function getE(): number;
    function getLn2(): number;
    function getLn10(): number;
    function getLog2E(): number;
    function getLog10E(): number;
    function getMinSafeInteger(): number;
    function getMaxSafeInteger(): number;
    /**
     * Get random
     */
    /** Example: return = 0.123456789 */
    function getRandom(): number;
    /** Example: min = 1; max = 6; return = 4 */
    function getIntegerRandomRange(min: number, max: number): number;
    function getNIntegerRandomRange(min: number, max: number, n: number): Array<number>;
    /**
     * Util
     */
    /** Example: number = 10; return = true */
    function isNumber(number: number): boolean;
    /** Example: number = 10; return = true */
    function isInteger(number: number): boolean;
    /** Example: number = 10; return = true */
    function isEven(number: number): boolean;
    /** Example: number = 10; return = false */
    function isOdd(number: number): boolean;
    /**
     * Example: number = 123; return = false
     * Example: number = 12321; return = true
     */
    function isPalindrome(number: number): boolean;
    /**
     * Convert
     */
    /** Example: number = 123; return = '123'*/
    function numberToString(number: number): string;
    /** Example: number = 26; return = 11010 */
    function numberToBinary(number: number): string;
    /** Example: number = 26; return = 32 */
    function numberToOct(number: number): string;
    /** Example: number = 26; return = 1a */
    function numberToHex(number: number): string;
    /**
     * Helper
     */
    function converter(number: number, type: string): string;
    /**
     * Number actions
     */
    /** Example: number = 10; percent = 50; return = 5; */
    function percentOfNumber(number: number, percent: number): number;
    /** Example: number = 5; return = -5; */
    function oppositeOfNumber(number: number): number;
    /** Example number = 7; div = 3; return = 1; */
    function getRest(number: number, div: number): number;
    /** Example number = 10.25; return = 10; */
    function integerOfNumber(number: number): string;
    /** Example number = 10.123456; decimals = 2; return = 10.12 */
    function getNumberWithDecimals(number: number, decimals: number): string | number;
    /** Example: number = -10; return = 10 */
    function absoluteOfNumber(number: number): number;
    /** Example: number = 10; p = 2; return = 100 */
    function powerOfNumber(number: number, p: number): number;
    /** Example: number = 100; return = 10; */
    function squareOfNumber(number: number): number;
    /** Example: number = 10; return = 2.302585092994046 */
    function logarithmOfNumber(number: number): number;
    /** Example: number = 10.3; return = 10 */
    function nearOfNumber(number: number): number;
    /** Example: number = 10.5; return = 11 */
    function nextIntegerOfNumber(number: number): number;
    /** Example: number = 10.5; return = 10 */
    function backIntegerOfNumber(number: number): number;
    /** Example: number = 123; return = 321 */
    function reverseOfNumber(number: number): number;
    /** Example: number = 12345; return = 5 */
    function lengthOfNumber(number: number): number;
    /** Example: number = 3; return = 6; */
    function factorialOfNumber(number: number): number;
    /** Example: number = 12321; figure = 1; return = 2; */
    function figureOfNumber(number: number, figure: number): number | boolean;
    /**
     * Operations
     */
    /** Example: numbers = 1, 2, 3, 4, 5; return = 15 */
    function sum(...args: number[]): number;
    /** Example: numbers = 10, 1, 2, 3; return = 4 */
    function dif(...args: number[]): number;
    /** Example: numbers = 1, 2, 3; return = 6 */
    function mul(...args: number[]): number;
    /** Example: numbers = 100, 2, 5; return = 10 */
    function div(...args: number[]): number;
    /** Example: numbers = 10, 20, 30, 40; return 10 */
    function getMinimum(...args: number[]): number;
    /** Example: numbers = 10, 20, 30, 40; return 40 */
    function getMaximum(...args: number[]): number;
    /**
     * Math
     */
    function cosNumber(number: number): number;
    function sinNumber(number: number): number;
    function tanNumber(number: number): number;
    function asinNumber(number: number): number;
    function acosNumber(number: number): number;
    function atanNumber(number: number): number;
    function sigma(min: number, max: number): number;
    function pi(min: number, max: number): number;
}
