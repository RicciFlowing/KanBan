$( function(){
  $(".post").draggable({containment: ".board"});
  $(".date").datepicker({altField: "#hidden_date"});
  $(".delete-link").on("click", function(event){
    $(this).parent().hide();
  });
});
