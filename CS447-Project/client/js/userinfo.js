
      if(sessionStorage.getItem('accessToken')){
        fetchUserInfo()
           
      }else{
          window.location='index.html';
      }


      async function fetchUserInfo(){
        let id = sessionStorage.getItem('userID');
        
        const response = await fetch('http://localhost:8888/users/info/'+id, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type':'application/json'
          }
        });
      
        const result = await response.json();
      
        if (!result.error) {
        const numFlwrs = result.data.followers.length;
        const email = result.data.email;
        const phone = result.data.phone;
        const skype = result.data.skype;
        const createdAt = result.data.createdAt;

        document.getElementById('numberOfFollwers').innerText = numFlwrs;
        document.getElementById('email').value =email ;
        document.getElementById('phone').value = phone;
        document.getElementById('skype').value = skype;
        document.getElementById('createddate').innerText = createdAt;


        } 
      
      }
      
      





      let displayDiv = document.getElementById('displayFlowers');
 let displaytweet = document.getElementById('displayMyTweets');
  if (sessionStorage.getItem('accessToken')) {
    
    fetchTwites();
    fetchFollowers();
    fetchMyTweets();
    
  } else {
    window.location = 'index.html';
  }


  //=============================================================

async function fetchTwites() {
  let usrid = sessionStorage.getItem('userID');
  const response = await fetch('http://localhost:8888/tweets/' + usrid, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
    }
  });
  const result = await response.json();
// console.log(result);
  if (!result.error) {
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
              
              
            </div>
          </div>
            `
    });
    
  } 
}

//=============================================================


async function fetchFollowers(){
  let usrid = sessionStorage.getItem('userID');
  
  const response = await fetch('http://localhost:8888/followers/'+usrid, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      'Content-Type':'application/json'
    }
  });

  const result = await response.json();

  if (!result.error) {
    
    result.data.followers.forEach(follower => {
      displayDiv.innerHTML +=`
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="post__avatar2">
              <img src="public/images/profile.png" alt="" />
            </div>
                ${follower.fullname}
                <span class="badge bg-primary rounded-pill" data-unfollow=${follower._id}  onclick="delFollower(this)">Unfollow</span>
              </li> `

    });

  } else {

    document.getElementById('displayFlowers').innerHTML = result.message;

  }

}




//=============================================================


async function fetchMyTweets(){
  let id = sessionStorage.getItem('userID');
  
  const response = await fetch('http://localhost:8888/tweets/my/'+id, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      'Content-Type':'application/json'
    }
  });

  const result = await response.json();

  if (!result.error) {
    if(result.data.length > 0){
displaytweet.innerHTML = " ";
    result.data.forEach(follower => {
      
      let str = follower.tweet;
      if(str.length > 10){str = str.substring(0,150)+"...";} 

      displaytweet.innerHTML +=`<li>
      <div class="mytweets" style="font-weight:bolder;font-size:1rem">${follower.user.fullname}</div>
                <div class="mytweets">${str}</div> <div class="tweetsDate">${follower.createdAt}</div>
                <span class="tweetdelbtn badge bg-primary rounded-pill hide" data-deltweet=${follower._id}  onclick="delTweet(this)">delete</span>
              <div style="border:1px solid; margin-top:5px"></div></li>`

    });
    }else{
      displaytweet.innerHTML = `<h4>You haven't tweeted yet</h4>`;
    }
  
    
  } else {
    document.getElementById('displayMyTweets').innerHTML = result.message;
  }

}

//==============================DELETE A TWEET ===============================

function delTweet(obj){
  let id = obj.getAttribute('data-deltweet');
  let userId = sessionStorage.getItem('userID');
  console.log(userId);
  fetch('http://localhost:8888/tweets/del/'+id,{
      method:'POST',
      headers:{
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
      }
  }).then(res => res.json()).then(res=>{
      location.reload()
  }).catch(err =>{
      console.log(err.message);
  });
}


//===========================================================

function touserinfo(){
 window.location = './userinfo.html'
}

const profilename = document.getElementById('profile-name');
const profileusername = document.getElementById('profileusername');

const fllname = sessionStorage.getItem('fullname');
const username = sessionStorage.getItem('username');

profilename.innerText = fllname;
profileusername.innerText = "@" +username; 


