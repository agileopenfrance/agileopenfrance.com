function construis_le_calendrier(calendrier) {
  construis_les_cases(calendrier);
  construis_la_grille(calendrier);
}

function construis_les_cases(calendrier) {
    var positions = construis_les_positions(4, 5);
    for (var date = 1; date <= 20; date++) {
        var position = positions[date - 1];
        calendrier.append(
            '<div class="case" style="'
            + 'left:' + (position.left + 1) + '%;'
            +'top:' + (position.top + 2) + '%;'
            + '">' + image(date) + '</div>');
        var caze = $(
            '<div class="date" style="'
            + 'left:' + position.left + '%;'
            + 'top:' + position.top + '%;'
            + '"> <div>' + date + '</div></div>');
        calendrier.append(caze);
        add_click(caze, date);
    }
}

function construis_les_positions(lignes, colonnes) {
    var largeur = 100 / colonnes,
        hauteur = 100 / lignes,
        positions = [];
    for (var row = 0; row < lignes; row++) {
        for (var column = 0; column < colonnes; column++) {
            positions.push({left: largeur * column, top: hauteur * row});
        }
    }
    return positions;
}

function image(date) {
  return '<div style="background-image: url(\'cases/case_' + date + '.jpg\'); background-size: cover;"></div>';
}

function add_click(caze, date) {
  caze.on('click', function() {
    if (date <= new Date().getDate() ) {
      $(this).addClass('ouvert');
    }
  });
}

function construis_la_grille(calendrier) {
  for (var row = 0; row < 5; row++) {
    var pos_y=25*row - 2;
    var ligne = '<div class="row" style="top:' + pos_y + '%;"></div>';
    calendrier.append(ligne);
  }

  for (var column = 0; column < 6; column++) {
    var pos_x = 20*column - 1;
    var colonne = '<div class="column" style="left:' + pos_x + '%;"></div>';
    calendrier.append(colonne);
  }
}
