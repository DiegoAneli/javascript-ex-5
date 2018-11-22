// Parte 1
// Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà

var studente = {
  'nome': "John",
  'cognome': "Titor",
  'eta': 28
};

for (var field in studente) {
  console.log(studente[field])
};


// Parte 2
// Array di oggetti di studenti
// Ciclare su tutti gli studenti,
// Stampare per ognuno nome e cognome.

var studenti = [
  {
    'nome': "John",
    'cognome': "Titor",
    'eta': "115"
  },
  {
    'nome': "Paolino",
    'cognome': "Paperino",
    'eta': "130"
  },
  {
    'nome': "Robin",
    'cognome': "Hood",
    'eta': "145"
  }
];

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i])
};
// pensare ad un ciclo che escluda la stampa età dove non presente




// Parte 3
// Dare all’utente 3 prompt per
// aggiungere un nuovo oggetto studente inserendo
// nome, cognome, età


var nomeInserito = prompt('Aggiuni un nuovo nome');
studente.nome = nomeInserito;

var cognomeInserito = prompt('Aggiungi un nuovo cognome');
studente.cognome = cognomeInserito;

var etaInserita = prompt("Aggiungi l\ eta");
studente.eta = etaInserita;

console.log(studente);
