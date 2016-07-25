$(document).on('ready', function(){

  //var last = 'O';
  var lastItem='';
  var currentItem='';
  var errorMessage = '';

  $('.row').on('click', '.square',function(e){

    e.stopPropagation();

    currentText = $(this).text().trim();

    if (lastItem === currentItem)
    {
      errorMessage = 'It is not your turn ' + currentItem;

    }
    else if (currentText.length> 0){

      errorMessage = currentItem + ' there is already something in that square';
    }
    else {
      $(this).text(currentItem);
    }

    if (errorMessage.length>0){
      $('#errorMessage').text(errorMessage);
      errorMessage='';
    }
    else {
      lastItem = currentItem;
      currentItem='';
    }


  }); // end .square click


  $('#X').on('click',function(e){
    currentItem='X';
    //alert(currentItem);

  }); // end .row click

  $('#O').on('click',function(e){
    currentItem='O';
    //alert(currentItem);

  }); // end .row click



    // $('#X').draggable({
    //   helper: 'clone'
    // });
    // $('#O').draggable({
    //   helper: 'clone'
    // });
    //
    // $('.square').droppable( {
    //     drop: handleDropEvent
    // });


  function handleDropEvent( event, ui ) {

    var letterToAssign = ui.draggable.attr('id')

    $(this).text(letterToAssign);

    alert( 'The square with ID "' + letterToAssign + '" was dropped onto me!' );
  }



}); // end ready
