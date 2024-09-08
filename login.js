const mode = document.getElementById("mode");
const body = document.querySelector("body");
const spotify = document.getElementById("name");
const content = document.getElementById("content");
var current = 0;
const links = document.querySelectorAll("a");
const input=document.querySelectorAll(".enter input");
if(localStorage.getItem('isLogined')){
    window.location.href="http://127.0.0.1:5500/Spotify/index.html" 
}
mode.addEventListener("click", function () {
    if (!current) {
        current = 1;
        body.style.color = "black";
        content.style.backgroundColor = "white";
        spotify.style.color = "white";
        mode.style.color="white";
        for (var i = 0; i < links.length; ++i) {
            links[i].style.color="black";
            links[i].addEventListener("mouseenter",function(){
                this.style.color="green";
            })
            links[i].addEventListener("mouseleave",function(){
                this.style.color="black";
            })
        }
        for(var i=0;i<input.length;++i){
            input[i].style.backgroundColor="white";
            input[i].style.color="black";
        }
    } else {
        current = 0;
        for (var i = 0; i < links.length; ++i) {
            links[i].style.color="white";
            links[i].addEventListener("mouseenter",function(){
                this.style.color="green";
            })
            links[i].addEventListener("mouseleave",function(){
                this.style.color="white";
            })
        }
        body.style.color = "white";
        content.style.backgroundColor = "black";
    }
});

document.getElementById('loginbtn').addEventListener('click', (e)=>handleForm(e))
const email = document.getElementById("email")
const password = document.getElementById("password")
const error = document.getElementById("error")
// login 
function handleForm(e) {
    e.preventDefault();
    if(!email.value || !password.value){
        error.innerText = "Invalud Credentials."
    }else{
        if(email.value === "admin@gmail.com" && password.value === "admin"){
            localStorage.setItem("isLogined", "true")
            window.location.href="http://127.0.0.1:5500/Spotify/index.html" 
        }else{
            error.innerText = "Invalid Credentials."
        }
    }
}