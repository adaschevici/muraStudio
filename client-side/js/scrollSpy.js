$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', 'rgba(146, 89, 166, 0.6)');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
    }
});