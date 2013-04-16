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
	$("#score").html(score);
}

function updateAttemptCountView(attempt) {
	$("#attempt").html(attempt);
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



function main() {
	
	showModal();	

// CLICK ON VALID LEVEL
	$(".level-valid").click(function(){

		nbOfRow = $('input[name=nbOfRow]:checked').val();
		
		if(!levelValueExist(nbOfRow)) {
			displayError();
			return false;
		}

		var nbPairMemoryItem = nbOfRow * _nbItemOnLine / 2;
		var array1 = new Array();
		var array2 = new Array();
		
		showNbOfPairs(nbPairMemoryItem);

		_setOfMemory.sort(function() { return 0.5 - Math.random() });

		var setOfMemoryForGame = _setOfMemory.splice(0,nbPairMemoryItem);

		for (var a = setOfMemoryForGame.length; a > 0; a-- ) {
			array1.push(setOfMemoryForGame[a-1]);
			array2.push(setOfMemoryForGame[a-1]);
		}	 				
		array2.sort(function() { return 0.5 - Math.random() });

		setOfMemoryReadyToUse = array1.concat(array2);

			z = 0;

			generationGame();

			$("#levelModal").modal('hide');
	});

	// CLOSE POP UP
	$("#levelModal").on("hide",function(event) {
		var nbOfRow = $('input[name=nbOfRow]:checked').val();
				 		
		if(!levelValueExist(nbOfRow)) {
			displayError();

			// PAS DECOUPER EN FONCTION SINON LE RETURN FALSE N'EST PAS INTERPRETE
			return false;
		}
	});

	// WAIT FOR EVENT 
$(document).on("click",".item", function() {

	if (nbClick == 0 ) {
		
		FirstOfPair = $(this);
		FirstOfPair.children().slideToggle('slow');
		
		nbClick++;
		return false;
	}

		if (nbClick == 1) {
			attempt++;
			updateAttemptCountView(attempt);
			$(this).children().slideToggle('slow');
			
			SecondOfPair = $(this);

			if((FirstOfPair.data('id') != SecondOfPair.data('id')) && (FirstOfPair.data('answer') == SecondOfPair.data('answer'))) {
				
				score++;
				updateScoreCountView(score);

				window.setTimeout(removeTheClass , 1000);
				
				$(".item"+FirstOfPair.data('answer')).fadeOut('slow', function() {
					$(".item"+FirstOfPair.data('answer')).addClass('item-found');
				});
				
				cleanVariable();

			} else {

				window.setTimeout(removeTheClass , 1000);
				cleanVariable();
			}
		}
	});	
}

	