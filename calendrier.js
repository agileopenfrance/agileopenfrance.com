function construis_le_calendrier() {
  construis_les_cases();
  construis_la_grille();
}

function construis_les_cases() {
  var body = $("body");
  for (var row = 0; row < 4; row++) {
    for (var column = 0; column < 5; column++) {
      var pos_x = 20*column + 1;
      var pos_y = 25*row + 2;
      var date = column + 1 + 5 * row;
      var caze = $('<div class="date" style="left:' + pos_x + '%;'+
          'top:' + pos_y + '%" > <div>' + date + '</div></div>');
      body.append(caze);
      add_click(caze, date);
    }
  }
}

function add_click(caze, date) {
  caze.on('click', function() {
    if (date <= new Date().getDate() ) {
      $(this).hide();
    }
  });
}

function construis_la_grille() {
  var body = $("body");
  for (var row = 0; row < 5; row++) {
    var pos_y=25*row - 2;
    var ligne = '<div class="row" style="top:' + pos_y + '%;"></div>';
    body.append(ligne);
  }

  for (var column = 0; column < 6; column++) {
    var pos_x = 20*column - 1;
    var colonne = '<div class="column" style="left:' + pos_x + '%;"></div>';
    body.append(colonne);
  }
}