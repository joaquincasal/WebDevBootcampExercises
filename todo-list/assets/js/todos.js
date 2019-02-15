$(".list").on("click", ".todo", function(){
    $(this).toggleClass("done");
});

$(".list").on("click", ".delete", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut("fast", function(){
        $(this).remove();
    });
});

$("#newTodo").on("keypress", function(event){
    var value = $(this).val();
    if (event.which === 13 && value !== ""){
        $(".list").append("<li class='todo'><span class='delete'><i class='far fa-trash-alt'></i></span>" +  value + "</li>")
        $(this).val("");
    }
});

$(".fa-plus").on("click", function(){
    $("#newTodo").fadeToggle("fast");
})