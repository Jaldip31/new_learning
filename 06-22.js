// apply() , call() , bind()  
// when we work with function and object, we can use apply(),bind(),call() methodes.
// if we change the value of object, we can make the function using thease methodes.
// Ex : my_github

// 09-06-2022
// arr change String to Number
// let arr = ["1","2","3","4","5"];
// const a = arr.map(Number)
// console.log(a);                                                                             // [ 1, 2, 3, 4, 5 ]

// arr change Number to String
// let arr = [ 1, 2, 3, 4, 5 ]
// const a = arr.map(String)                                                                      
// console.log(a);                                                                             // ['1', '2', '3', '4', '5' ]

// console.log("8"+"2");                                                                       // 82
// console.log("8"-"2");                                                                       // 6
// console.log("8"*"2");                                                                       // 16
// console.log("8"/"2");                                                                       // 4

// console.log(eval("8 + 2"));                                                                       // 10
// console.log(eval("8 - 2"));                                                                       // 6
// console.log(eval("8 * 2"));                                                                       // 16
// console.log(eval("8 / 2"));                                                                       // 4
// ###################################################################################################################################

// 10-06-2022
// if only one condition (if) of logic ,you would use recursion
// Ex : 1
// let sum=0
// for(let i=0;i<6;i++){
//     sum+=i;
// }
// console.log(sum);

// const sum = (num) => (num == 1) ? 1 : num + sum(num - 1)
// console.log(sum(5))

// Ex : 2       // 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// function persistence(num) {
//   for (var i = 0; num > 9; i++) {
//     num = num.toString().split('').reduce((t, c) => c * t);
//   }
//   return i;
// }

// const persistence = num => `${num}`.length > 1 ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * b)) : 0;
// console.log(persistence(39));
// ###################################################################################################################################

// 08-06-2022
