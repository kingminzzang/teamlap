  $(document).ready (function () {
    // Append

    $(".make-10").on("click", function () {

      DrawCircle();
    })
     $(".make-20").on("click", function () {

      DrawCircle();
      DrawCircle();
    })
      $(".make-30").on("click", function () {

      DrawCircle();
      DrawCircle();
      DrawCircle();
    })
       $(".make-40").on("click", function () {

      DrawCircle();
      DrawCircle();
      DrawCircle();
      DrawCircle();
    })


})

  function DrawCircle() {    

      for(var i = 0; i < 10; i++ ) {

      var windowwidth = $(window).width()* Math.random()
      var windowheigth = $(window).height()* Math.random()
      $(".circle-container")
      .append("<div class='circle' style='left:"+windowwidth+"px; top:"+windowheigth+"px;'></div>")

    }

  }