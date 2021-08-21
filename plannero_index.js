function startPlanning(){
    var StartPlanningButton = document.getElementById('button');
    var PlanneroTitle = document.getElementById('title');

    StartPlanningButton.classList.add("fadeOutButton");
    PlanneroTitle.classList.add("fadeOutTitle");

    setTimeout(function(){
        StartPlanningButton.style.visibility="hidden";
        PlanneroTitle.style.visibility="hidden";
        window.location.href = "plannero_ToDo.html";
    }, 500);
    
}