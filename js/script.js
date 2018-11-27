var mainCharacter = document.getElementById('joueur');
mainCharacter.style.backgroundPositionX = '0px';
mainCharacter.style.backgroundPositionY = '-64px';

document.addEventListener("keydown", function(e){
	console.log(e.keyCode);
	var key = e.keyCode;
	switch(key){
		case 38:
			console.log('haut');
			mainCharacter.style.backgroundPositionX = '0px';
			mainCharacter.style.backgroundPositionY = '0px';
			movePerso();
			break;
		case 37:
			console.log('gauche');
			mainCharacter.style.backgroundPositionY = '-96px';
			movePerso();
			break;
		case 39:
			console.log('droite');
			mainCharacter.style.backgroundPositionY = '-32px';
			movePerso();
			break;
		case 40:
			console.log('bas');
			mainCharacter.style.backgroundPositionY = '-64px';
			movePerso();
			break;
		case 68:
			console.log('def');
			// defPerso();
			break;
		case 83:
			console.log('attaque');
			attaquePerso();
		default:
			console.log('rien');
			break;
	}
});

function movePerso() {
	var posActuel = parseInt(mainCharacter.style.backgroundPositionX);
	setTimeout(function(){
		mainCharacter.style.backgroundPositionX = '-24px';
	},250);
	setTimeout(function(){
		mainCharacter.style.backgroundPositionX = '-48px';
	},500);
	setTimeout(function(){
		mainCharacter.style.backgroundPositionX = '0px';
	},750);
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

function attaquePerso() {
	mainCharacter.style.backgroundPositionX = '-72px';
	var posActuel = parseInt(mainCharacter.style.backgroundPositionX);
	setTimeout(function(){
		mainCharacter.style.backgroundPositionX = '-96px';
	},250);
	setTimeout(function(){
		mainCharacter.style.backgroundPositionX = '-120px';
	},500);
	setTimeout(function(){
		mainCharacter.style.backgroundPositionX = '0px';
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