// https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(array1, array2){

    const testValues = () => {
  
      const array1SquaredTotal = array1.reduce( (total, number) =>  {
        return total + (number**2) 
      },0)
  
      const array2Total = array2.reduce( (total, number) =>  {
        return total + number
      },0)
      
      for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i]**2)) return false
      }
      
      return array1SquaredTotal === array2Total ? true : false
    }
    
    return array1 && array2 ? testValues() : false
}

// May 2020