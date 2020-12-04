// JQUERY
// navbar scrolling effect-- color chng
$(function () {
  $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      //console.log($(this).scrollTop());
  });
});

// JAVASCRIPT
