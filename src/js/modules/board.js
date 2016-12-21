function initBoard() {
  var cards = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ];

  arr = shuffle(cards);

  function loopCards() {
    for(var i = 0; i < arr.length; i++) {
      // text += images[i] + "<br>";
      var card = '<li data-image="' + cards[i] + '"><h4>' + cards[i] + '</h4></li>';
      $board.append(card);
    }
  }

  // does loop twice to create enough cards
  loopCards();
  loopCards();
}
