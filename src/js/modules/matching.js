function matching() {
  var $card = $('#game-board li');

  // removes active class from cards
  function clear() {
    $card.removeClass(active);
  }

  // matching functionality
  function cardClick() {
    var match1 = 0,
        match2 = 0;

    $card.click(function() {
      if( $(this).hasClass(active) ) {
        // stops clicking same element more than once
        return false;
      } else {
        var data = $(this).data('image');
        $(this).addClass(active);

        // checks if it is initial value
        if(match1 > 0) {
          match2 = data;
        } else {
          match1 = data;
        }

        if(match2 === 0) {
          // ignores first click
          console.log('nothing');
          return false;
        } else if(match1 === match2) {
          // card match functionality
          $card.each(function() {
            if($(this).hasClass(active)) {
              console.log($(this).data('image'));
              $(this).addClass('matched');
            }
          });

          // resets values and clears active class
          match1 = 0;
          match2 = 0;
          clear();
        } else {
          // resets values and clears active class
          match1 = 0;
          match2 = 0;
          clear();
        }
      }
    });
  }

  cardClick();
}
