var objetPublic = function () {
  if (typeof(module) === 'undefined' || module.exports === undefined)
    return window;

  return module.exports;
};

(function (exports) {
  var Surprise = function (configuration, dateOuverture) {
    this.cheminImage = configuration.cheminImage;
    this.description = configuration.description;
    this.dateOuverture = dateOuverture;
  };

  Surprise.prototype.ouvre = function () {
    return this.cheminImage;
  };

  Surprise.prototype.estOuvrable = function (date) {
    return this.dateOuverture <= date;
  };

  Surprise.prototype.numero = function () {
    return this.dateOuverture.getDate();
  };

  exports.Surprise = Surprise;
})(objetPublic());
