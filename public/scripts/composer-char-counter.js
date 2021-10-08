$(document).ready(function() {
  $('section.new-tweet form textarea').keyup(function() {
    const counterUpdate = $(this).siblings('div.box-for-tweets').children('output');
    const count = 140 - $(this).val().length
    counterUpdate.text(count);
    
    if (count < 0) {
      counterUpdate.addClass("neg");
    } else {
      counterUpdate.removeClass("neg");
    }
  })
});