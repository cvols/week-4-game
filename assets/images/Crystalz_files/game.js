// crystalz

// global variables
var randomNumber;
var crystalCounter = 0;
var wins = 0;
var losses = 0;

var crystalz = {},
crystalNumbers = [0, 1, 2, 3];

// document.ready
$(document).ready(function(){

// calling randomNumber() and reload()
    reload();
    random();

// print random number from 19-120 in game box
function random(){
	$('#game-box').html(randomNumber);
};

// reload()
// clear crystalCounter
// create new randomNumber
// create new crystal values
function reload(){
	userScore();
	randomNumber = Math.floor(Math.random() * ((120-19)+1) + 19);

	for (var i = 0; i < crystalNumbers.length; i += 1){
  		crystalz[crystalNumbers[i]] = Math.floor((Math.random() * 12) + 1);;
  		console.log(crystalz[crystalNumbers[i]]);
	}
};

//userScore function print to screen 
function userScore() {
	$('#user-score-box').html(crystalCounter);
};

// win box
// win counter
	// if user score === game box
		// ++ to win counter
		// create div that alerts you win
		// reload() to reset game box # and user score #
// loss counter
	// if user score > game box
		// ++ to loss counter
		// create div that alerts you lose
		// reload() to reset game box # and user score #

// winLose counter function
function winLoseCounter(){
	if (crystalCounter === randomNumber){
		wins++;
		$('#wins').html(wins);
		$('#message').html('You win!');
		crystalCounter = 0;
		reload();
		random();
	} else if (crystalCounter >= randomNumber){
		losses++;
		$('#losses').html(losses);
		$('#message').html('You lose!');
		crystalCounter = 0;
		reload();
		random();
	}
};	

// crystals
	// assign random number from 1-12 for each crystal
	// add them to user score box #

// random # for crystals


// crystal-one
$('#crystal-one').on('click', function(){
	// clears the you win or lose message
	$('#message').empty();

	// add crystalValueOne to crystal Counter
	crystalCounter += crystalz[crystalNumbers[0]];

	// userScore update
	userScore();
	
	// winLose checker
	winLoseCounter();
});


// crystal-two
$('#crystal-two').on('click', function(){
	// clears the you win or lose message	
	$('#message').empty();

	// add crystalValueOne to crystal Counter
	crystalCounter += crystalz[crystalNumbers[1]];

	// userScore update
	userScore();
	
	// winLose checker
	winLoseCounter();
});

// crystal-three
$('#crystal-three').on('click', function(){
	// clears the you win or lose message
	$('#message').empty();

	// add crystalValueOne to crystal Counter
	crystalCounter += crystalz[crystalNumbers[2]];

	// userScore update
	userScore();
	
	// winLose checker
	winLoseCounter();
});

// crystal-four
$('#crystal-four').on('click', function(){
	// clears the you win or lose message
	$('#message').empty();

	// add crystalValueOne to crystal Counter
	crystalCounter += crystalz[crystalNumbers[3]];

	// userScore update
	userScore();
	
	// winLose checker
	winLoseCounter();
});

// end document.ready
});