
//variables decalrations
var newtask=document.getElementById("new-task");
var incompleteTasks=document.getElementById("incomplete-tasks");
var completeTasks=document.getElementById("completed-tasks");
var ADD=document.getElementById("Add");
var h3=document.getElementById("NAME");
var P=document.getElementById("p");


//ADD BUTTON FUNCTION
ADD.addEventListener('click', function updateic(){

    
     //single tasks outbox
    const icli = document.createElement("li");
    
    const para1 = document.createElement("input");
    para1.type="checkbox";
    
    //checkbox EventListener
    para1.addEventListener('change', function() {
        if (this.checked) {
            incompleteTasks.removeChild(icli);
            console.log(completeTasks);
            completeTasks.appendChild(icli);
          console.log("Checkbox is checked..");
        }
        else {
            completeTasks.removeChild(icli);
            incompleteTasks.appendChild(icli);
          console.log("Checkbox is not checked..");
        }
      });


    //some impoertant content
    const iclabel = document.createElement("label");
    iclabel.innerHTML=newtask.value;


    const para2 = document.createElement("input");
    para2.type="text";
    para2.value=newtask.value;


    //button edit
    const buttonEdit = document.createElement("button");
    buttonEdit.innerHTML='Edit';
    buttonEdit.setAttribute("class", "edit");
    
     //buttonEdit EventListener
    buttonEdit.addEventListener('click',function () {
        newtask.value=iclabel.innerHTML;

        const updatebutton = document.createElement("button");

        h3.innerHTML=iclabel.innerHTML;
        updatebutton.innerHTML='UPDATE';

        updatebutton.setAttribute("class", "button");
        P.removeChild(ADD);
        P.appendChild(updatebutton);
        
        //update button working
        updatebutton.addEventListener('click',function myFunction(){

          iclabel.innerHTML=newtask.value;
          h3.innerHTML='ADD ITEM';
          P.removeChild(updatebutton);
          P.appendChild(ADD);
          newtask.value='';

        })
        
      }
    )
    
    //Button delete working
    const buttondelete = document.createElement("button");
    buttondelete.innerHTML='delete';
    buttondelete.setAttribute("class", "delete");

    //buttondelete EventListener
    buttondelete.addEventListener('click',function myFunc() {
       icli.remove();
      }
    )
    
    //Appending all elements to container uncomplete task
    icli.appendChild(para1);
    icli.appendChild(iclabel);
    icli.appendChild(para2);
    icli.appendChild(buttonEdit);
    icli.appendChild(buttondelete);

    incompleteTasks.appendChild(icli);
    console.log(incompleteTasks);

})

