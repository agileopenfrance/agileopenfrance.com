var expect = require("expect.js");

describe("Le curseur de la matrice", function () {
  var Curseur = require("../src/util").Curseur;

  it("est placé au départ en haut à gauche", function () {
    var curseur = new Curseur(2, 4);

    expect(curseur.ligne).to.equal(0);
    expect(curseur.colonne).to.equal(0);
  });

  it("sait avancer à la colonne suivante", function () {
    var curseur = new Curseur(2, 4);

    curseur.avance();

    expect(curseur.ligne).to.equal(0);
    expect(curseur.colonne).to.equal(1);
  });

  it("sait revenir à la ligne après la dernière colonne", function () {
    var curseur = new Curseur(2, 0);

    curseur.avance();

    expect(curseur.ligne).to.equal(1);
    expect(curseur.colonne).to.equal(0);
  });
});
