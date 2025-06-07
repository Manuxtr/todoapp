const listContainer=document.getElementById("list-contianer");
const inputBox=document.getElementById("input-box");



function addTask(){
    if (inputBox.value ==='') {
       
        alert("field cant be empty");
        
    }
    
    else{
        let li=document.createElement("li")
        li.innerText=inputBox.value;
        console.log(li)
        listContainer.appendChild(li)
        const  span=document.createElement("span")
        span.innerHTML="\u00D7";
        li.appendChild(span);
        
    };
    // const newList=listContainer.

    inputBox.value="";
    saveData()   
};

inputBox.addEventListener("keyup",function(event){
    if(event.key==="Enter"){
        addTask();
    }
    saveData()
});
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
    
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}   

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
