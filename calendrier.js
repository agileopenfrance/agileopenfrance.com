function construis_le_calendrier(calendrier) {
  construis_les_cases(calendrier);
  construis_la_grille(calendrier);
}

function construis_les_cases(calendrier) {
  for (var row = 0; row < 4; row++) {
    for (var column = 0; column < 5; column++) {
      var pos_x = 20*column;
      var pos_y = 25*row;
      var date = column + 1 + 5 * row;
      var caze = $('<div class="date" style="left:' + pos_x + '%;'+
          'top:' + pos_y + '%" > <div>' + date + '</div></div>');
      calendrier.append(caze);
      add_click(caze, date);
    }
  }
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
