function formatNumber(num){         //function defination
    return num.toFixed(2)
}


console.log(formatNumber(2));  //function call


const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
  };

  console.log(car.brand); //honda

  function updateBrand(obj){
    // Mutating the object is visible outside the function
    obj.brand = "toyota";
    // Try to reassign the parameter, but this won't affect
  // the variable's value outside the function
     obj = null;
  }

// Pass object reference to the function
   updateBrand(car);

   console.log(car.brand) //toyota


   function calcRectArea(length,breadth){
        let area = length *breadth
        return area
   }

    
   
    console.log(calcRectArea(5,6));


    const arr = [23,45,78,89]

    function sumOfArrayElements(getArray){
      console.log(getArray[0]+getArray[1]+getArray[2]+getArray[3]);
    }
   
    console.log(sumOfArrayElements(arr));

    const obj ={
      user:"abhi",
      price:"234"
    }

    function handleObject(anyObject){
      console.log(`Username is ${anyObject.user} and price is ${anyObject.price}`);
    }


    handleObject(obj);