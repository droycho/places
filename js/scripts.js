// business logic
function Places(location, landmark, timeOfYear, note) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
  this.note = note;
}
// businesslogic
// interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputtedLocation = $("input#newLocation").val();
    var inputtedLandmark = $("input#newLandmark").val();
    var inputtedTime = $("input#newTime").val();
    var inputtedNote = $("input#newNotes").val();
    var newLocation = new Places (inputtedLocation, inputtedLandmark, inputtedTime, inputtedNote);
    console.log(newLocation)
    $("ul#output").append("<li><span class='place'>" + newLocation.location + "</span></li>");

    $(".place").last().click(function(){
      $("#show-details").show();
      $("#show-details h2").text(newLocation.location);
      $(".landmark").text(newLocation.landmark);
      $(".time").text(newLocation.timeOfYear);
      $(".note").text(newLocation.note);
    });
  });

});
// interface logic
