(function (exports) {

  var insereCalendrier = function (calendrier, nbLignes, nbColonnes, $placeHolder) {
        var curseur = new Curseur(nbLignes, nbColonnes),
            largeur = 100 / nbColonnes,
            hauteur = 87 / nbLignes;

        calendrier.surprises.forEach(function (surprise) {
          insereSurprise(surprise, curseur, largeur, hauteur, $placeHolder);
          curseur.avance();
        });
      },

      animeFooter = function () {
        $("footer").mouseenter(function () {
          $(this).css("height", "17vmin");
        });

        $("footer").mouseleave(function () {
          $(this).css("height", "9vmin");
        });
      };
  
  exports.insereCalendrier = insereCalendrier;
  exports.animeFooter = animeFooter;
})(window);
