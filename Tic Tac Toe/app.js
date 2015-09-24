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

var player = 1;

var s1 = $('#s1'),
	s2 = $('#s2'),
	s3 = $('#s3'),
	s4 = $('#s4'),
	s5 = $('#s5'),
	s6 = $('#s6'),
	s7 = $('#s7'),
	s8 = $('#s8'),
	s9 = $('#s9');

s1.click(playerMove);
s2.click(playerMove);
s3.click(playerMove);
s4.click(playerMove);
s5.click(playerMove);
s6.click(playerMove);
s7.click(playerMove);
s8.click(playerMove);
s9.click(playerMove);

function playerMove (event) {
	var btn = $(this);
	if (player == 1) {
		btn.val('X');
		player += 1;
	} else {
		btn.val('O');
		player -= 1;
	};
};
