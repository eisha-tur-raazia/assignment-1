// Write a program that calculates the result of a 
//mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
let a=10;
let c= 5;
let d = 3;
let e=2;
let f= 4;
let g =7;
let solution = (((a+c)* d-e) / (f%d) - g);
console.log(`result= ${solution}`);
//other method
let answer:number=((10+5)*3-2/(4%3)-7);
console.log(`result is:${answer}`);
