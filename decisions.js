// [1] if else
let age = 18;
// if (age >= 18) {
//     console.log('vote');
// } else {
//     console.log ('not vote');

// [2] else if 
let marks = 76;
// if (marks >= 80 && marks >= 95) {
//     console.log('A+');
// }
//  else if (marks >= 70 || marks =>80) {
//     console.log('A');
//  } 
//  else if (marks >= 50) {
//     console.log('Motamoti valo');
//  } 
//  else if (marks >= 40) {
//     console.log('need to improve');
//  } 
// else {
//     console.log('poor situation');
// }

// [3] switch case
switch (true) {
    case marks >= 80:
        console.log('A+');
        break;
        case marks >= 70:
        console.log('A');
        break;
    default: console.log('need improvement');
        break;
}

// [4] ternary 
// age >= 18 ? console.log('voted') : console.log('not voted');
// const result = age >= 18 ? 'voted' : 'not voted';
// console.log(result);

const result = age >= 18 || age === 20 ? 'voted' : age >= 15 && age === 17 ? 'you should wait' : 'go to home';
console.log(result);