export const s = 1
console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function task1(a: number) {
    return function(b: number) {
        return a+b
    }
}
task1(3)(6) //9

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

 function makeCounter() {
    let count = 1
     return  function() {
       return count++
     }
 }
let counter1 = makeCounter()
let counter2 = makeCounter()

counter1()//1
counter1()//2
counter2() // 1
counter1() //3



// let obj = {
//     //your code
// }
// if (obj.a === 1 && obj.a === 2 && obj.a === 3){
//     console.log('work');
// }


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
let task3 = (function() {
    let count = 0
    function changer(val: number) {
        count += val
    }
    return {
        increase: function() {
           changer(1)
       },
        decrease: function() {
            changer(-1)
        },
        reset: function() {
           count=0
      },
        set: function(s:number) {
           count = s
        },
        value: function() {
            return count
        }
    }
})()
task3.increase()
task3.increase()
task3.value() //2
task3.decrease()
task3.value() //1
task3.reset()
task3.value() //0
task3.set(8)
task3.value() //8

function makeCounter2(n:number) {
    let count = n
    return {
        increase: () => count++,
        decrease: () => count--,
        set: (num:number) => count= num,
        reset: () => {
            return count = 0
        },
        getCount: () => count
    }
}
let counter = makeCounter2(5)
counter.increase() //4
// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(num: number) {
    if (num === 0) return 0
    if (num === 1) return (num: number) => num

    let _arguments: number[] = []

    function helper(...args: number[]) { //псевдомасив arguments
        _arguments = [..._arguments, ...args]
        if (_arguments.length >= num){
            _arguments.length = num
            return _arguments.reduce((acc:number, number: number)=> acc+number)
        } else {
            return helper
        }
    }
    return helper
}
// @ts-ignore
console.log(superSum(3)(2)(5)(3));
// @ts-ignore
console.log(superSum(3)(2,5)(3));


function test(...args: number[]) {
    console.log(args);
}
    test (1,4,6,3,3)
// Task
//recursion
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
//1. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     С использованием формулы арифметической прогрессии.

function sumTo1(n: number){
    let some = 0
    // for (let i = 1; i <= n; i++) {
    for (let i = n; i >= 0; i--){
        some = some + i
    }
    return some
}
// sumTo1(3) // 6

// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo2(n: number):number{
    if (n === 1) return n
    return  n + sumTo2(n-1)

}
// sumTo2(100) // 5050
//Решение по формуле: sumTo(n) = n*(n+1)/2:
function sumTo3(n: number){
    return  n*(n+1)/2
}
//sumTo3(100) //5050

function sumTo(n: number, acc: number = 0):number{
    if (n === 1) return n + acc
    return  sumTo(n-1, acc + n)

}

//2. Вычислить факториал - recurs
function factorial (n: number): number{
    if (n === 1){
        return n
    }else if (n === 2){
        return n
    } else {
        return  n * factorial((n-1))
    }
}

//factorial(5) //120

function factorialSuper(n:number) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

//3. Числа Фибоначчи - Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

function fib(n:number): number {
    if (n === 1) {
        return 1
    } else {
       return  fib(n - 1) + fib(n - 2)
    }
}
// fib(3)  // 2

//4. Вывод односвязного списка.Сделайте два варианта решения: используя цикл и через рекурсию.

//5. Вывод односвязного списка в обратном порядке.Сделайте два варианта решения: используя цикл и через рекурсию.
