let listDOM=document.getElementById("list");
listDOM.addEventListener("click",(e)=>e.target.classList.toggle("checked"));

function addicon(element){
    let btn=document.createElement("button");
    btn.type="button";
    btn.className="close-icon close";
    btn.addEventListener("click",(e)=>e.target.parentElement.parentElement.remove());
    element.appendChild(btn);   
}

let myNodeList=document.getElementsByTagName("li");
for(let i=0; i<myNodeList.length;i++){
    addicon(myNodeList[i]);
}


const idTask=document.getElementById("task");

function toastShow(className){
    $(document).ready($(className).toast("show"));   
}


function newElement()   {
    let txt=String(idTask.value).trim();
    if(txt){
        addItem(txt);
        idTask.value=""
        toastShow(".success");
    }
    else{
        toastShow(".error");
        idTask.value="";
    }
}

const addItem=(idTask)=>{
    let liDOM=document.createElement("li");
    liDOM.innerHTML=idTask;
    listDOM.appendChild(liDOM);
    addicon(liDOM);
}