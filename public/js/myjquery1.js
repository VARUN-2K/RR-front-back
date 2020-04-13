$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top23");
        var $h = $(".pageheight")
        $nav.toggleClass('scrolled', $(this).scrollTop() > $h.height());
      });

      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
    });
      
  });