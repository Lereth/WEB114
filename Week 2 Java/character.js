	alert("Welcome to the Adventure Realm! Lets create your hero!");
	
	const characterName = prompt("What is your character's name?");
	
	const pet = prompt(`What kind of pet does ${characterName} have?`);
	
	const superpower = prompt(`What is ${characterName} special superpower?`); 

	const likesFighting = confirm(`Does ${characterName} like fighting monsters? OK for YES and Cancel for no`);
	
	alert(`Gathering magic for ${characterName}... almost ready!`); 
	
	
	
	
	
	alert(`Your Adventure Hero

	
	
	
	Name: ${characterName}
	
	Pet: ${pet}
	
	Superpower: ${superpower}
	
	Monster figter? ${likesFighting ? "Yes" : "No"}
	
	In a faraway land, ${characterName} travels with a loyal pet ${pet},
	using the incredible power of ${superpower} to protect the realms.
	Legends say that ${characterName} an their ${pet} will shape the future of the kingdom!`); 