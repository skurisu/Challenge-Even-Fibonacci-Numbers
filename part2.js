var fibSequence = generateFib(10);

var generateFib = function(maxVal){
  var incrementer = 0;
  var sequence = [];
  var previous = 0;
  //create sequence based on max value passed through the function
  while(incrementer <= maxVal) {
    sequence.push(incrementer);
    if(previous){
      previous = sequence.length - 2;
    } else {
      previous = 1;
    } 
    incrementer+=previous;
  }
  //output sequence
  return sequence;
};


var even = filterEven(fibSequence);

var filterEven = function(sequence){
  //input sequence
  var evenNumbers = [];

  for(var q = 0; q <= sequence.length; q++) {
    if(q % 2 === 0){
      evenNumbers.push(q);

    }  
}
  return evenNumbers;
  
  //loops through the sequence 


  //output, return even numbers
};

var total = totalEven(even);

var totalEven = function(array){
  var sum;
  //sum up the array
  for(var z = 0; z <= array.length;z++){
    sum += z;
  }
  return sum;
  //output = sum of array
};