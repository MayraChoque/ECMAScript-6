/**
 * Default Params
 */
 function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
  }
  
  // es6
  function newFunctionES6(name = 'Oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
  }
  
  newFunctionES6();
  newFunctionES6('Ricardo', 23, 'Colombia');
  
  /**
   * Concatenation - Template Literals
   */
  let hello = 'Hello';
  let world = 'World';
  let epicPhrase = hello + ' ' + world + '!';
  
  // es6
  let epicPhraseES6 = `${hello} ${world}!`;
  
  console.log(epicPhrase);
  console.log(epicPhraseES6);


//LET y CONST, Multilínea, Spread Operator y Desestructuración

/**
 * Multiline
 */
 let lorem =
 'Mollit ea veniam ad magna. Voluptate qui commodo do commodo elit officia. \n' +
 'Sit quis mollit esse quis reprehenderit labore esse nisi.';
console.log('Before ES6 -> ', lorem);

// es6  (Enter, para sustituir \n)
let loremES6 = `Velit aliqua culpa nisi aute nulla sit.
Reprehenderit deserunt id officia excepteur excepteur
adipisicing ut sit enim dolor laboris nulla exercitation.`;
console.log(`After ES6 -> ${loremES6}`);

/**
* Destructuring
*/
let person = {
 name1: 'Oscar',
 age1: '32',
 country: 'MX'
};
console.log('Before ES6 -> ', person.name1, person.age1, person.country);

// es6
let { name1, age1, country } = person;
console.log(`After ES6 -> ${name1} ${age1} ${country}`);
console.log(name1,age1);


/**
* Spread Operator
*/
let team1 = ['Oscar', 'Julián', 'Ricardo'];
let team2 = ['Valeria', 'Yeasica', 'Camila'];
let education = ['David', 'Oscar', 'Julián', 'Ricardo', 'Valeria', 'Yeasica', 'Camila'];
console.log('Before ES6 -> ', education);

let educationES6 = ['David', ...team1, ...team2];
console.log(`After ES6 -> ${educationES6}`);

/**
* Var, Let and Const
*/
{
 var globalVar = 'Global Var';
 let globalLet = 'Global Let';
 const globalConst = 'Global Const';
 console.log(`globalLet -> ${globalLet}`);
 console.log(`globalConst -> ${globalConst}`);
}
console.log(`globalVar -> ${globalVar}`);

//Arrow Functions, Promesas y Parámetros en objetos

//Propiedad de objetos mejorada.

let name =" Alejandro";
let nick =" Alejandro-sin";

ObjES6={name, nick}; //Nos permite ahorrar código para objetos muy grandes.
console.log(ObjES6);

//ArrowFunction

const names= [
    {name:"Alejandro",nick:"Alejandro-sin"},
    {name:"etrx",nick:"xrte"}
]

//Antes se iteraba mediante map y se usaban funciones anónimas.

let lista = names.map(function(item){
    console.log(item.names);
})

//Ahora esta función anónima se reemplaza por => un arrow, flecha que apunta a.

let listaES6 = names.map(item =>console.log(item.names));

const listaES6_const = (name, nick) =>{
    //...
}

const listaES6_const_único_elemento = name =>{
   // ...
}

const square = num => num *num; // Se evita el uso de return.

// Promesas, sirven para trabajar el asincronismo y hacer peticiones a una API. 
//Cómo su nombre indica dice que algo va a suceder.

const helloPromise =() =>{
    return new Promise ((resolve,reject)=>{
        if(true){
            resolve('Resuelto');
        } else {
            reject('Rechazado');
        }
    })
}

helloPromise()
    .then(Response => console.log(Response))
    .then(() => console.log('Hola'))
    .catch(error=> console.log(error));
   
// Clases, Módulos y Generadores

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// import 

import hello from "./modulo.js";
console.log('Hello Module -> ', hello());

/**
 * Generators
 */
 function* helloWorld() {
    if (true) {
      yield 'Hello, ';
    }
  
    if (true) {
      yield 'World!';
    }
  }
  const generatorHello = helloWorld();
  console.log('generatorHello first call -> ', generatorHello.next().value);
  console.log('generatorHello second call -> ', generatorHello.next().value);
  console.log('generatorHello third call -> ', generatorHello.next().value);
