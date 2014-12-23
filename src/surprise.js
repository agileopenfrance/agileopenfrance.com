var objetPublic = function () {
  if (typeof(module) === 'undefined' || module.exports === undefined)
    return window;

  return module.exports;
};

(function (exports) {
  var Surprise = function (cheminImage, dateOuverture) {
    this.cheminImage = cheminImage;
    this.dateOuverture = dateOuverture;
  };

  Surprise.prototype.ouvre = function () {
    return this.cheminImage;
  };

  Surprise.prototype.estOuvrable = function (date) {
    return this.dateOuverture <= date;
  };

  module.exports = Surprise;
})(objetPublic());
