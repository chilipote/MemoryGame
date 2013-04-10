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
	delete itemChoose1, itemChoose2;
	nbClick = 0;
}

function updateScoreCountView(score) {
	$("#score").html(score);
}

function enableClick (class) {
	$(".item"+itemChoose).addClass(class);
}

function disableClick (class) {
	$(".item"+itemChoose).removeClass(class);
}

