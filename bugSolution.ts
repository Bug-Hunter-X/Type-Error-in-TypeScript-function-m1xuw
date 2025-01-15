function printNumber(num: number): void {
  console.log(num);
}

const number = 10;
printNumber(number); 
//Or
function printNumber2(num: string | number): void {
  console.log(num);
}
printNumber2("hello");