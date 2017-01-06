$(document).ready(function() {
	var numSquares = Math.pow(parseInt(prompt("Number of squres?")), 2);
	
	createGrid(numSquares);
	
	$('#reset').click(function() {
		clearGrid();
	});
});

function createGrid(gridSize) {
	for (var i = 0; i < gridSize; i++) {
		$('.sketcher').append('<div class="square"></div>');
	};
	setSquareSize(gridSize);
	activateColor();
};

function clearGrid() {
	$('.sketcher').empty();
	var newSize = Math.pow(parseInt(prompt("Number of squres?")), 2);
	createGrid(newSize);
	setSquareSize(newSize);
	activateColor();
};

function setSquareSize(gridSize) {
	$('.square').width((500/(Math.sqrt(gridSize))-2));
	$('.square').height((500/(Math.sqrt(gridSize))-2));
};

function activateColor() {
	$('.square').mouseenter(function() {
		$(this).css('background-color', 'black');
	});
};