$(document).ready(function() {
  const EventHandler = function (element) {
    this.input = ($('#tweet-text').val().length)
  }
//------------------------------------------------
  $('#tweet-text').keyup (() => {
    this.input = ($('#tweet-text').val().length)
    const $counterUpdate = $('.counter');
    $counterUpdate.text(140 - this.input);
    if (this.input > 140) {
      $counterUpdate.css('color', 'red');
    } else {
      $counterUpdate.css('color', '#4056A1');
    }
    console.log($counterUpdate.text());
  })
});

