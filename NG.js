var p1Number = prompt("Player1 enter a number between 1-6");
if ((p1Number <1) || (p1Number >6) || isNaN(p1Number)) 
	{
		window.alert("Plz enter a number between 1-6");
	}
else {
	var p2Number = prompt("Player2 guess Player1's number");
		if (p1Number == p2Number) {window.alert("You Win!");}
    else {window.alert("U LOSE!");}
}
