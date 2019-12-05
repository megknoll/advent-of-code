
textFileToArray('https://megknoll.github.io/advent-of-code/day-3/input.txt');

function challenge(challengeMatrix){

}

function arrayToCoord(myArray){
    let result = [];
    myArray.forEach(function(item){
      result.push(Number(item));
    });
  return result;
}

function textFileToArray(fileName){
  //get text file
  $.get(fileName, function(data) {

    //split into wire arrays on new line
    let dataArray = data.split('/n');

    //split wire arrays into coord instructions on comma
    dataArray.forEach(function(item, index, array){
      let wire = item.split(',');
      array[index] = wire;
    });

    console.log(dataArray)
    //challenge(dataArray);

  }, 'text');
}
