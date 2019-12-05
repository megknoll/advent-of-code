textFileToArray('https://megknoll.github.io/advent-of-code/day-2/input.txt');

function challenge(challengeArray){
  var result = 0;

  challengeArray.forEach(function(item){

    // Get current module mass
    var currentMass = Number(item);
    //result += Math.floor(current/3)-2;
    console.log("module mass: " + currentMass);

    // Recursively add up required fuel for current module
    var moduleFuel = challengeTwo(currentMass);
    console.log("total: " + moduleFuel);

    // Add module fuel to total fuel
    result += moduleFuel;
  });

  // Print final answer
  console.log("Total Fuel: " + result);

}

// Recursive Fuel Calc
function challengeTwo(intialFuel){

  var result = Math.floor(intialFuel/3)-2;
  console.log(result);

  if(result <=0){
    return 0;
  } else {
    return result + challengeTwo(result);
  }

}



function textFileToArray(fileName){

  //get text file
  $.get(fileName, function(data) {

    //split into array on new lines
    var dataArray = data.split('\n');

    //clean up - remove empty strings
    var final = [];
    dataArray.forEach(function(data){
      if(data != ""){
        final.push(data);
      }


    });
    //challenge with data
    challenge(final);

  }, 'text');
}
