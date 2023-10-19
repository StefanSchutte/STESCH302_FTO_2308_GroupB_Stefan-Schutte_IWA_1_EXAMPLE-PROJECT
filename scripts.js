//import { hello as helloA } from './code-a.js';
//import { hello as helloB } from './code-b.js';


/*
//------------------------Variables and Lexical Scope---------------------------------
const valueA = 123;
const valueB = 10;
const valueC = valueA + valueB;
const valueD = valueB;

console.log(typeof valueA);
console.log(valueA, valueA.toString());

let example = 20;

const test1 = () => {
const value = 1
    console.log(value)
}
const test2 = () => {
const value = 2;
    console.log(value)
}

//closures - declare var in parent scope - access available
{
const value = 5
const test3 = () => {

    console.log(value)
}
const test4 = () => {

    console.log(value)
}
test3();
test4();
}


const valueZ = 10;

if (true){
    console.log(valueZ);

    if (true){
        console.log(valueZ)

        if (false){
            console.log(valueZ);
        }
    }
}

const exampleA = 10;

//constant cant be reassigned. let can

let exampleB = 20;
console.log(exampleB);
exampleB = 2;
console.log(exampleB);

var exampleC = 30;//dont use

if (true) {
    //const exampleB = 8;
    //console.log(exampleB);
    if (true){
        const exampleB = 3;
        console.log(exampleB)
    }
}

*/

//--------------------------CommentOut & Console.Log------------------------------------------------

//console.log(helloA, helloB)

// @ts-check

// const id = 12345
//
// /**
//  * the logged in user{@link id}
// */
// const user= 'Stefan'
//
// console.log(user)
//
// parseInt(null)

//var user = 100;

// console.warn(user);
// console.error(user);
// console.info(user);
// console.debug(user);

//throw new Error('something went wrong')



//console.log('helo world');

//global consts
const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

//console.log(number, subtract, add)

const subtractHandler = () => {
    console.log('subtract was clicked', subtract);
    const newValue = parseInt(number.value ) - STEP_AMOUNT;
    number.value = newValue;

    if (add.disabled ){
        add.disabled = false;
    }

    if (newValue <= MIN_NUMBER){
        subtract.disabled = true;
    }
    //else{
    //    subtract.disabled = false;
    //}
}
const addHandler = () => {
    console.log('add was clicked');
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    if (subtract.disabled){
        subtract.disabled = false;
    }

    if (newValue >= MAX_NUMBER){
        add.disabled = true;
    }
    //else{
    //    add.disabled = false;
    //}
}

// parseInt('123')
//(123).toString()

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);