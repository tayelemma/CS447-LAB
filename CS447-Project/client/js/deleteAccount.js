window.onload = function(){
   
    
}

async function deleteAccount(){
const id = sessionStorage.getItem('userID');
    const response = await  fetch('http://localhost:8888/users/del/'+id,{
            method:'POST',
            headers:{
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
            }
      });

      const result = await response.json();
      if(!result.error){
            window.location = 'index.html';
      }else{
            console.log(result.error)
      }

      
      
}