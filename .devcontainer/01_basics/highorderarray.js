const arr = [1,34,23,78,45]

for (const iterator of arr) {
    //console.log(iterator);
}

const names=["Abhishek","Mansi","Shraddha","Pooja","isha"]

for (const name of names) {
    //console.log(name);
}

//maps..............
//maps does not store duplicate values and remembers the insertion order
const teams = new Map()

teams.set('Abhishek',18)
teams.set('Pranav',7)
teams.set('Aditya',12)

// for (const [player,value] of teams) {
//     console.log(player,':',value)
// }

// const myObj = {
//     "game":"vice city",
//     "storage" :"1 gb"
// }
// for (const [key,value] of myObj) {
//     console.log(key,'-:',value); //myObj is not iterable
// }
//objects are not iterable with for of loop

const myObj1 = {
    "game":"vice city",
    "storage" :"1 gb"
}

// for (const key in myObj1) {
//     console.log(`${key} shortcut is for ${myObj1[key]}`);
// }


const coding =["js","java","ruby","c","c++"]

coding.forEach(function(item){
   // console.log(item);
})


// coding.forEach((val)=>{
// console.log(val);
// })

function printMe(val){
console.log(val);
}

//coding.forEach(printMe)

// coding.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
// })


