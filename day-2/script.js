
textFileToArray('https://megknoll.github.io/advent-of-code/day-2/input.txt');

/*function challengeOne(challengeArray){
  // convert Array to numbers
  challengeArray = arrayToNum(challengeArray);

  challengeArray = setInputs(challengeArray, 12, 2);

  // Begin Intcode program - loops of 4
     let result = intCode(challengeArray);

  }*/


function challengeTwo(challengeArray){
  // convert Array to numbers
  //challengeArray = arrayToNum(challengeArray);
  console.log("starting array: " + challengeArray);
  let result = 0;

  for(let x = 0; x < 99; x++){
    for(let y = 0; y < 99; y++){
      let tempArray = [];
      tempArray = setInputs(challengeArray,x,y);

      console.log("before intcode call: " + tempArray);
      tempArray = setInputs(challengeArray, x, y);

      // Run IntCode
      result = intCode(tempArray);
      console.log("result: " + result);
      if(result == 19690720){
        console.log("SUCCESS - noun: " + x + " verb: " + y + " answer: " + (100*x + y));
        return;
      }

    }
  }
}


function setInputs(myArray, noun, verb){
   // Prep: before running the program,
  // replace position 1 with the value noun
  // and replace position 2 with the value verb
  let arr = Array.from(myArray);
  arr[1] = noun;
  arr[2] = verb;
  return arr;


}

function intCode(myArray){
  let arr = Array.from(myArray);
   for(let x = 0; x < arr.length; x+=4){

    if(arr[x]==99){// OpCode 99: Halt Program
      console.log("OpCode 99: Halt");
      return arr[0];
    } else if (arr[x]==1){// OpCode 1: Add

      let indexInput1 = arr[x+1];
      let indexInput2 = arr[x+2];
      let resultsIndex = arr[x+3]

      arr[resultsIndex] = arr[indexInput1] + arr[indexInput2];

    } else if (arr[x]==2){// OpCode 2: Multiply
      let indexInput1 = arr[x+1];
      let indexInput2 = arr[x+2];
      let resultsIndex = arr[x+3]

      arr[resultsIndex] = arr[indexInput1] * arr[indexInput2];

    } else {// OpCode ERROR
      console.log("Unknown OpCode: ERROR - HALTING PROGRAM");
      return "-1";
    }
   }
}

function arrayToNum(myArray){
    let result = [];
    myArray.forEach(function(item){
      result.push(Number(item));
    });
  return result;
}

function textFileToArray(fileName){
  //get text file
  $.get(fileName, function(data) {

    //split into array on comma
    let dataArray = data.split(',');
    //challengeOne(dataArray);

    dataArray = arrayToNum(dataArray);
    challengeTwo(dataArray);

  }, 'text');
}
