//datatypes
//primitive : Number , String , Null, Undefined, Symbol,Boolean,BigInt

//Non primitive(referenced type) : array ,objects ,functions

const score = 100;//Number
const scoreValue = 100.4; //Number
const isLoggedIn = false;//Boolean
const name = null;//Null
let userName; //Undefined
const bigNumber = 23567899955432n;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);
// console.log(typeof bigNumber)

let heroes =["hanuman","Light yagami","Salaar"];

//console.log(heroes);
console.log(typeof heroes); //object

let myObj ={
    name:"Abhishek gurav",
    Height:5.9,
    weight:"90 kgs"
}

// console.log(myObj);
console.log(typeof myObj); //object

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction); //function