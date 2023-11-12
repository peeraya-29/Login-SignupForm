// elements
let signUpPassInput = document.querySelector('.container .signup-box .signup-inputs #signup-password');
let signUpEye = document.querySelector('.container .signup-box .signup-inputs .fa-eye');
let signUpEyeSlash = document.querySelector('.container .signup-box .signup-inputs .fa-eye-slash');
let signUpBox = document.querySelector('.container .signup-box');
let loginBox = document.querySelector('.container .login-box');

// Function to change the password visibility
let signupPassToggle =()=>{
 if(signUpPassInput.type === 'password'){
    signUpPassInput.type = 'text'; 
    signUpEye.style.display = 'none';
    signUpEyeSlash.style.display = 'block';
 }else{
    signUpPassInput.type = 'password';  
    signUpEye.style.display = 'block';
    signUpEyeSlash.style.display = 'none';    
 }
}

// Function to switch to the login box
let loginBoxShow =()=>{
   signUpBox.style.display = 'none';  
   loginBox.style.display = 'block';
}

// Function to switch to the signup box
let createAccount =()=>{
   signUpBox.style.display = 'block';
   loginBox.style.display = 'none';        
}