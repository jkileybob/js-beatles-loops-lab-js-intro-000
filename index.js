// add solution here

function theBeatlesPlay(musicians, instruments){
  const musicians = ["John", "Paul", "George", "Ringo"]
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  var array = [];
  for (var i = 0; i < musicians.length; i++); {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}
