function touchRock() {
    if(userName) {
        alert("I like the attention, " + userName + ". Thank you.");
    }
    else {
        userName = prompt("What is your name?", "Please, enter you name");
        if (userName) {
            alert("It is good to meet you, " + userName + ".");
            if (navigator.cookieEnabled) 
                writeCookie("irock_username", userName, 5 * 365);
            else
                alert("The cookie is diable");
        }
    }
	document.getElementById("rockImg").src = "rock_happy.png";
    var timer1 = setTimeout("document.getElementById('rockImg').src='rock.png';", 5000);
}

function resizeRock() {
	document.getElementById("rockImg").style.height = (document.body.clientHeight - 100) * 0.7;
}

function greetUser() {
    if (navigator.cookieEnabled) {
        userName = readCookie("irock_username");
        if(userName)
            alert("Hello " + userName + ", I missed you.");
        else
            alert("Hello, I am your pet rock.");
    }
}
