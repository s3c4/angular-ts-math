# angular-ts-math
An angular repository for numbers and math.

Dependencies: 
* [typescript](https://www.npmjs.com/package/typescript)
* [tslint](https://www.npmjs.com/package/tslint)

# Content

* [Install](#install)
* [Import](#import)
* [Use](#use)
    * [Constants](#constants)
    * [Random](#random)
    * [Utils](#utils)
    * [Convert](#convert)
    * [Number actions](#number-actions)
    * [Operations](#operations)
    * [Math](#math)
* [Repository](#repository)
* [License](#license)
* [Changelog](#changelog)
    * [v1.0.7](#v107)
    * [v1.0.6](#v106)
    * [v1.0.5](#v105)

# Install
```bash
npm install angular-ts-math
```

# Import
```typescript
import { angularMath } from 'angular-ts-math';
```

# Use

##### Constants

* get the pi value `angularMath.getPi();`
* get the e value `angularMath.getE();`
* get the ln2 value `angularMath.getLn2();`
* get the ln10 value `angularMath.getLn10();`
* get the log2 of e value `angularMath.getLog2E();`
* get the log10 of e value `angularMath.getLog10E();`
* get the min safe `angularMath.getMinSafeInteger();`
* get the max sage `angularMath.getMaxSafeInteger();`

##### Random

* get random values between [0,1) `angularMath.getRandom();`
* get random integer values between the min and max `angularMath.getIntegerRandomRange(min, max);`
* get random n integers numbers between min and max  `angularMath.getNIntegerRandomRange(min, max, n);`

##### Utils

* check if the value is type number `angularMath.isNumber(number);`
* check if the number is integer `angularMath.isInteger(number);`
* check if the number is even `angularMath.isEven(number);`
* check if the number is odd `angularMath.isOdd(number);`
* check if the number is palindrome `angularMath.isPalindrome(number);`

##### Convert

* convert a number to string `angularMath.numberToString(number);`
* convert a number to binary `angularMath.numberToBinary(number);`
* convert a number to octal `angularMath.numberToOct(number);`
* convert a number to hexadecimal `angularMath.numberToHex(number);`

##### Number actions

* get x% percent of a number `angularMath.percentOfNumber(number, percent);`
* change the sign of a number `angularMath.oppositeOfNumber(number);`
* get the rest of a div from 2 numbers `angularMath.getRest(number, div);`
* get integer of a number `angularMath.integerOfNumber(number);`
* get the number with a specific number of decimals `angularMath.getNumberWithDecimals(number, decimals);`
* convert a number in a positive one `angularMath.absoluteOfNumber(number);`
* get the power of a number `angularMath.powerOfNumber(number, power);`
* get the square of a number `angularMath.squareOfNumber(number);`
* get logarithm of a number `angularMath.logarithmOfNumber(number);`
* get the nearest integer number of a number `angularMath.nearOfNumber(number);`
* get the nearest next integer number of a number `angularMath.nextIntegerOfNumber(number);`
* get the nearest back integer number of a number `angularMath.backIntegerOfNumber(number);`
* get the reverse number of a number `angularMath.reverseOfNumber(number);`
* get the length of a number `angularMath.lengthOfNumber(number);`
* count the number of a specific figure in a number `angularMath.figureOfNumber(number, figure);`
* get the factorial of an integer number `angularMath.factorialOfNumber(number);`

##### Operations

* get the sum of n numbers `angularMath.sum(n1, n2, n3, ...);`
* get the dif of n numbers, starting with the first `angularMath.dif(n1, n2, n3, ...);`
* get the mul of n numbers `angularMath.mul(n1, n2, n3, ...);`
* get the div of n numbers, starting with the first `angularMath.div(n1, n2, n3, ...);`
* get the min value of n numbers `angularMath.getMinimum(n1, n2, n3, ...);`
* get the max value of n numbers `angularMath.getMaximum(n1, n2, n3, ...);`
* get the sum between integers min and max (sigma function) `angularMath.sigma(min, max);`
* get the mul between integers min and max (pi function) `angularMath.pi(min, max);`

##### Math

* get the cos value of a number `angularMath.cosNumber(number);`
* get the sin value of a number `angularMath.sinNumber(number);`
* get the tan value of a number `angularMath.tanNumber(number);`
* get the acos value of a number `angularMath.acosNumber(number);`
* get the asin value of a number `angularMath.asinNumber(number);`
* get the atan value of a number `angularMath.atanNumber(number);`

# Repository
* [Repository](https://github.com/s3c4/angular-ts-math)

# License

[MIT](https://github.com/s3c4/angular-ts-math/blob/master/LICENSE) © [Secareanu Andrei](https://github.com/s3c4)

# Changelog

##### v1.0.7

* add the min integer safe; - [Constants](#constants)
* add the max integer safe; - [Constants](#constants)
* add the random n numbers beteen 2 integers min and max; - [Random](#random)
* add the sigma math operation; - [Operations](#operations)
* add the pi operation; - [Operations](#operations) 

##### v1.0.6

* add factorial functionality; - [Number actions](#number-actions)
* convert number from decimal to binary; - [Convert](#convert)
* convert number from decimal to octal; - [Convert](#convert)
* convert number from decimal to hexadecimal; - [Convert](#convert)

##### v1.0.5

* first release;