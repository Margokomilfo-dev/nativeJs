console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const task1 = new Promise((res, rej) => console.log('Promise is created'));
console.log('task1 = ', task1);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const task2 = new Promise((res, rej) => {
    res(console.log('Promise Data'));
});
console.log('task2 = ', task2);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const task3 = new Promise((res, rej) => {
    rej(console.log('Promise Error'));
});
console.log('task3 = ', task3);

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const task4 = new Promise((res, rej) => {
    // setTimeout(() => {
    //     res(console.log('Promise Data'))
    // }, 3000)
    setTimeout(res, 3000, 'Promise Data');
});
task4.then(res => console.log(res));
console.log('task4 = ', task4);

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type handlePromiseType = {
    promise: null | Promise<any>
    resolve: null | Function
    reject: null | Function
    onSuccess: (paramName: any) => void
    onError: (paramName: any) => void
}

const handlePromise: handlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName) => console.log(`Promise is resolved with data: ${paramName}`),
    onError: (paramName) => console.log(`Promise is rejected with error: ${paramName}`),
};

export const createPromise = () => {
    handlePromise.promise = new Promise((res, rej) => {
        handlePromise.resolve = res
        handlePromise.reject = rej
    })
    handlePromise.promise.then(res => handlePromise.onSuccess(1))
    handlePromise.promise.catch(res => handlePromise.onError(0))
    console.log(handlePromise)
}

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve()
}
export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject()
}

// @ts-ignore
window.handlePromise = handlePromise
// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const task6: Promise<string> = new Promise((res, rej) => {
    setTimeout(res, 4000, 'My name is');
});
const onSuccess = (param: any): string => {
    return param;
};
const print = (param: any): void => {
    console.log(param);
};
task6.then((res) => onSuccess(res + ' Margo ')).then((res) => print(res + '!!!'));


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promise1: Promise<Object> = new Promise((res, rej) => {
    setTimeout(res, 2000, { name: 'Anna' });
});
const promise2: Promise<Object> = new Promise((res, rej) => {
    setTimeout(res, 3000, { age: 16 });
});
const promise3: Promise<Object> = new Promise((res, rej) => {
    setTimeout(res, 4000, { city: 'Minsk' });
});


const result: Promise<Array<Object>> = Promise.all([promise1, promise2, promise3])
result.then(([a,b,c]: Array<Object>)=> ({...a, ...b, ...c})).then(console.log)
///OR =====================
result.then((data: Array<Object>)=> {
    return data.reduce((acc, item) => {
        return Object.assign(acc, item)
    }, {})
    }).then(console.log)
//====================
export default () => {
};