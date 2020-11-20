
//Strike through a functionality
$('ul').on("click","li",function(){  
    /*
    // If the text is green turn it black
    if($(this).css("color")=="green"){
        $(this).css({
            color : "black",
            textDecoration : "none" 
        })  
    }
    else{
        $(this).css({
            color: "green",
            textDecoration : "line-through"
        });  
    }
    */

   // But we can use this one line and make it easy !!!!
   // All we need is to add the below code in the css file (css/style.css) :
   /*
   .done{
        color: green;
        text-decoration: line-through;
    }
    */

   $(this).toggleClass("done"); 
})

// Deleting
$('ul').on("click","span",function(event){
   // $(this).remove(); This will remove the span element
   //To remove the li element, we must use this :
   //$(this).parent().remove();

   $(this).parent().fadeOut(500, function(){
       $(this).remove();
   })
   event.stopPropagation();
})

// Adding
$('input').keypress(function(event){
    //console.log("You are typing the keyboard...");
    //If the Enter keyboard is typed to:
    if(event.which == 13){
        var task = $('input').val();
        //console.log(task);
        // We add ther entered task in the list
        $('ul').append("<li><span>- </span>"+ task+"</li>");
        //we clean the text input field
        $('input').val("");

    }
})