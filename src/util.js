var programmeExecuteAvecNode = function () {
      return typeof(module) !== 'undefined' && module.exports;
    },

    objetPublic = function () {
      return programmeExecuteAvecNode() ? module.exports : window;
    };

(function (exports) {

  var Curseur = function (nbLignes, nbColonnes) {
    this.nbLignes = nbLignes;
    this.nbColonnes = nbColonnes;
    this.ligne = 0;
    this.colonne = 0;
  };

  Curseur.prototype.avance = function () {
    this.colonne++;

    if (this.colonne > this.nbColonnes) {
      this.colonne = 0;
      this.ligne++;
    }
  };

  exports.Curseur = Curseur;
})(objetPublic());
