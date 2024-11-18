// Serie de fibonaci sin programacion dinamica
// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(9));
// console.log(fib(10));

//Momoization
// Js object, las llaves seran argumentos para la fn, el valor sera el valor retornado

// const fib = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;
//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// };

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(50));
