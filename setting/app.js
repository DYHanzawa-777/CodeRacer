let main = document.getElementById("mainContent");
let text = document.getElementById("text-to-type");
let body = document.body;

function CoralTheme() 
{
    main.style.background = "#fbb666";
    body.style.background ="#f98d44";
    text.style.color = "#55231d";


}

function BlueTheme() 
{
    main.style.background = "#7fcdff";
    body.style.background = "#064273";
    text.style.color = "white";



}function DefaultTheme() 
{
    main.style.background = "#404040";
    body.style.background = "#333333";
    text.style.color = "white";


}

// .coralStyle {
//     background-color: coral;
//     color: white;
//   }
  
//   .blueStyle {
//     background-color: blue;
//     color: white;
//   }
 
// References

let userlink = document.getElementById('userlink');
var currentuser = null;

// Gets the username and checks to see if the user wants to be kept logged in or not

function getUsername() {
    let keepLoggedIn = localStorage.getItem("keepLoggedIn");

    if (keepLoggedIn == "yes") {
        currentuser = JSON.parse(localStorage.getItem('user'));
    }
    else {
        currentuser = JSON.parse(sessionStorage.getItem('user'));
    }
}

// Loads Windows

// If the user is signed in, it will display the username under the profile icon
window.onload = function () {
    getUsername();
    if (currentuser != null) {
        userlink.innerText = currentuser.username;
        userlink.classList.replace("btn", "nav-link");
        userlink.classList.add("btn-primary");
        userlink.href = '/CodeRacer/profile/profile.html';
        link.href = 'style.css';
    }
}