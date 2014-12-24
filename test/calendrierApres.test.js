var expect = require("expect.js");

describe("Un calendrier de l'Après", function () {
  var CalendrierApres = require("../src/calendrierApres").CalendrierApres;

  it("agrège des surprises", function () {
    var descriptionsSurprises = [
          {cheminImage: "image1.jpg", description: "Une description"},
          {cheminImage: "image2.jpg", description: "Une autre description"}],
        dateDebut = new Date("2014-12-20"),
        calendrier = new CalendrierApres(dateDebut, descriptionsSurprises),
        surprises = calendrier.surprises;

    expect(surprises.length).to.equal(2);
    expect(surprises[0].numero()).to.equal(20);
    expect(surprises[0].cheminImage).to.equal("image1.jpg");
    expect(surprises[0].description).to.equal("Une description");

    expect(surprises[1].numero()).to.equal(21);
    expect(surprises[1].cheminImage).to.equal("image2.jpg");
    expect(surprises[1].description).to.equal("Une autre description");
  });
});
