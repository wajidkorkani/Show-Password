let inputPassword = document.getElementById('input');
let btn = document.getElementById('btn');
let showPassword = false;

let clickHandler = () => {
    showPassword = !showPassword;
    if(showPassword){
        inputPassword.type = 'text';
    }else{
        inputPassword.type = 'password';
    }
}

btn.onclick = () => clickHandler();