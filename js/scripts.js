//Business Logic

const beep = "Beep!"
const boop = "Boop!"
const neighbor = "Won't you be my neighbor?"

function beepBoop (input) {
    let numbers = [];
    for (let i = 0; i <= input; i++) {
      numbers.push(i.toString());
    };
  
var robogers = numbers.map(function(number) {
  console.log(number)
    if (number.includes("3")) {
      return number = neighbor;
      } else if (number.includes("2")) {
        return number = boop;
      } else if (number.includes("1")) {
        return number = beep;
      } else {
        return number;
    };
  });
  console.table(robogers)
  return robogers;
  }

//UI Logic

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#input").val());
    var result = beepBoop(input);
    $(".results").text(beepBoop);
    $(".results").show();
    $(".container").hide();
    $("#output").html();
    });
  });
  $("#reload-page").click(function() {
});
