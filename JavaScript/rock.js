function touchRock() {
	var userName = prompt("What is your name?", "Please, enter you name");
	var timer1 = setTimeout("document.getElementById('rockImg').src='rock.png';", 2000);

	if(userName) {
		alert("Glad to see you, " + userName + ".");
		document.getElementById("rockImg").src = "rock_happy.png";
	}
}

function resizeRock() {
	document.getElementById("rockImg").style.height = (document.body.clientHeight - 100) * 0.7;
}