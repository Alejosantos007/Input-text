var user = [];
let username = document.getElementById('username');
let password = document.getElementById('password');
let confirmar = document.getElementById('confirmar');
let textote = document.getElementById('textote');
textote.style.backgroundColor = 'greenyellow';
textote.style.color = 'black';
textote.style.borderRadius= '5px';
    function cosa () {
    if (user.value !== "" && password.value !== "") {
        textote.innerText = 'CUENTA CREADA';
    } else {
        textote.innerText = 'FALTA METER INFO';
    }
    user2 = username.value;
pass = password.value;
user.push ({user: user2, password: pass});
document.getElementById('username').value = '';
document.getElementById('password').value = '';
};
