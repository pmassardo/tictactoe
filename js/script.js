$(document).on('ready', function(){

  var lastItem='';
  var currentItem='';
  var errorMessage = '';

  $('.row').on('click', '.square',function(e){

    e.stopPropagation();

    addToSquare(currentItem, $(this));

  }); // end .square click

  $('#X').on('click',function(e){

    currentItem='X';

  }); // end .row click

  $('#O').on('click',function(e){

    currentItem='O';

  }); // end .row click

  $('#X').draggable({
    helper: 'clone'
  });

  $('#O').draggable({
    helper: 'clone'
  });

  $('.square').droppable( {
      drop: handleDropEvent
  });


  function handleDropEvent( event, ui ) {

    addToSquare(ui.draggable.attr('id'), $(this))

  }

  function addToSquare(currentItem, currentSquare)
  {

    var currentText = currentSquare.text().trim();

    if (lastItem === currentItem)
    {
      errorMessage = 'It is not your turn ' + currentItem;

    }
    else if (currentText.length> 0){

      errorMessage = currentItem + ' there is already something in this square';
    }
    else {
      currentSquare.text(currentItem);
    }

    if (errorMessage.length>0){
      $('#errorMessage').text(errorMessage);
      errorMessage='';
    }
    else {
      lastItem = currentItem;
      currentItem='';
    }

  }

}); // end ready
