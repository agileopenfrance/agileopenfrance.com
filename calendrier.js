function construis_les_cases() {
  body = $("body");
  for (row = 0; row < 4; row++) {
    for (column = 0; column < 5; column++) {
      var pos_x=20*column;
      var pos_y=25*row;
      var date = column + 1 + 5 * row;
      var caze = $('<div id="janvier'+date +'" class="date" style="left:' + pos_x + '%;'+
          'top:' + pos_y + '%;background-position-x: '+pos_x+'%; background-position-y: '+pos_y+'%;" > <div>' + date + '</div></div>');
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
