
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
	player1,
	player2,
	h2 = $('#show-winner'),
	form = $('#player-name');

startGame();

function renderNames (e) {
	var h1 = $('#display-player');
	player1 = $('#p1-name').val();
	player2 = $('#p2-name').val();
	h1.text(player1 + ' marks X -- vs -- ' + player2 + ' marks O.');
	e.preventDefault();

}

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
	form.submit(renderNames);
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
		gameOver();
	} else {
		player += 1;
	}
};

function determineWinner () {
	var winner;
	var playerName;
	if (s1.val() == s2.val() && s2.val() == s3.val() && s1.val() != "") {
		winner = s1.val();
	} else if (s4.val() == s5.val() && s5.val() == s6.val() && s4.val() != "") {
		winner = s4.val();
	} else if (s7.val() == s8.val() && s8.val() == s9.val() && s7.val() != "") {
		winner = s7.val();
	} else if (s1.val() == s4.val() && s4.val() == s7.val() && s1.val() != "") {
		winner = s1.val();
	} else if (s2.val() == s5.val() && s5.val() == s8.val() && s2.val() != "") {
		winner = s2.val();
	} else if (s3.val() == s6.val() && s6.val() == s9.val() && s3.val() != "") {
		winner = s3.val();
	} else if (s1.val() == s5.val() && s5.val() == s9.val() && s1.val() != "") {
		winner = s1.val();
	} else if (s3.val() == s5.val() && s5.val() == s7.val() && s3.val() != "") {
		winner = s3.val();
	}
	if (winner == 'X') {
		playerName = player1;
	} else if (winner == 'O') {
		playerName = player2;
	}
	if (playerName) {
		h2.text('Congratulations ' + playerName + "! You've won!!");
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
	h2.text("");
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














