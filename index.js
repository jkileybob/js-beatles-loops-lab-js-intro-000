// add solution here
const musicians = ["John", "Paul", "George", "Ringo"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]


function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++); {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}
