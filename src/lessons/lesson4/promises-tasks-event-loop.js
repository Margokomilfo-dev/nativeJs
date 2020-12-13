// just a plug
export default ()=>{};

//task 5
// console.log(1);
// function f() {
//   console.log(2);
// }
// setTimeout(()=>{
//   console.log(3);
//   let p = new Promise((res, rej) => {
//     console.log(4);
//     res();
//   });
//   p.then(() => f())
// },0);
// let l = new Promise((res, rej) => {
//   console.log(5);
//   rej();
// });
// l.then(res => console.log(res)).catch(() => console.log(6));
// console.log(7);


//task 4
// function f(num) {
//   console.log(num);
// }
// Promise.resolve(1)
//   .then(f);
// (function(){
//   console.log(2);
// })();
// console.log(3);
// new Promise((res, rej) => {
//   console.log(4);
// });
// setTimeout(f, 0, 5);




//task 3
// (function(){
//   setTimeout(()=> console.log(1), 100);
// })();
// console.log(2);
// new Promise((res, rej) => {
//   setTimeout(()=> console.log(3), 50);
// })
// function f() {
//   console.log(4);
// }
// Promise.resolve(console.log(5));

// Task 1
// setTimeout(()=> console.log(1), 0);
// console.log(2);
// (() => console.log(3))();
// Promise.resolve(console.log(4));

// Task 2
// new Promise((res, rej) => {
//   console.log(1);
// })
// new Promise((res, rej) => {
//   setTimeout(()=> console.log(2), 0); // 1
// })
// Promise.resolve(setTimeout(()=> console.log(3), 0)); // 2
// let l = Promise.resolve(6);
// l.then((res) => console.log(res))
// console.log(4);
// Promise.reject(console.log(5)).catch(err => console.log(err));
// let p = Promise.reject(5);
// p.catch((res) => console.log(res))