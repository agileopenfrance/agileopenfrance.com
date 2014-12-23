var objetPublic = function () {
  if (typeof(module) === 'undefined' || module.exports === undefined)
    return window;

  return module.exports;
};

(function (exports) {
  var Surprise,
      CalendrierApres = function (dateDebut, nbJours, descriptionsSurprises) {
        var i = -1,
            dateSurprise,
            descriptionSurprise;

        this.surprises = [];
        while (++i < nbJours) {
          dateSurprise = new Date(dateDebut);
          dateSurprise.setDate(dateDebut.getDate() + i),
          descriptionSurprise = descriptionsSurprises[i];

          this.surprises.push(new Surprise(
            descriptionSurprise.cheminImage,
            dateSurprise,
            descriptionSurprise.description));
        }
      };

  if (typeof(module) !== 'undefined' && module.exports) {
    Surprise = require("./surprise").Surprise;
  }

  exports.CalendrierApres = CalendrierApres;
})(objetPublic());
