function construis_le_calendrier(calendrier) {
    var debug = false;
    var depart = new Date('2014-12-25');
    var lignes = 5, colonnes = 6, cases = 26;
    var largeur = 100 / colonnes,
        hauteur = 100 / lignes;
    var zoom_horizontal = 100 / (largeur - 2),
        zoom_vertical = 100 / ((hauteur - 4) * .9),
        zoom = Math.min(zoom_horizontal, zoom_vertical);

    construis_les_cases();
    ajuste_la_taille_des_cases();

    function construis_les_cases() {
        var positions = melange(construis_les_positions(lignes, colonnes));
        for (var numero = 1; numero <= cases; numero++) {
            var position = positions[numero - 1];
            var surprise = $(
                '<div class="case" style="'
                + 'left:' + (position.left + 1) + '%;'
                +'top:' + (position.top + 2) + '%;'
                + '">' + image(numero) + '</div>');
            var volet = $(
                '<div class="numero" style="'
                + 'left:' + position.left + '%;'
                + 'top:' + position.top + '%;'
                + '"> <div class="' + calcule_class_chiffres(numero) + '">' + numero + '</div></div>');
            calendrier.append(surprise);
            calendrier.append(volet);
            add_click(volet, surprise, numero);
        }
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

    function melange(tableau) {
        var longueur = tableau.length;
        for (var i = 0; i < longueur; i++) {
            var j = Math.floor(Math.random()*(longueur - i) + i);
            var t = tableau[i];
            tableau[i] = tableau[j];
            tableau[j] = t;
        }
        return tableau;
    }

    function image(numero) {
        return '<div style="background: url(\'cases/case_' + numero + '.jpg\') center; background-size: cover;"></div>';
    }

    function add_click(volet, surprise, numero) {
        volet.on('click', function() {
            if (debug || numero <= jours_ecoules(new Date())) {
                volet.addClass('ouvert');
                surprise.on('click', zoome_sur(surprise));
            }
            else {
              $("#message-trop-tot").css("display", "block");
              setTimeout(function() {
                $("#message-trop-tot").css("display", "none");
              }, 2000);
            }
        });
    }

    function zoome_sur(surprise) {
        var position = surprise.position(),
            pos_x = 50 - 100 * (position.left + surprise.width() / 2) / calendrier.width(),
            pos_y = 50 - 100 * (position.top + surprise.height() / 2) / calendrier.height();

        return function() {
            calendrier.css(
                'transform',
                'translate(0,-5vh) '
                + 'scale(' + zoom + ') '
                + 'translate(' + pos_x + '%, ' + pos_y + '%) '
            );
            setTimeout(affine_image(surprise), 1000);
        }
    }

    function affine_image(element) {
        var hirez = element.clone();
        return function() {
            hirez.css({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            });
            $('body').append(hirez);
            element.hide();
            hirez.on('click', function() {
                element.show();
                hirez.remove();
                calendrier.css('transform', '');
            });
        };
    }

    function jours_ecoules(date) {
        return Math.floor((date - depart ) / 86400000) + 1;
    }

    function ajuste_la_taille_des_cases() {
        $('head').append('<style>'
        + '.case {'
        + 'height:' + (hauteur - 4) + '%;'
        + 'width:' + (largeur - 2) + '%;'
        + '}'
        + '.numero {'
        + 'height:' + hauteur + '%;'
        + 'width:' + largeur + '%;'
        + '}'
        + '</style>')
    }
}
