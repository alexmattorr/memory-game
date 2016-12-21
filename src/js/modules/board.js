function initBoard() {
  console.log('hello');

  var images = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ];

  arr = shuffle(images);

  function loopImages() {
    for(var i = 0; i < arr.length; i++) {
      // text += images[i] + "<br>";
      var image = '<li data-image="' + images[i] + '"><h4>' + images[i] + '</h4></li>';
      $board.append(image);
    }
  }

  loopImages();
  loopImages();
}
