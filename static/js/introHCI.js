'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("OMG It Changed!");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	//Submit button
	$("#submitBtn").click(updateProject); 
}

var descriptionHidden = 0;

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    console.log("Number of matching items: " + jumbotronHeader.length);
    jumbotronHeader.text(projectTitle);

    // New Code
    

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description' align=center'><p style='text-align: center;' align=''center'>Description of the project.</p></div>"); 
    } else { 
       $(".project-description").fadeOut();
       if(descriptionHidden == 1){
       	$(".project-description").fadeIn();
       	descriptionHidden = 0;
       }else{
       descriptionHidden = 1;
   }
    }
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}
