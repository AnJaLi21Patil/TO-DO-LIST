const inputBOX= document.getElementById("input-box");
const listcontainer= document.getElementById("list-container");
function addTask(){
    if(inputBOX.value === ''){
        alert("please enter a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBOX.value;
        listcontainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML='X';
        li.appendChild(span);

    }
    inputBOX.value='';
    savedata();

    }
    listcontainer.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            savedata();
        
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            savedata();
        }

    },false);
     function savedata(){
        localStorage.setItem("data",listcontainer.innerHTML);
     }
     function showtask(){
        listcontainer.innerHTML=localStorage.getItem("data");
     }
     showtask();