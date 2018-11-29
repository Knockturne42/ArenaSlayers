var mainCharacter = document.getElementById('joueur');
var enemyDiv = document.getElementById('enemy');
var enemyAnimation = document.getElementById('enemyAnimation');
var myMaps = document.getElementsByTagName('main');
var action = 0;
myMaps[0].style.backgroundPositionX = '-250px';
myMaps[0].style.backgroundPositionY = '-100px';

document.addEventListener("keydown", debounce(function(e){
	console.log(e.keyCode);
	var key = e.keyCode;
	switch(key){
		case 38:
			console.log('haut');
			moveMap(2)
			mainCharacter.style.backgroundPositionX = '0px';
			mainCharacter.style.backgroundPositionY = '0px';
			moveEnemy(2);
			movePerso();
			enemyAttack()
			break;
		case 37:
			console.log('gauche');
			moveMap(1)
			mainCharacter.style.backgroundPositionY = '-96px';
			movePerso();
			moveEnemy(1);
			enemyAttack()
			break;
		case 39:
			console.log('droite');
			moveMap(0)
			mainCharacter.style.backgroundPositionY = '-32px';
			movePerso();
			moveEnemy(0);
			enemyAttack()
			break;
		case 40:
			console.log('bas');
			moveMap(3)
			mainCharacter.style.backgroundPositionY = '-64px';
			movePerso();
			moveEnemy(3);
			enemyAttack()
			break;
		case 68:
			console.log('def');
			break;
		case 83:
			console.log('attaque');
			attaquePerso(mainCharacter);
		default:
			console.log('rien');
			break;
	}
}, 450));

// document.addEventListener("keyup", function(e){
// 	console.log(e.keyCode);
// });

function enemyAttack() {
	var topEnemy = parseInt(enemyDiv.style.top);
	var leftEnemy = parseInt(enemyDiv.style.left);
	var topPlayer = parseInt(mainCharacter.style.top);
	var leftPlayer = parseInt(mainCharacter.style.left);
	console.log(leftEnemy+32, leftPlayer, leftEnemy, leftPlayer+32);
	if((topEnemy + 32) >= (topPlayer-32) && topEnemy <= (topPlayer + 32))
	{	
		console.log('coucou');
		attaquePerso(enemyAnimation);
	}
	if((leftEnemy + 12) >= (leftPlayer-12) && (leftEnemy -12) <= (leftPlayer + 12))
	{	
		console.log('coucou');
		attaquePerso(enemyAnimation);
	}
}

function debounce(callback, delay){
    var last;
    var timer;
    return function () {
        var context = this;
        var now = +new Date();
        var args = arguments;
        if (last && now < last + delay) {
            // le délai n'est pas écoulé on reset le timer
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                callback.apply(context, args);
            }, delay);
        } else {
            last = now;
            callback.apply(context, args);
        }
    };
}

function setPlayer() {
	mainCharacter.style.backgroundPositionX = '0px';
	mainCharacter.style.backgroundPositionY = '-64px';
	mainCharacter.style.left = "238px";
	mainCharacter.style.top = "234px";
}

function setEnemy(){
	enemyAnimation.style.backgroundPositionX = '0px';
	enemyAnimation.style.backgroundPositionY = '-64px';
	enemyDiv.style.left = "0px";
	enemyDiv.style.top = "-32px";
}

function moveMap(direction) {
	var posXActuel = parseInt(myMaps[0].style.backgroundPositionX);
	var posYActuel = parseInt(myMaps[0].style.backgroundPositionY);
	switch (direction) {
		case 0:
			myMaps[0].style.backgroundPositionX = (posXActuel-24)+'px';
			break;
		case 1:
			myMaps[0].style.backgroundPositionX = (posXActuel+24)+'px';
			break;
		case 2:
			myMaps[0].style.backgroundPositionY = (posYActuel+32)+'px';
			break;
		case 3:
			myMaps[0].style.backgroundPositionY = (posYActuel-32)+'px';
			break;
	}
}

function movePerso() {
	var posActuel = parseInt(mainCharacter.style.backgroundPositionX);
	setTimeout(function(){
		mainCharacter.style.backgroundPositionX = '-24px';
	},150);
	setTimeout(function(){
		mainCharacter.style.backgroundPositionX = '-48px';
	},300);
	setTimeout(function(){
		mainCharacter.style.backgroundPositionX = '0px';
	},450);
	// switch(posActuel){
	// 	case 0:
	// 		mainCharacter.style.backgroundPositionX = '-24px';
	// 		break;
	// 	case -24:
	// 		mainCharacter.style.backgroundPositionX = '-48px';
	// 		break;
	// 	case -48:
	// 		mainCharacter.style.backgroundPositionX = '0px';
	// 		break;
	// }
}

function moveEnemy(direction){
	var top = parseInt(enemyDiv.style.top);
	var left = parseInt(enemyDiv.style.left);
	switch (direction) {
		case 0:
			enemyDiv.style.left = (left - 24) + 'px';
			break;
		case 1:
			enemyDiv.style.left = (left + 24) + 'px';
			break;
		case 2:
			enemyDiv.style.top = (top + 32) + 'px';
			break;
		case 3:
			enemyDiv.style.top = (top - 32) + 'px';
			break;
	}
}

function attaquePerso(perso) {
	perso.style.backgroundPositionX = '-72px';
	var posActuel = parseInt(perso.style.backgroundPositionX);
	setTimeout(function(){
		perso.style.backgroundPositionX = '-96px';
	},250);
	setTimeout(function(){
		perso.style.backgroundPositionX = '-120px';
	},500);
	setTimeout(function(){
		perso.style.backgroundPositionX = '0px';
	},750);
	// switch(posActuel){
	// 	case -72:
	// 		mainCharacter.style.backgroundPositionX = '-96px';
	// 		break;
	// 	case -96:
	// 		mainCharacter.style.backgroundPositionX = '-120px';
	// 		break;
	// 	case -120:
	// 		mainCharacter.style.backgroundPositionX = '-72px';
	// 		break;
	// }
}

setPlayer();
setEnemy();