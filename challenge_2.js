exports.sumOfEvenFibonacciNumbers = function(n){
  // do your work here
  // var oneFibBefore = 1;
  // //variable to store value fibonacci number before current 
  // var twoFibBefore = 0;
  // //variable to store fibonacci number before oneFibBefore
  // var current = 1;
  // //starting point
  // var sum = 0;

  // while(current <= n){
  //   //while current is less than or equal to max value
  //   if(current === oneFibBefore + twoFibBefore){
  //     //if current number is equal to the sum of oneFibBefore and twoFibBefore AND is also even
  //     if(current % 2 === 0) {
  //     sum += current;
  //     //add to sum if even
  //   } 
  //     twoFibBefore = oneFibBefore;
  //     //moves twoFibBefore to to placement of oneFibBefore
  //     oneFibBefore = current;
  //     //moves oneFibBefore to placemnt of current value
  //   }
  //   current++;
  //   //increments current by one so we can check all numbers, includining non-fibonacci numbers.
  // }
  
  // return sum;

 

  var generateFib = function(maxVal){
  var incrementer = 0;
  var sequence = [];
  var previous = 0;
  //create sequence based on max value passed through the function
  while(incrementer <= maxVal) {
    sequence.push(incrementer);
    if(previous){
      previous = sequence[sequence.length - 2];
    } else {
      previous = 1;
    } 
    incrementer+=previous;
  }
  //output sequence
  return sequence;
};

 var fibSequence = generateFib(n); 


var filterEven = function(sequence){
  //input sequence
  var evenNumbers = [];

  for(var q = 0; q <= sequence.length; q++) {
    if(sequence[q] % 2 === 0){
      evenNumbers.push(sequence[q]);
    }  
  }
  return evenNumbers;
  
};

var even = filterEven(fibSequence);



var totalEven = function(array){
  var sum = 0;
  //sum up the array
  for(var z = 0; z < array.length;z++){
    sum += array[z];
  }
  return sum;
  //output = sum of array
};

var total = totalEven(even);

return total;
};