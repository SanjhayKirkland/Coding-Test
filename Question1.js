function myFunction() {
	var counter = 50;
	var connectionCountdown = setInterval(function(){
		counter--
		if(counter >= 45) {
			alert("Good");
			clearInterval(connectionCountdown);
		}
		if(counter > 0 && counter < 45) {
			alert("Fine");
			clearInterval(connectionCountdown);
		}
		else if (counter === 0) {
			alert("Terrible");
			clearInterval(connectionCountdown);
		}
	}, 100);
}
