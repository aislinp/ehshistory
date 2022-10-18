var histordle = document.getElementById('histordle');
var worldle = document.getElementById('worldle');
var yeardle = document.getElementById('yeardle');

var histordleButton = document.getElementById('histbutton');
var worldleButton = document.getElementById('worldbutton');
var yeardleButton = document.getElementById('yearbutton');

histordleButton.addEventListener('click', hist);
function hist(){
  	if(histordle.style.display == 'block'){
		histordle.style.display = 'none';
	} else {
		histordle.style.display = 'block';
		worldle.style.display = 'none';
		yeardle.style.display = 'none';
	}
}

worldleButton.addEventListener('click', world);
function world(){
  	if(worldle.style.display == 'block'){
		worldle.style.display = 'none';
	} else {
		worldle.style.display = 'block';
		histordle.style.display = 'none';
		yeardle.style.display = 'none';
	}
}

yeardleButton.addEventListener('click', year);
function year(){
  	if(yeardle.style.display == 'block'){
		yeardle.style.display = 'none';
	} else {
		yeardle.style.display = 'block';
		histordle.style.display = 'none';
		worldle.style.display = 'none';
	}
}
