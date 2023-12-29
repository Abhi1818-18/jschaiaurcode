const tinderUser = new Object()

tinderUser.id = "Abc123"
tinderUser.name = "Abhishek"
tinderUser.location = "pune"

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))   //provide object values in array form we can use loops on this
console.log(Object.entries(tinderUser));

console.log(Object.hasOwnProperty('loction')); //tells whether certain property exist or not



const user ={
    email : "abhi@gmail.com",
    fullName:{
        Userfullname:{
            name:"abhishek gurav",
            height:'5.9'
        }
    }

}
//console.log(user.fullName.Userfullname.height);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = Object.assign(obj1,obj2)
//console.log(obj3);
// const obj3 ={...obj1,...obj2}
// console.log(obj3);


const course={
    name:"Spring boot",
    duration:"6 months",
    price : "10000"
}

const{price} = course //object deconstructing

console.log(price);

const{price:p} = course //to give small and concise name to property
console.log(p);