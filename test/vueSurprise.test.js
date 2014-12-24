var expect = require("expect.js");

describe("Une surprise traitée en HTML", function () {

  it("génère le code HTML de l'image", function () {
    var codeHTMLImage = require("../src/vueSurprise").codeHTMLImage;

    expect(codeHTMLImage("image.jpg", 25, 59, 10, 20)).to.equal(
      "<div class=\"case\" style=\"left: 25%; top: 59%; width: 10%; height: 20%;\">" +
      "<div style=\"background: url('image.jpg') center; background-size: cover;\"></div>" +
      "</div>");
  });

  it("génère le code HTML du volet", function () {
    var codeHTMLVolet = require("../src/vueSurprise").codeHTMLVolet;

    expect(codeHTMLVolet(7, 25, 59, 10, 20)).to.equal(
      "<div class=\"numero\" style=\"left: 25%; top: 59%; width: 10%; height: 20%;\">" +
      "<div class=\"un-chiffre\">7</div>" +
      "</div>");

    expect(codeHTMLVolet(17, 25, 59, 10, 20)).to.equal(
      "<div class=\"numero\" style=\"left: 25%; top: 59%; width: 10%; height: 20%;\">" +
      "<div class=\"deux-chiffres\">17</div>" +
      "</div>");
  });
});

