$(function () {
  $.get("/foods").
    done(function (data) {
      console.log("RECEIVING RESPONSE");
      console.log("DATA", data);
      $(data).each(function (index, food) {
        var $food = $("<div>" + food.name  +' ' +  food.yumminess + "</div>");
        $("body").append($food);
      });
    });
     $("#newfood").on("submit", function (e) {
      event.preventDefault();
      var $this = $(this);
      var formData = $this.serialize();
      console.log(formData);
    $.post("/foods", formData).
      done(function (data) {
        console.log("Success!");
        var $food = $("<div class='food'>" + data.food.name + ' ' + data.food.yumminess  + "</div>");
        $("body").append($food);
      });
  });
    $(".delete").on("click", function (e) {
      console.log("help");
      var $delete =$("<button>" + "Delete" + "</button>")
      $("body").remove($delete);

    });

  }); 