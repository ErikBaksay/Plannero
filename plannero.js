function goToToDo(){
    var navbar = document.getElementById('navbar');
    var grid = document.getElementById('bodyGrid');

    navbar.classList.remove("fadeInNavbar");
    grid.classList.remove("fadeInGrid");
    
    navbar.classList.add("fadeOutNavbar");
    grid.classList.add("fadeOutGrid");

    setTimeout(function(){
        window.location.href = "plannero_ToDo.html";
    }, 400);
    
}
function goToNotes(){
    var navbar = document.getElementById('navbar');
    var grid = document.getElementById('bodyGrid');

    navbar.classList.remove("fadeInNavbar");
    grid.classList.remove("fadeInGrid");

    navbar.classList.add("fadeOutNavbar");
    grid.classList.add("fadeOutGrid");

    setTimeout(function(){
        window.location.href = "plannero_Notes.html";
    }, 400);
    
}
function goToCalendar(){
    var navbar = document.getElementById('navbar');
    var grid = document.getElementById('bodyGrid');

    navbar.classList.remove("fadeInNavbar");
    grid.classList.remove("fadeInGrid");

    navbar.classList.add("fadeOutNavbar");
    grid.classList.add("fadeOutGrid");

    setTimeout(function(){
        window.location.href = "plannero_Calendar.html";
    }, 400);
    
}