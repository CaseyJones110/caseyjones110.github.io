/*

	Multiplayer version

		First click is an X
		Second click is on O

		set variable player
		if player = 1
			.text('X')
			player += 1

		if player = 2
			.text('O')
			player -= 1

*/

console.log("WORKING");


var s1 = $('#s1'),
	s2 = $('#s2'),
	s3 = $('#s3'),
	s4 = $('#s4'),
	s5 = $('#s5'),
	s6 = $('#s6'),
	s7 = $('#s7'),
	s8 = $('#s8'),
	s9 = $('#s9'),
	reset = $('#reset'),
	playerX = $('<div class="player-score"></div>'),
	playerO = $('<div class="player-score"></div>');

startGame();

function startGame () {
	player = 1;
	s1.click(playerMove);
	s2.click(playerMove);
	s3.click(playerMove);
	s4.click(playerMove);
	s5.click(playerMove);
	s6.click(playerMove);
	s7.click(playerMove);
	s8.click(playerMove);
	s9.click(playerMove);
	reset.click(resetGame);
}



function playerMove (event) {
	var move;
	var btn = $(this);
	if (player % 2 != 0) {
		move = 'X';
	} else {
		move = 'O';
	}
	btn.val(move);
	btn.off();

	if (determineWinner()) {
		// gameOver();
	} else {
		player += 1;
	}
};

function determineWinner () {
	var h2 = $('#show-winner');
	if (s1.val() == s2.val() && s2.val() == s3.val() && s1.val() != "") {
		h2.text("WINNER! Player " + s1.val() + " has won!");
	} else if (s4.val() == s5.val() && s5.val() == s6.val() && s4.val() != "") {
		h2.text("WINNER! Player " + s4.val() + " has won!");
	} else if (s7.val() == s8.val() && s8.val() == s9.val() && s7.val() != "") {
		h2.text("WINNER! Player " + s7.val() + " has won!");
	} else if (s1.val() == s4.val() && s4.val() == s7.val() && s1.val() != "") {
		h2.text("WINNER! Player " + s1.val() + " has won!");
	} else if (s2.val() == s5.val() && s5.val() == s8.val() && s2.val() != "") {
		h2.text("WINNER! Player " + s2.val() + " has won!");
	} else if (s3.val() == s6.val() && s6.val() == s9.val() && s3.val() != "") {
		h2.text("WIINER! Player " + s3.val() + " has won!");
	} else if (s1.val() == s5.val() && s5.val() == s9.val() && s1.val() != "") {
		h2.text("WINNER! Player " + s1.val() + " has won!");
	} else if (s3.val() == s5.val() && s5.val() == s7.val() && s3.val() != "") {
		h2.text("WINNER! Player " + s3.val() + " has won!");
	}
};

function gameOver() {
	s1.off();
	s2.off();
	s3.off();
	s4.off();
	s5.off();
	s6.off();
	s7.off();
	s8.off();
	s9.off();
	reset.off();
}

function resetGame () {
	player = 1;
	s1.off();
	s2.off();
	s3.off();
	s4.off();
	s5.off();
	s6.off();
	s7.off();
	s8.off();
	s9.off();
	reset.off();

	s1.val("");
	s2.val("");
	s3.val("");
	s4.val("");
	s5.val("");
	s6.val("");
	s7.val("");
	s8.val("");
	s9.val("");
	startGame();
}














