var main = function(){

$(".post").draggable({
  containment: ".board"
});



function Task(inputUser, inputText, inputDate)
    {
        this.user = inputUser;
        this.text = inputText;
        this.date = inputDate;
        this.el = $("<div class=\"col-md-4 post\"> <p>" + this.text + " </p></div>");
        this.el.draggable({
          containment: ".board"
        });
        $(".todo-container").append(this.el);

    }

Task.prototype = {

     changeStatus: function(target_status)
        {
            this.status  = target_status;
        }
}

$(".new-send").click(function(){
    var user = $("#input-user").val();
    var text = $("#input-text").val();
    var date = $("#input-date").val();
    var task_to_add = Task(user,text,date);

});

}

$(document).ready(main);
