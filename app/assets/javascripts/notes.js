$( function(){
  $(".post").draggable({containment: ".board"});
  $(".date").datepicker({altField: "#hidden_date"});
});
