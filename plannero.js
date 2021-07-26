$(function (){
    var $notes = $('.notesBlock').last();

    var $addNotesButton = $('#addNotesBlock');
    var $addNotes = $('.addBlock');

    var $removeNotesButtons = $('.removeNote');

    var $saveNotesButtons = $('.saveNote');

    var newNoteID = 1;    

    var existingNotes = [];
    var savedNotes = JSON.parse(localStorage.getItem("savedNotes"));

    var i;

    if (typeof(Storage) !== "undefined") {

        if (savedNotes !== null){
        existingNotes = savedNotes;
        existingNotes.forEach(function(item){
            $addNotes.before('<div class="notesBlock" data-noteID="'+newNoteID+'">'+
            localStorage.getItem(item))+
            '</div>'
                
                
            var $removeNotesButtons =  $('.removeNote');
            var $saveNotesButtons = $('.saveNote');

            for (i = 0; i < $removeNotesButtons.length; i++){
                $removeNotesButtons[i].addEventListener('click', removeNoteFunction);
            }

            for (i = 0; i < $saveNotesButtons.length; i++){
                $saveNotesButtons[i].addEventListener('click', saveNoteFunction)
            }
            newNoteID++;
        });
        } else {
            $addNotes.before('<div class="notesBlock" data-noteID="'+newNoteID+'">'+
                            '<div class="noteTitle">'+
                                '<h4 contenteditable="true" spellcheck="false" class="noteTitleText">Note</h4>'+
                                '<div class="removeNote">'+
                                    '<p class="removeNoteButton">X</p>'+
                                '</div>'+
                                '<div class="saveNote">'+
                                    '<p class="saveNoteButton">Save</p>'+
                                '</div>'+
                            '</div>'+
                            '<div class="noteTextAreaContainer">'+
                                '<div class="noteTextArea">'+
                                    '<p contenteditable="true" spellcheck="false" class="noteText"></p>'+
                                '</div>'+
                            '</div>'+
                        '</div>');
        
        var $removeNotesButtons =  $('.removeNote');
        var $saveNotesButtons = $('.saveNote');

        for (i = 0; i < $removeNotesButtons.length; i++){
            $removeNotesButtons[i].addEventListener('click', removeNoteFunction);
        }

        for (i = 0; i < $saveNotesButtons.length; i++){
            $saveNotesButtons[i].addEventListener('click', saveNoteFunction);
        }
            
        }
    }

    var $removeNotesButtons =  $('.removeNote');
            var $saveNotesButtons = $('.saveNote');

            for (i = 0; i < $removeNotesButtons.length; i++){
                $removeNotesButtons[i].addEventListener('click', removeNoteFunction);
            }

            for (i = 0; i < $saveNotesButtons.length; i++){
                $saveNotesButtons[i].addEventListener('click', saveNoteFunction)
            }

    var removeNoteFunction = function(){
        this.closest('.notesBlock').remove();
        var noteIDVar = $(this).closest(".notesBlock").attr('data-noteID');
        existingNotes.splice(1, 1);
        localStorage.setItem("savedNotes", JSON.stringify(existingNotes));
    }
    
    for (i = 0; i < $removeNotesButtons.length; i++){
        $removeNotesButtons[i].addEventListener('click', removeNoteFunction);
    }
    
    var saveNoteFunction = function(){
        var noteIDVar = $(this).closest(".notesBlock").attr('data-noteID');
        var thisNote = this.closest(".notesBlock");
        localStorage.setItem(noteIDVar, thisNote.innerHTML);
        if (existingNotes.includes(noteIDVar) == false ){
            existingNotes.push(noteIDVar);
        }  
        let JSONExistingNotes = JSON.stringify(existingNotes);
        localStorage.setItem("savedNotes", JSONExistingNotes);
    }

    for (i = 0; i < $saveNotesButtons.length; i++){
        $saveNotesButtons[i].addEventListener('click', saveNoteFunction);
    }

    $addNotesButton.click(function(){
        if (existingNotes.includes(newNoteID)){
            alert("take existuje")
        }
        do{
        newNoteID++;
        } while (existingNotes.includes(newNoteID))    
        $addNotes.before('<div class="notesBlock" data-noteID="'+newNoteID+'">'+
                            '<div class="noteTitle">'+
                                '<h4 contenteditable="true" spellcheck="false" class="noteTitleText">Note</h4>'+
                                '<div class="removeNote">'+
                                    '<p class="removeNoteButton">X</p>'+
                                '</div>'+
                                '<div class="saveNote">'+
                                    '<p class="saveNoteButton">Save</p>'+
                                '</div>'+
                            '</div>'+
                            '<div class="noteTextAreaContainer">'+
                                '<div class="noteTextArea">'+
                                    '<p contenteditable="true" spellcheck="false" class="noteText"></p>'+
                                '</div>'+
                            '</div>'+
                        '</div>');
        
        var $removeNotesButtons =  $('.removeNote');
        var $saveNotesButtons = $('.saveNote');

        for (i = 0; i < $removeNotesButtons.length; i++){
            $removeNotesButtons[i].addEventListener('click', removeNoteFunction);
        }

        for (i = 0; i < $saveNotesButtons.length; i++){
            $saveNotesButtons[i].addEventListener('click', saveNoteFunction);
        }

    })
});
