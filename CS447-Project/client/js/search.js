let searchinput;
let searchresult;

    searchinput = document.getElementById('search-input');
    searchresult = document.getElementById('search-result');


//============================== SEARCH ===============================
function searchUserName(){
    searchresult.style.display = "block";
   
    fetch(`http://localhost:8888/users?search=${searchinput.value}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data =>{
            searchresult.innerHTML = `<h2 >Search result</h2>`;
            data.forEach(element => {

                displayTweetsTable(element);

            });

        })
}

function displayTweetsTable(element){

    let tr = `<table id="searchtable"><tr >
    
    <td id="usrname">${element.fullname}</td>
    <td  id="follow">
    <span class="badge bg-primary rounded-pill" data-follower = "${element._id}"   onclick="addFollower(this)">follow</span>
    </td>
    </tr></table>`;
    
    searchresult.innerHTML += tr;

}

//==============================ADD FOLLOWING===============================
function addFollower(obj){
    let followerId = obj.getAttribute('data-follower');
    let userId = sessionStorage.getItem('userID');
    fetch('http://localhost:8888/users/follow',{
        method:'POST',
        body:JSON.stringify({
            userId: userId,
            followerId: followerId
        }),
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(res=>{
        location.reload()
    }).catch(err =>{
        console.log(err);
    });
}

//==============================DELETE FOLLOWING===============================

function delFollower(obj){
    let followingId = obj.getAttribute('data-unfollow');
    let userId = sessionStorage.getItem('userID');
    console.log(userId);
    fetch('http://localhost:8888/followers',{
        method:'POST',
        body:JSON.stringify({
            userId: userId,
            followId: followingId
        }),
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


