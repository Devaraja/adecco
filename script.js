// JavaScript Document

window.addEventListener('DOMContentLoaded', () => {
	generateCards('sort');
	var shuffleBtn = document.querySelector('.shuffle-button'),
		sortBtn = document.querySelector('.sort-button');

	shuffleBtn.addEventListener('click', function(){
		generateCards('shuffle');
	});
	
	sortBtn.addEventListener('click', function() {
		generateCards('sort');
	});	
	
	function generateCards(method) {
	  var count = 9;
	  var card = '',
		tempArray = [],
		number = 0;
	
	while(tempArray.length < count){
		if(method == 'sort'){
			number = tempArray.length + 1;
		}else{
			number = (Math.ceil(Math.random() * count));
		}
		if(tempArray.indexOf(number) == -1 ) {
			card += '<div class="card card_' + number + '">' + number + '</div>';
			tempArray.push(number);
		}
	}	
	document.querySelector('.cards-container').innerHTML = card;
	}
	
});


