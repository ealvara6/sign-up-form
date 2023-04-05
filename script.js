let pwd = document.getElementById("pwd");
let pwdConfirm = document.getElementById("pwd-confirm");
let invalidPwdContent = document.getElementById("invalid-pwd");


const passwordCheck = () => {
    if(pwd.value !== pwdConfirm.value) {
        invalidPwdContent.innerHTML = "*Passwords do not match";
    }
    else {
        invalidPwdContent.innerHTML = "";
    }
}

[pwd, pwdConfirm].map(element => element.addEventListener("change", () => {
    passwordCheck();
} ))