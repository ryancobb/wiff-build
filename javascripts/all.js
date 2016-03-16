// This is where it all goes :)
$(function() {

  var $root = $('html, body');
  $('.nav li a').click(function(){
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 50
      }, 500, function () {
        window.location.hash = href;
      });
      return false;
  });


});
