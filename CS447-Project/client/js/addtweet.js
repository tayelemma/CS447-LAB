window.onload = function(){ 
     document.getElementById('addtweetBtn').onclick = addTweet;
      if(sessionStorage.getItem('accessToken')){
       
           fetchTwites();
      }else{
          window.location='index.html';
      }
}



function addTweet(event){
    event.preventDefault();
    const userid = sessionStorage.getItem('userID');
    const username = sessionStorage.getItem('username');
    const body = document.getElementById('tweet-body');
    
    fetch('http://localhost:8888/tweets',{
        method:'POST',
        body: JSON.stringify({
            tweet: body.value,
            user: userid

        }),
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
        
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('tweet-body').value = " ";
        location.reload()
    })
}

function fetchMyTweets() {
    let id = sessionStorage.getItem('userID');

    fetch('http://localhost:8888/tweets/my/' + id, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(follower => {

            displaytweet.innerHTML += `<li>
      <div class="mytweets" style="font-weight:bolder;font-size:1rem">${follower.user.fullname}</div>
                <div class="mytweets">${str}</div> <div class="tweetsDate">${follower.createdAt}</div>
                <span class="tweetdelbtn badge bg-primary rounded-pill hide" data-deltweet=${follower._id}  onclick="delTweet(this)">delete</span>
              <div style="border:1px solid; margin-top:5px"></div></li>`

        });

    displaytweet.innerHTML = `<h4>You haven't tweeted yet</h4>`;
    document.getElementById('displayMyTweets').innerHTML = result.message;

}