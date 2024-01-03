const myNums = [1,2,3,4,5,6,7,8,9,10]


const newNums = myNums
                .map((num)=>(num*10))
                .map((num)=>num+1)
                .filter((num)=>num>=40) //method chaining

//console.log(newNums)


//reduce method 

const nums = [1,2,3]

const mytotal = nums.reduce((acc,currval)=>{
console.log(`acc:${acc},currval:${currval}`);
 return acc+currval;
},0)

console.log(mytotal);

const myTotal = nums.reduce((acc,currval)=>(acc+currval),0)
console.log(myTotal);