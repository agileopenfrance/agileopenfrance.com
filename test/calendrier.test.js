var expect = require("expect.js");

describe("La fonction voletEstAvantDate", function () {
  var voletEstAvantDate = require("../calendrier").voletEstAvantDate;

  it("détecte si le numero du volet est avant une date donnée", function () {
    expect(voletEstAvantDate(25, new Date('2014-12-26'))).to.be.ok();
    expect(voletEstAvantDate(26, new Date('2014-12-26'))).to.be.ok();
    expect(voletEstAvantDate(27, new Date('2014-12-26'))).to.not.be.ok();
    expect(voletEstAvantDate(31, new Date('2015-01-01'))).to.be.ok();
    expect(voletEstAvantDate(01, new Date('2015-01-01'))).to.be.ok();
    expect(voletEstAvantDate(02, new Date('2015-01-01'))).to.not.be.ok();
  });
});
