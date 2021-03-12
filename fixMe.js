/*
Ce programme est incorrect :
let list = 'Alice', 'Bob', 'Charlie', 'Craig', 'Eva'"
for (let j = 0; j <= list.length; ++i) {
  list[i] = list[i].toLowerCase()
  switch (list[i]) {
    Case ALICE:
      console.log('Alice wants to exchange with Bob')
    Case BOB:
      console.log('Bob wants to exchange with Alice')
    Case CHARLIE:
      console.log('Charlie is a generic third participant')
    Case CRAIG:
      console.log('Craig is a password cracker')
    Case EVE:
      console.log('Eve is an eavesdropper')
  }
}

Vous devez corriger le code précédent et obtenir l'affichage suivant :
Alice wants to exchange with Bob
Bob wants to exchange with Alice
Charlie is a generic third participant
Craig is a password cracker
Eve is an eavesdropper
*/

// "case" s'écrit avec un c toLowerCase et un C toUpperCase
// Il manquait un "e" au console.log d'ALICE
// Une erreur dans le prénom d'Eve

let list = ["Alice", "Bob", "Charlie", "Craig", "Eve"];
for (let i = 0; i < list.length; i++) {
  list[i] = list[i].toLowerCase();
  switch (list[i]) {
    case "alice":
      console.log("Alice wants to exchange with Bob");
      break;
    case "bob":
      console.log("Bob wants to exchange with Alice");
      break;
    case "charlie":
      console.log("Charlie is a generic third participant");
      break;
    case "craig":
      console.log("Craig is a password cracker");
      break;
    case "eve":
      console.log("Eve is an eavesdropper");
      break;
    default:
      console.log("no resultat");
  }
}

/* Output :
Alice wants to exchange with Bob
Bob wants to exchange with Alice
Charlie is a generic third participant
Craig is a password cracker
Eve is an eavesdropper
*/

/* CORRECTION SOFIANE

let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eve']
for (let i = 0; i < list.length; ++i) {
  list[i] = list[i].toLowerCase()
  switch (list[i]) {
    case 'alice':
      console.log('Alice want to exchange with Bob')
      break
    case 'bob':
      console.log('Bob want to exchange with Alice')
      break
    case 'charlie':
      console.log('Charlie is a generic third participant')
      break
    case 'craig':
      console.log('Craig is a password cracker')
      break
    case 'eve':
      console.log('Eve is an eavesdropper')
      break
  }
}
*/
