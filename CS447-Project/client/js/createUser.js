//added
window.onload = function(){
    document.getElementById('create-btn').onclick = createAccount;
}

const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const skype = document.getElementById('skype');
const username = document.getElementById('usrname');
const password = document.getElementById('pssword');

async function createAccount(event) {
    event.preventDefault();
    document.getElementById('invalid-feedback2').style.display = "none";

    if (fullname.value && email.value && phone.value && skype.value && username.value && password.value) {
        if (password.value.length >= 8) {
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            console.log(document.getElementById('username').value);
            const response = await fetch('http://localhost:8888/users', {
                method: 'POST',
                body: JSON.stringify({
                    fullname: fullname.value,
                    email: email.value,
                    phone: phone.value,
                    skype: skype.value,
                    username: username.value,
                    password: password.value,
                    createdAt: today.toDateString()

                }),
                headers: {
                    'Content-type': 'application/json'
                }
            });

            const result = await response.json();
            if (result.error) {
                document.getElementById('invalid-feedback2').style.display = "block";
                document.getElementById('invalid-feedback2').innerHTML = `<p style="color:red">${result.message}</p>`;

            } else {

                window.location = 'index.html';
            }

        } else {
            document.getElementById('invalid-feedback2').style.display = "block";
            document.getElementById('invalid-feedback2').innerHTML = '<p style="color:red">*Password must be atleast 8 charactors</p>';
        }

    } else {
        document.getElementById('invalid-feedback2').style.display = "block";
        document.getElementById('invalid-feedback2').innerHTML = '<p style="color:red">*All Fields are required</p>';
        document.getElementById('formreset').reset()
    }
}