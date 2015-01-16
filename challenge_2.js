exports.sumOfEvenFibonacciNumbers = function(n){
  // do your work here
  var oneFibBefore = 1;
  //variable to store value fibonacci number before current 
  var twoFibBefore = 0;
  //variable to store fibonacci number before oneFibBefore
  var current = 1;
  //starting point
  var sum = 0;

  while(current <= n){
    //while current is less than or equal to max value
    if(current === oneFibBefore + twoFibBefore){
      //if current number is equal to the sum of oneFibBefore and twoFibBefore AND is also even
      if(current % 2 === 0) {
      sum += current;
      //add to sum if even
    } 
      twoFibBefore = oneFibBefore;
      //moves twoFibBefore to to placement of oneFibBefore
      oneFibBefore = current;
      //moves oneFibBefore to placemnt of current value
    }
    current++;
    //increments current by one so we can check all numbers, includining non-fibonacci numbers.
  }
  
  return sum;
};