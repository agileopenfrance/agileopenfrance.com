var programmeExecuteAvecNode = function () {
      return typeof(module) !== 'undefined' && module.exports;
    },

    objetPublic = function () {
      return programmeExecuteAvecNode() ? module.exports : window;
    };

(function (exports) {


  var codeHTMLImage = function (cheminImage, x, y, largeur, hauteur) {
        var codeHTML =
          '<div class="case" style="left: ' + x + '%; '      +
                                   'top: ' + y + '%; '    +
                                   'width: ' + largeur + '%; '        +
                                   'height: ' + hauteur + '%;">'        +
            '<div style="background: url(\'' + cheminImage + '\') center; ' +
                        'background-size: cover;"></div>'                   +
          '</div>';
        return codeHTML;
      },

      codeHTMLVolet = function (numero, x, y, largeur, hauteur) {
        var styleNumero = numero < 10 ? "un-chiffre" : "deux-chiffres",
            codeHTML =
              "<div class=\"numero\" style=\"left: " + x + "%; " +
                                            "top: " + y + "%; " +
                                            "width: " + largeur + "%; " +
                                            "height: " + hauteur + "%;\">" +
              "<div class=\"" + styleNumero + "\">" + numero + "</div>" +
              "</div>";

        return codeHTML;
      },

      rendsSurvolable = function ($element) {
        $element.mouseenter(function () { $(this).addClass("survol"); });
        $element.mouseleave(function () { $(this).removeClass("survol"); });
        $element.click(function () { $(this).removeClass("survol"); });
      },

      zoomeSur = function ($element) {
        var $zoom = $element.clone();

        $zoom.css({
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: 4
        });

        $zoom.click(function () { $(this).remove(); });
        $('body').append(zoom);
      },

      insereImage = function ($image, $placeHolder) {
        rendsSurvolable($image);
        $image.click(function() { zoomeSur($(this)); });

        $placeHolder.append($image);
      },

      ouvreVolet = function ($volet) {
        $volet.addClass("ouvert");
      },

      afficheErreur = function () {
        $("#message-trop-tot").css("display", "block");
        setTimeout(function() {
          $("#message-trop-tot").css("display", "none");
        }, 2000);
      },

      insereSurprise = function (surprise, curseur, largeur, hauteur, $placeHolder) {
        var x = curseur.colonne * largeur,
            y = curseur.ligne * hauteur,
            $image = $(codeHTMLImage(surprise.cheminImage, x + 2, y + 1, largeur - 2, hauteur - 4)),
            $volet = $(codeHTMLVolet(surprise.numero, x + 1, y + 0.5, largeur - 1, hauteur - 2)),
            surpriseOuvrable = surprise.estOuvrable(new Date()),
            evenementClic = surpriseOuvrable ?
                            function () { insereImage($image, $placeHolder); ouvreVolet($volet); } :
                            function () { afficheErreur(); };

        if (surpriseOuvrable) {
          $volet.addClass("avec-contour");
          rendsSurvolable($volet);
        }

        $volet.click(evenementClic);
      };

  exports.codeHTMLImage = codeHTMLImage;
  exports.codeHTMLVolet = codeHTMLVolet;
  exports.insereSurprise = insereSurprise;
})(objetPublic());
