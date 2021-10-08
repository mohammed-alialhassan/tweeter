/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


    // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

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
    $('#tweet-container').append(tweetElement);
  }
};

renderTweets(data);
