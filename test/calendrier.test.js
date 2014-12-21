var expect = require("expect.js");

describe("La fonction aujoudHuiOuAvant", function () {
  var aujourdHuiOuAvant = require("../calendrier").aujourdHuiOuAvant;

  it("détecte si le numero du volet est avant une date donnée", function () {
    expect(aujourdHuiOuAvant(25, new Date('2014-12-26'))).to.be.ok();
    expect(aujourdHuiOuAvant(26, new Date('2014-12-26'))).to.be.ok();
    expect(aujourdHuiOuAvant(27, new Date('2014-12-26'))).to.not.be.ok();
  });
});
