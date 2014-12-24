var programmeExecuteAvecNode = function () {
      return typeof(module) !== 'undefined' && module.exports;
    },

    objetPublic = function () {
      return programmeExecuteAvecNode() ? module.exports : window;
    };

(function (exports) {

  var Surprise,
      CalendrierApres = function (dateDebut, descriptionsSurprises) {

        this.surprises =  descriptionsSurprises.map( function (description, i) {
          var dateSurprise = new Date(dateDebut);
          dateSurprise.setDate(dateDebut.getDate() + i);
          return new Surprise(description, dateSurprise);
        });
      };

  if (programmeExecuteAvecNode()) {
    Surprise = require("./surprise").Surprise;
  }

  exports.CalendrierApres = CalendrierApres;
})(objetPublic());
