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

function cleanVariable () {
	delete FirstOfPair, SecondOfPair;
	nbClick = 0;
}

function updateScoreCountView(score) {
	$("#score").html(score);
}
