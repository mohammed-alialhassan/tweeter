/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() { 
const createTweetElement = function (data) {
 let $tweet = ` 
 <article>
 <div class= "user-elements">
   <div class="user-pic">
     <img src="${data.user.avatars}"> <p>${data.user.name}</p>
   </div>
  <p>${data.user.handle}</p>
 </div>
 <content>
   ${data.content.text}
 </content>
   <footer class="text-line">
     <p> ${timeago.format(data.created_at)} </p>
     <div class = "footer-icons">
       <i class="fas fa-flag"></i>
       <i class="fas fa-retweet"></i>
       <i class="fas fa-heart"></i>
     </div>
   </footer>
</article>`;

return $tweet;
};

const renderTweets = function(tweets) {
  // loops through tweets
  for (const tweet of tweets) {
    const tweetElement = createTweetElement(tweet);
    $('#tweet-container').prepend(tweetElement);
  }
};

$(function() {
  const $form = $("form");

 $form.on('submit', function (event) {
  event.preventDefault();
  console.log("Someone clicked the button");

  const data = $form.serialize();
  const tweetUrl = "http://localhost:8080/tweets";

  $.ajax({data: data, url: tweetUrl, method: 'POST'})
   .then(function () {
    console.log('Success!!')
    return loadTweets()
   });
  });
 });

 const loadTweets = function () {
   const tweetUrl = "http://localhost:8080/tweets";
   $.ajax({url: tweetUrl, method: 'GET'})
   .then(function(response) {
     return renderTweets(response);
   });
 };

loadTweets();
})
