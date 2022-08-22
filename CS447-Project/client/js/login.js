window.onload = function(){
    document.getElementById('signin-btn').onclick = login;
}
async function login(){
  
    const response = await fetch('http://localhost:8888/login',{
        method:'POST',
        body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }),
        headers:{
            'Content-type': 'application/json'
        }
    });

    const result = await response.json();

    if(result.error){
        document.getElementById('invalid-feedback').style.display = "block";
        document.getElementById('invalid-feedback').innerHTML = result.message;
        console.log(document.getElementById('invalid-feedback'));
    }else{
       
        
        sessionStorage.setItem('accessToken', result.data.accessToken);
        sessionStorage.setItem('fullname', result.data.fullname);
        sessionStorage.setItem('username', result.data.username);
        sessionStorage.setItem('userID', result.data.userID);
       
        window.location=`home.html`;
    }
   

}
