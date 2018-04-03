//back-end logic//
var pPong = [];

function pingpong(num) {
  for (var x = 1; x <= num; x++) {

    if ((x % 3 == 0) && (x % 5 == 0)) {
      pPong.push('pingpong');
      // var y = true
      // console.log(y);
    } else if (x % 3 == 0) {
      pPong.push('ping');

    } else if (x % 5 == 0) {
      pPong.push('pong');

    } else {
      pPong.push(x);

    }

  };

};





//user interface logic//
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var result = parseInt($("#anyNumber").val());
    pingpong(result);
    console.log(pPong);


    pPong.forEach(function(e) {
      $(".outPut").append($("<li>").html(e));
    })




    // alert("hey");
  });




});
