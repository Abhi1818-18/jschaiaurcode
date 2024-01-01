function testNum(a){
    if(a>0){
        console.log(`given number ${a} is positive`);
        return true;
    }
    else{
        console.log("number is negitive");
        return false;
    }

}
//console.log(testNum(5));
/*
The testNum function is not explicitly returning any value. In JavaScript, 
when a function does not have a return statement,
 it implicitly returns undefined. In the provided code, 
 the testNum function logs the result to the console but does not return anything. 
 Therefore, when you call console.log(testNum(5)), 
 it logs the result of the function,
  which is undefined since the function doesn't return a value.
 To avoid seeing undefined in the output, 
 you can modify the function to explicitly return a value.
*/
function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  
  console.log(testNum(-5));
  // Expected output: "NOT positive"
  //Note that there is no elseif syntax in JavaScript.
//    However, you can write it with a space between else and if:

  

