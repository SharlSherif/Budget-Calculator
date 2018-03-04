$(function(){
  $('.form').submit(function(e){
    e.preventDefault();
    $.ajax({
      url:'/users',
      type:'post',
      dataType:'json',
      contentType: 'application/json',
      data: JSON.stringify({
        email: $('input[type="email"]').val(),
        password: $('input[type="password"]').val()
      }),
      success: function(doc){
        $('#sucess').text({doc});
        window.location = "/app";
      },
      error: function(err, status, xhr){
        console.log(err);
        $('#sucess').text(err);
      }
    });
  })
});