// const user = {
//     username:"Lakshya",
//     hobbies:"playing with toys",

//     welcomeMessage : function(){
//       console.log(`${this.username}, happy new year to you`);
//       //console.log(this);
//     }
// }

//  //user.welcomeMessage()
// // user.username = "shiv"
// // user.welcomeMessage()
// //console.log(this);

// function chai (){
//     let username = "lakshya"
//     console.log(username);
//     /*
//     In JavaScript, the use of the this keyword within a function depends on the context in which the function is invoked. 
//     In the provided code, the chai function is a regular function, 
//     not a method of an object or a constructor. In this case, this does not refer to an object,
//      and trying to access this.username will result in undefined.

//     */
// }
// //chai()
// function regularFunction() {
//     console.log(this); // Refers to the calling context
// }

// const arrowFunction = () => {
//     console.log(this); // Inherits the value of this from the surrounding scope
// };

// regularFunction(); // Will have its own this value
// //arrowFunction(); // Inherits this from the surrounding scope

const addTwo =(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(45,23));

const addTwo2 =(n1,n2) => n1+n2   //applicable if you want to return only one statement .implicit return

console.log(addTwo2(23,67));

const object1 =(p1,p2)=>({username:"abhi"})  //if you want to return a object enclose it in a  parenthesis

console.log(object1(1,2));