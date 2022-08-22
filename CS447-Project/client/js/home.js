window.onload = function (){
if (sessionStorage.getItem('accessToken')) {
  fetchTwites();
  fetchFollowers();
  fetchMyTweets();
} else {
  window.location = 'index.html';
}
}
  console.log('----------0000999999000-------');



  function scrolling() {
    console.log("scrolling");
  }





  // I try to implement this code with the prof. for Infinite scrolling
  // Problem: The following code is not even runing. 


  // const myDiv = document.getElementById("home-body");
  // myDiv.onscroll = function (event) {
  //   event.preventDefault();
  //   if (myDiv.scrollTop === (myDiv.scrollHeight - myDiv.offsetHeight)) {
  //     console.log('-----------------');
  //     fetchTwites();
  //   }
  // };





let displayDiv = document.getElementById('displayFlowers');
let displaytweet = document.getElementById('displayMyTweets');



//=============================================================
 function fetchTwites() {
  let usrid = sessionStorage.getItem('userID');
   fetch('http://localhost:8888/tweets/' + usrid, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
    }
  }).then( response=> response.json())
    .then(result => { 
      let html = "";
      result.data.forEach(twite => {
      html += `
            <div class="post">
            <div class="post__avatar">
              <img src="public/images/profile.png" alt="" />
            </div>
      
            <div class="post__body">
              <div class="post__header">
                <div class="post__headerText">
                  <h3>${twite.user.fullname}<span class="time">@${twite.createdAt}</span></h3>
                </div>
                <div class="post__headerDescription">
                  <p> ${twite.tweet}</p>
                </div>
              </div>
              
              <img src="./public/images/iconsbar.png">
            </div>
            

          </div>
            `
    });

      document.getElementById('post-twite').innerHTML = html;
      let fllname = sessionStorage.getItem('username');
      document.getElementById('welcomeUsername').innerHTML = `<h2>Welcome<a href="userinfo.html" style="text-decoration:none; color:white"> @${fllname}</a></h2>`
      document.getElementById('post-twite').innerHTML = result.message;

    })
  
  }




//=============================================================


function fetchFollowers() {
  let usrid = sessionStorage.getItem('userID');

 fetch('http://localhost:8888/followers/' + usrid, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then(result =>{
      result.data.followers.forEach(follower => {
        displayDiv.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="post__avatar2">
              <img src="public/images/profile.png" alt="" />
            </div>
                ${follower.fullname}
                <span class="badge bg-primary rounded-pill" data-unfollow=${follower._id}  onclick="delFollower(this)">Unfollow</span>
              </li> `

      });
      document.getElementById('displayFlowers').innerHTML = result.message;

    })

}




//=============================================================


 function fetchMyTweets() {
  let id = sessionStorage.getItem('userID');

   fetch('http://localhost:8888/tweets/my/' + id, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response=> response.json())
    .then(follower => {

      displaytweet.innerHTML += `<li>
              <div class="mytweets" style="font-weight:bolder;font-size:1rem">${follower.user.fullname}</div>
                <div class="mytweets">${str}</div> <div class="tweetsDate">${follower.createdAt}</div>
                <span class="tweetdelbtn badge bg-primary rounded-pill hide" data-deltweet=${follower._id}  onclick="delTweet(this)">delete</span>
              <div style="border:1px solid; margin-top:5px"></div></li>`

      });
    
      // displaytweet.innerHTML = `<h4>You haven't tweeted yet</h4>`;
      document.getElementById('displayMyTweets').innerHTML = follower.message;

    }

//==============================DELETE A TWEET ===============================

function delTweet(obj) {
  let id = obj.getAttribute('data-deltweet');
  let userId = sessionStorage.getItem('userID');
  console.log(userId);
  fetch('http://localhost:8888/tweets/del/' + id, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(res => {
    location.reload()
  }).catch(err => {
    console.log(err.message);
  });
}


//===========================================================

function touserinfo() {
  window.location = './userinfo.html'
}

const profilename = document.getElementById('profile-name');
const profileusername = document.getElementById('profileusername');

const fllname = sessionStorage.getItem('fullname');
const username = sessionStorage.getItem('username');

//profilename.innerText = fllname;
//profileusername.innerText = "@" + username;


