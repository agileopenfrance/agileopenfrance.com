var objetPublic = function () {
  if (typeof(module) === 'undefined' || module.exports === undefined)
  return window;

  return module.exports;
};

(function (exports) {

var
debug = false,
jourDepart = 25,

voletEstAvantDate = function (jourVolet, date) {
  return debug || (31 + jourVolet - jourDepart) % 31 <= jours_ecoules(date);
},

jours_ecoules = function (date) {
  return Math.floor((date - new Date('2014-12-'+ jourDepart)) / 86400000);
};

function construis_le_calendrier(calendrier) {
  var lignes = 4, colonnes = 7, cases = 26;
  var largeur = 100 / colonnes,
    hauteur = 80 / lignes;
  var zoom_horizontal = 100 / (largeur - 2),
    zoom_vertical = 100 / ((hauteur - 4) * .9),
    zoom = Math.min(zoom_horizontal, zoom_vertical);
  var creeSurprise = function (position, jourCourant) {
        return $(
          '<div class="case" style="'
          + 'left:' + (position.left + 1) + '%;'
          +'top:' + (position.top + 2) + '%;'
          + '">' + image(jourCourant) + '</div>');
      },
    creeVolet = function (position, jourCourant) {
      var $volet = $(
        '<div class="numero" style="'
        + 'left:' + (position.left + 0.5) + '%;'
        +'top:' + (position.top + 1) + '%;'
        + '"> <div class="' + calcule_class_chiffres(jourCourant) + '">'
        + jourCourant + '</div></div>');

        if (voletEstAvantDate(jourCourant, new Date())) {
          $volet.addClass("avec-contour");

          $volet.mouseenter(function () {
            $(this).addClass("survol");
          });
          $volet.mouseleave(function () {
            $(this).removeClass("survol");
          });
          $volet.click(function () {
            $(this).removeClass("survol");
          });
        }
      return $volet;
    };

  construis_les_cases();
  ajuste_la_taille_des_cases();

  function construis_les_cases() {
    var positions = construis_les_positions(lignes, colonnes),
      jourCourant = jourDepart - 1;

    positions.forEach(function (position) {
      var surprise, volet;

      jourCourant = (jourCourant + 1) % 31 || 31;
      if (jourCourant >= 25 || jourCourant < 21) {
        surprise = creeSurprise(position, jourCourant);
        volet = creeVolet(position, jourCourant);
        calendrier.append(volet);

        add_click(calendrier, volet, surprise, jourCourant);
      }
    });

  }

  function calcule_class_chiffres(numero) {
    if (numero < 10)
     return "un-chiffre";
    else
    return "deux-chiffres";
  }

  function construis_les_positions() {
    var positions = [];
    for (var row = 0; row < lignes; row++) {
      for (var column = 0; column < colonnes; column++) {
        positions.push({left: largeur * column, top: hauteur * row});
      }
    }
    return positions;
  }

  function image(numero) {
    return '<div style="background: url(\'cases/case_' + numero + '.jpg\') center; background-size: cover;"></div>';
  }

  function add_click(calendrier, volet, surprise, jour) {
    volet.on('click', function() {
      if (voletEstAvantDate(jour, new Date())) {
        calendrier.append(surprise);
        volet.addClass('ouvert');
        setTimeout(function() {
          volet.remove();
        }, 1000);
        surprise.click(function () { zoome_sur(surprise); });
      } else {
        $("#message-trop-tot").css("display", "block");
        setTimeout(function() {
        $("#message-trop-tot").css("display", "none");
        }, 2000);
      }
    });
  }

  function zoome_sur(element) {
    var hirez;
    hirez = element.clone();
    hirez.css({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 3
    });
    $('body').append(hirez);
    hirez.click(function() { hirez.remove(); });
  }

  function ajuste_la_taille_des_cases() {
    $('head').append('<style>'
    + '.case {'
    + 'height:' + (hauteur - 4) + '%;'
    + 'width:' + (largeur - 2) + '%;'
    + '}'
    + '.numero {'
    + 'height:' + (hauteur - 2) + '%;'
    + 'width:' + (largeur - 1) + '%;'
    + '}'
    + '</style>')
  }
}

exports.construis_le_calendrier = construis_le_calendrier;
exports.voletEstAvantDate = voletEstAvantDate;

})(objetPublic());
