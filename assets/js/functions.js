function showModal() {
	$("#levelModal").modal('show');
}

function levelValueExist(nbOfRow) {
	if(nbOfRow == undefined) {
		return false;
	}
	return true;
}

function displayError() {
	$(".modal-error").addClass("alert-error");
	$(".modal-error").html("<p>Choisissez d'abord un niveau de difficulté</p>");
}

function cleanVariable() {
	delete FirstOfPair, SecondOfPair;
	nbClick = 0;
}

function showNbOfPairs(nbOfPairs) {
	$(".nb-pair-memory-item").html(nbOfPairs);
}

function updateScoreCountView(score) {
	$(".score").html(score);
}

function generationGame() {
	for (var i = nbOfRow; i > 0; i--) {
		$("#game").prepend("<div id="+i+" class=\"row-fluid\"></div>");
		for (var j = _nbItemOnLine; j > 0; j--) {
			setOfMemoryReadyToUse[z]["question"].toString();
			$("#"+i).append("<div data-id="+z+" data-answer="+setOfMemoryReadyToUse[z]["id"]+" class=\"item item"+setOfMemoryReadyToUse[z]["id"]+" span"+_spanItem+"\"><div class=\"answer\"><p>#"+setOfMemoryReadyToUse[z]["question"].toString()+"</p></div></div>");
			z++;
		};
	};
}

function removeTheClass() {
	FirstOfPair.children().fadeOut('slow', function(){
		FirstOfPair.children().hide();
	});
	SecondOfPair.children().fadeOut('slow');
}

	