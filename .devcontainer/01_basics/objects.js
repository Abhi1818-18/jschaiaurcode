const mySym = Symbol("key1")

const Jsuser ={
    name : "Abhishek",
    [mySym]:"mykey1",
    age : 25,
    location : "Pune",
    Email : "abhishekgurav1818@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["Monday","Saturday"],
    
}
//console.log(Jsuser[mySym]);

//console.log(Jsuser.name)
//Object.freeze(Jsuser)  //used to freeze object values


//console.log(Jsuser);
Jsuser.greeting = function(){
    console.log("hello js user");
}
console.log(Jsuser.greeting());

Jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(Jsuser.greetingTwo())


