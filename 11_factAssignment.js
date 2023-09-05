const factorialOf = integer => {
    let factorial = 1;
  
    for(let i = 1; i <= integer; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  console.log(factorialOf(5));
  console.log(factorialOf(9));  
  console.log(factorialOf(11));
  console.log(factorialOf(7));
  console.log(factorialOf(12));