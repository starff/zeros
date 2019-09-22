module.exports = function zeros(expression) {
  let arr = expression.split('*');
  let counter = 0;

  let factorial = arr.filter(item => item.includes("!!") == false);
  let fact = factorial.map(function(item) {
    let value1 = +item.slice(0, -1);
    return value1;
  });
  let doubleFactorial = arr.filter(item => item.includes("!!") == true);
  let doubleFact = doubleFactorial.map(function(item) {
    let value1 = +item.slice(0, -2);
    return value1;
  });
  let zeroFactorial = fact.map(function(n) {
    let counter0 = 0;
    for (let i = 5; n/i >= 1; i *= 5)
    counter0 += Math.floor(n/i);
return counter0;
  });
  let zeroDoubleFactorial2 = doubleFact.map(function(n) {
    let counter0 = 0;
    for (let i = 10; n/i >= 1; i *= 5)
    counter0 += Math.floor(n/i);
return counter0;
  });
  let zeroDoubleFactorial1 = doubleFact.map(function(n) {
    let counter2 = 0;
    let counter5 = 0;
    let counter0 = 0;
    if ( n % 2 == 0  && n < 10) {
    	return 2;
    } else if ( n % 2 != 0 && n > 3) {
        return 5;
    } else {
    	return 0;
    };
  });
  
  counter = arraySum(zeroFactorial) + arraySum(zeroDoubleFactorial2) + arrayfunc(zeroDoubleFactorial1);
  return counter;

  
};

function arraySum(array){
  let sum = 0;
  for(let j = 0; j < array.length; j++){
      sum += array[j];
      };
  return sum;
    };

function arrayfunc(array){
  let pr = 1;
  for(let j = 0; j < array.length; j++){
      if(array[j] != 0) {
      pr *= array[j];
      };
  };
  if (pr % 1000000 == 0) {
  	return 6;
  } else if (pr % 100000 == 0){
  	return 5;
  } else if (pr % 10000 == 0){
  	return 4;
  } else if (pr % 1000 == 0){
  	return 3;
  } else if (pr % 100 == 0){
  	return 2;
  } else if (pr % 10 == 0){
  	return 1;
} else {return 0;} 
    };