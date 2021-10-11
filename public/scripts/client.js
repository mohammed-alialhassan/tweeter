/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() { 
  $('#emptyText').hide();
  $('#tweetTooLong').hide();

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  
  //Function for creating/importing user's pic, name, handle, text of tweet, and time created
const createTweetElement = function (data) {
 let $tweet = ` 
 <article>
 <div class= "user-elements">
   <div class="user-pic">
     <img src="${escape(data.user.avatars)}"> <p>${escape(data.user.name)}</p>
   </div>
  <p>${escape(data.user.handle)}</p>
 </div>
 <content>
   ${escape(data.content.text)}
 </content>
   <footer class="text-line">
     <p> ${escape(timeago.format(data.created_at))} </p>
     <div class = "footer-icons">
       <i class="fas fa-flag"></i>
       <i class="fas fa-retweet"></i>
       <i class="fas fa-heart"></i>
     </div>
   </footer>
</article>`;

return $tweet;
};

//RenderTweets function to prepend tweets to page in order from latest-oldest
const renderTweets = function(tweets) {
  // loops through tweets
  for (const tweet of tweets) {
    const tweetElement = createTweetElement(tweet);
    const $tweetContainer = $('section#tweet-container')
    $tweetContainer.prepend(tweetElement);
  }
};

$(function() {
  //variables in place of html id/classes
  const $form = $("section.new-tweet form");
  const $tweetText = $('section.new-tweet form textarea')
  const $emptyText = $('#emptyText');
  const $longText = $('#tweetTooLong');

  //form submission request halted and replaced with serialized data
 $form.on('submit', function (event) {
  event.preventDefault();
  console.log("Someone clicked the button");


  const data = $form.serialize();
  const tweetUrl = "http://localhost:8080/tweets";
  
  if ($tweetText.val().length > 140) {
    return $longText.slideDown();
  } else if ($tweetText.val().trim() === "" ||$tweetText.val() === null) {
    return $emptyText.slideDown();
  }

  //ajax POST request
  $.ajax({data: data, url: tweetUrl, method: 'POST'})
   .then(function () {
    console.log('Success!!')
    $longText.slideUp();
    $emptyText.slideUp();
    $("#tweet-container").empty();
    $tweetText.val("");
    return loadTweets();
   });
  });
 });

 //LoadTweet function to render response to the page
 const loadTweets = function () {
   const tweetUrl = "http://localhost:8080/tweets";
   $.ajax({url: tweetUrl, method: 'GET'})
   .then(function(response) {
     return renderTweets(response);
   });
 };
loadTweets();
})