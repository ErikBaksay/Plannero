$(function (){
    var $NewTaskButton = $('#newTask');
    var $SaveButton = $('#save');
    var $removeTaskButtons = $('.removeTask');
    var $ToDoList = $('#ToDoList');
    var savedToDoList = localStorage.getItem("savedToDoList");
    var $checkboxes = $('.checkbox'); 

    var autosaveFunction = function(){
        $SaveButton.click();
    }

    var autosave = window.setInterval(autosaveFunction, 3000);
        

    if (typeof(Storage) !== null ){
        if (savedToDoList !== null){
            ToDoList.innerHTML = localStorage.getItem("savedToDoList");
        } else{
            $ToDoList.append('<li><div class="ToDoItem"><p contenteditable="true" spellcheck="false">Write your task here</p><div class="removeTask">Remove</div><div><input type="checkbox" class="checkbox"></div></div></li>');
        }
        $removeTaskButtons = $('.removeTask');
        $checkboxes = $('.checkbox'); 
        
        for (i = 0; i < $checkboxes.length; i++){
            if ($checkboxes[i].classList.contains("clicked")){
                $checkboxes[i].click();
            }
        }
    } 
    $SaveButton.click(function(){
        localStorage.setItem("savedToDoList", ToDoList.innerHTML);
    })

    $NewTaskButton.click(function(){
        $ToDoList.append('<li><div class="ToDoItem"><p contenteditable="true" spellcheck="false">Write your task here</p><div class="removeTask">Remove</div><div><input type="checkbox" class="checkbox"></div></div></li>');
        $removeTaskButtons = $('.removeTask');
        for (i = 0; i < $removeTaskButtons.length; i++){
            $removeTaskButtons[i].addEventListener('click', removeTaskFunction);
        }
    })
    var removeTaskFunction = function(){
        this.closest('.ToDoItem').remove();
        $SaveButton.click();
    }

    for (i = 0; i < $removeTaskButtons.length; i++){
        $removeTaskButtons[i].addEventListener('click', removeTaskFunction);
    }

    var checkboxStatusFunction = function(){
        var $thisCheckBox = this.closest('.checkbox');
        if ($thisCheckBox.checked){
            $thisCheckBox.classList.add("clicked");
        } else {
            $thisCheckBox.classList.remove("clicked");
        }
        $SaveButton.click();
    }
    for (i = 0; i < $checkboxes.length; i++){
        $checkboxes[i].addEventListener('click', checkboxStatusFunction);
    }

})