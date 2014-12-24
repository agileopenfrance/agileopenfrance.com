var programmeExecuteAvecNode = function () {
      return typeof(module) !== 'undefined' && module.exports;
    },

    objetPublic = function () {
      return programmeExecuteAvecNode() ? module.exports : window;
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

  if (programmeExecuteAvecNode()) {
    Surprise = require("./surprise").Surprise;
  }

  exports.CalendrierApres = CalendrierApres;
})(objetPublic());
