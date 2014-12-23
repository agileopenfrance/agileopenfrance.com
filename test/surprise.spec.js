var expect = require("expect.js");

describe("Une surprise du calendrier de l'apres", function () {
  var  Surprise = require("../src/surprise").Surprise;

  it("montre une image associée quand on l'ouvre", function () {
    var cheminImage = "image.jpg",
        surprise = new Surprise(cheminImage);

    expect(surprise.ouvre()).to.equal("image.jpg");
  });

  it("vérifie qu'elle est ouvrable en fonction de la date", function () {
    var leJourJ = new Date("2014-12-20"),
        laVeille = new Date("2014-12-19"),
        leLendemain = new Date("2014-12-21"),
        surprise = new Surprise("", leJourJ);

    expect(surprise.estOuvrable(laVeille)).to.not.be.ok();
    expect(surprise.estOuvrable(leJourJ)).to.be.ok();
    expect(surprise.estOuvrable(leLendemain)).to.be.ok();
  });

  it("connaît son numéro", function () {
    var surprise = new Surprise("", new Date("2014-12-21"));

    expect(surprise.numero()).to.equal(21);
  });
});
