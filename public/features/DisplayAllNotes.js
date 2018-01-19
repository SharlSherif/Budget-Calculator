// GET all notes from database
$(function (){
  $("#showAll").click(function(data){
    $.ajax({
      url:'/budget',
      type:'get',
      dataType: 'html',
      contentType: 'application/json',
      data: JSON.stringify(),
      success: function(data){
        if(data){
          $('#result').css({
            display: 'inline-block'
          });
          $('#result').html(data);
          console.log('success');
        }
      },
      error: function(err, status, xhr){console.log('error: ', err);}
    });
  });
});
