const InputArea=document.getElementById("InputArea");
const ListContainer=document.getElementById("List-Container");

function addTask(){
    if(InputArea.value===''){
        alert("You must write Something!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=InputArea.value;
        ListContainer.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
        ListContainer.scrollTo({top:ListContainer.scrollHeight,behavior:"smooth"})
    }
    saveData()
    InputArea.value=''
}
InputArea.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        addTask();
    }
})
ListContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName==="SPAN")
        e.target.parentElement.remove();
        saveData()
})

function saveData(){
    localStorage.setItem("data",ListContainer.innerHTML);
}

function showData(){
    ListContainer.innerHTML=localStorage.getItem("data");
}
showData();