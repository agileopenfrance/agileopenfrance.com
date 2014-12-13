function construis_le_calendrier(calendrier) {
    var debug = false;
    var depart = new Date('2014-12-25');
    var lignes = 5, colonnes = 6, cases = 26;
    var largeur = 100 / colonnes,
        hauteur = 100 / lignes;

    construis_les_cases();
    construis_la_grille();
    ajuste_la_taille_des_cases();

    function construis_les_cases() {
        var positions = melange(construis_les_positions(lignes, colonnes));
        for (var numero = 1; numero <= cases; numero++) {
            var position = positions[numero - 1];
            calendrier.append(
                '<div class="case" style="'
                + 'left:' + (position.left + 1) + '%;'
                +'top:' + (position.top + 2) + '%;'
                + '">' + image(numero) + '</div>');
            var caze = $(
                '<div class="numero" style="'
                + 'left:' + position.left + '%;'
                + 'top:' + position.top + '%;'
                + '"> <div class="' + calcule_class_chiffres(numero) + '">' + numero + '</div></div>');
            calendrier.append(caze);
            add_click(caze, numero);
        }
    }

    function calcule_class_chiffres(numero) {
      if (numero < 10)
       return "one-digit";
      else
        return "two-digits";
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

    function image(date) {
        return '<div style="background-image: url(\'cases/case_' + date + '.jpg\'); background-size: cover;"></div>';
    }

    function add_click(caze, date) {
        caze.on('click', function() {
            if (debug || date <= jours_ecoules(new Date())) {
                $(this).addClass('ouvert');
            }
        });
    }

    function jours_ecoules(date) {
        return Math.floor((date - depart ) / 86400000) + 1;
    }

    function construis_la_grille() {
        for (var row = 0; row <= lignes; row++) {
            var pos_y = hauteur * row - 2;
            var ligne = '<div class="row" style="top:' + pos_y + '%;"></div>';
            calendrier.append(ligne);
        }

        for (var column = 0; column <= colonnes; column++) {
            var pos_x = largeur * column - 1;
            var colonne = '<div class="column" style="left:' + pos_x + '%;"></div>';
            calendrier.append(colonne);
        }
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
