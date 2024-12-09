let toggleNavStatus = false;
function otp() {
    let getPasssword = document.querySelector("#password");
    let getSignInButton = document.querySelector("#next");
    let getPassswordValue = getPasssword.value;
    let getIncorrectError = document.querySelector("#incorrect");
    let correctUsername;
    let correctPassword;


    if (getPassswordValue == "childofgod1963") {
        getSignInButton.setAttribute("onclick", "window.location.href = '/home.html';");
        getIncorrectError.style.display = "none";

    } else if (getPassswordValue != "childofgod1963") {
        getIncorrectError.style.display = "flex";
    }



}