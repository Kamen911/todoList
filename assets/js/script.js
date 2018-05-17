// Check off Specific Todos by clicking
$('ul').on("click", "li", function() {
   $(this).toggleClass("compleated");
});

//Click on X to delete ToDo
// function(e) "e" prevent from bubble the event to li > ul > .container > body > html...
// with e.stopPropagation();
$('ul').on("click", "span", function(e) {
   $(this).parent().fadeOut(500, function() {
      $(this).remove();
   });
   e.stopPropagation();
});

//add listen on input and listen for enter to fire it up
$("input[type='text']").on("keypress", function(e) {
   if(e.which === 13) {
      //grabbing new ToDo text from the input
      let todoText = $(this).val();
      $(this).val("");
      //create a new <li> and add to <ul>
      $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`)
   };
});

//Toggle the input by select the Plus sign
$(".fa-plus").on("click", function() {
   $("input[type='text']").fadeToggle();
});