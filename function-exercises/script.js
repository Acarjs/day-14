// const addition = (number1, number2) => {
//   //number1 and number2 are parameters
//   return number1 + number2;
// };

// console.log(addition(1, 2));

// const calculator_functions = [
//   (number1, number2) => {
//     return number1 + number2;
//   },

//   (number1, number2) => {
//     return number1 - number2;
//   },
//   //...
// ];

// console.log(calculator_functions[1](301, 1));

// const calculator = {
//   functions: {
//     addition: (number1, number2) => number1 + number2,
//   },
// };

// console.log(calculator.functions.addition(1, 2));

// let currentWeather = 'rainy';
// const whatShouldIDo = (weather) => {
//   if (weather == 'sunny') {
//     return () => {
//       console.log('Going for a walk');
//     };
//   } else if (weather == 'rainy') {
//     return () => {
//       console.log('Nap time');
//     };
//   }
// };

// const activity = whatShouldIDo(currentWeather);
// activity();

// const run = () => {
//   return 'running';
// };

// const move = (movement) => {
//   return console.log(movement());
// };

// move(run);

// const activateButton = (onClick) => {
//   onClick();
// };

// activateButton(() => {
//   console.log('button clicked');
// });

// function sumArray(array) {
//   if (!array || array.length <= 1) {
//     return 0;
//   } else {
//     const sortArray = array.sort((a, b) => a - b);
//     const removeMax = sortArray.pop();
//     const removeMin = sortArray.shift();
//     const total = sortArray.reduce((a, b) => a + b, 0);
//     return total;
//   }
// }

// console.log(sumArray([]));

//------------------------------------------

let number = 1;

for (let i = 0; i < 10; i++) {
  let number = i;

  // console.log(number);
}

console.log(number);

//------------------------------------------------

// let i = 1;

// for (let x = 0; x < 10; x++) {
//   var i = x;
// }

//---------------------------------------------

// let x = 1;

// const func = () => {
//   let x = 1.5;
//   return x + x;
// };

// if (x < func()) {
//   x = 0;
// }

// console.log(x);

//---------------------------------------------
