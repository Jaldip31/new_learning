// 01-06-2022 : apply() , call() , bind()  
// when we work with function and object, we can use apply(),bind(),call() methodes.
// if we change the value of object, we can make the function using thease methodes.
// Ex : my_github
// ###################################################################################################################################

// 06-06-2022 : for...in and for...of
// let arr = ["Apple", "Orange", "Pear"];
// let obj = {name:"jaldip",age:20}

// // array
// for (let value of arr) {
//   console.log(value);                                               // Apple, Orange, Pear
// }

// for (let key in arr) {
//   console.log(arr[key]);                                          // 0 Apple, 1 Orange, 2 Pear
// }

// for (let [key,val] of arr.entries()) {
//   console.log(key,val);                                             // 0 Apple, 1 Orange, 2 Pear
// }

// // object
// for (let key in obj) {
//     console.log(key,obj[key]);                                     // name jaldip , age 20
// }

// for (let [key,val] of Object.entries(obj)) {
//   console.log(key,val);                                            // name jaldip , age 20
// }
// ###################################################################################################################################


// 08-06-2022 : localStorage , sessionStorage  
// <script>
    // setItem(key, value) – store key/value pair.
    // getItem(key) – get the value by key.
    // removeItem(key) – remove the key with its value.
    // clear() – delete everything.
    // key(index) – get the key on a given position.
    // length – the number of stored items.

    // #########################################################################################################################
    // LocalStorage
    // window.localStorage.setItem("test1", "hiiiiiiiii");
    // console.log( localStorage.getItem('test1') )

    // set key
    // localStorage.test = 2;
    
    // get key
    // console.log( localStorage.test ); // 2

    // remove key
    // delete localStorage.test;

    // Rigth Way
    // We can use JSON to store objects though:
    // localStorage.user = JSON.stringify({ name: "John" });
    // // console.log(localStorage.user);                               // {"name":"John"}
    // let user = JSON.parse(localStorage.user);
    // console.log(user);                                               // {name: 'John'}
    // console.log(user.name);                                          // John

    // Wrong Way
    // localStorage.user1 = { name: "Johnnnnn" };
    // console.log(localStorage.user1);                                 // [object Object]
    
    // console.log(localStorage.length);                                // 3
    // console.log(localStorage.clear());                               // clear all cookie
    
    
    // #########################################################################################################################
    //  sessionStorage
    //     sessionStorage.setItem('mytest', 1);
    //     console.log( sessionStorage.getItem('mytest') );                  // after refresh: 1
    // #########################################################################################################################
    
    // document.cookie = "user=John"; // update only cookie named 'user'
    // console.log(document.cookie); // show all cookies
    
//</script>
// #########################################################################################################################

// 09-06-2022 : arr change String to Number
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

// 10-06-2022 : if only one condition (if) of logic ,you would use recursion
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

// 17-06-2022 : convert local time to UTC time
// const time = "19 30"
// let [hour,minute] = time.split(" ")
// const date = new Date(`December 17, 1995 ${hour}:${minute}:00`)
// console.log(date)
// console.log(date.toUTCString())