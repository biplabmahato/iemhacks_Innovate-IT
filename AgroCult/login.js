login = [];

function redirect(ev) {
    ev.preventDefault();
    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let input = {
        "user": user,
        "email": email,
        "pass": pass
    }

    login.push(input);
    document.getElementById('user').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('cpass').value = '';

    localStorage.setItem('InputData',JSON.stringify(input));
    console.log(login);
    alert("You are successfully logged in")
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click',redirect);
})
