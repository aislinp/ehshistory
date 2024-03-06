var worldle = document.getElementById('worldle');
var yeardle = document.getElementById('yeardle');

var worldleButton = document.getElementById('worldbutton');
var yeardleButton = document.getElementById('yearbutton');

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
