$(document).ready(function(){

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() ;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function() {
    $(".section").each(function() {
      if ($(this).isInViewport()) {
        var bgCol = $(this).data('background')
        $("body").css("background-color", bgCol)
        }
    });
  });


$(".infoImage").mouseover(function() {
  var tbox = "#" + $(this).attr("id") + "TextBox";
  $(tbox).css("visibility", "visible");
});

$(".infoImage").mouseout(function(){
  var tbox = "#" + $(this).attr("id") + "TextBox";
  $(tbox).css("visibility", "hidden");
});



});
