


var win=0;
var loss=0
var tie=0;
var options=["r","p","s"];
alert("Press R, P or S to start the game");

document.onkeyup= function(event){

	var userChoice=event.key;
	var computerChoice= options[Math.floor(Math.random() *3)];

	if (userChoice==="r" || userChoice==="p" || userChoice==="s") {
		if (userChoice==="r") {
			if (computerChoice==="r") 
				tie++;
			if (computerChoice==="p") 
				loss++;
			if (computerChoice==="s") 
				win++;
		}
		if (userChoice==="p") {
			if (computerChoice==="p") 
				tie++;
			if (computerChoice==="r") 
				win++;
			if (computerChoice==="s") 
				loss++;
		}
		if (userChoice==="s") {
			if (computerChoice==="p")
				win++;
			if (computerChoice==="r") 
				loss++;
			if (computerChoice==="s") 
				tie++;
		}
	var pageContext="<p>You chose:  "+userChoice+"</p><p>Computer chose:  "+computerChoice+"</p><p>Wins: "+win+"</p><p>Losses: "+loss+"</p><p>Ties: "+tie+"</p>";
	document.querySelector("#game").innerHTML=pageContext;


	}
	else
		alert("Please insert a valid input (R, P or S key)");
}





