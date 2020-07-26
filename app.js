var list=document.getElementById('list');



function addTodo(){
    var todo_item=document.getElementById("todo-item");
    var li=document.createElement('li');
    var liText=document.createTextNode(todo_item.value);
    li.appendChild(liText);
    console.log(li);
    list.appendChild(li);
    todo_item.value=""
    // create delete button
    var delBtn=document.createElement('button');  
    var delText=document.createTextNode("DELETE");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick",'deleteitem(this)')
    delBtn.className="btn btn-primary btn1 "




// create Edit button
var eidtBtn=document.createElement("button");
var editText=document.createTextNode("Edit Again");
eidtBtn.appendChild(editText);
li.appendChild(eidtBtn)
eidtBtn.setAttribute("onclick","edit(this)");
eidtBtn.className="btn btn-primary "





}
// // create Edit button
// var eidtBtn=document.createElement("button");
// var editText=document.createTextNode("Edit");
// eidtBtn.appendChild(editText);
// li.appendChild(eidtBtn)


function deleteitem(e){
    e.parentNode.remove()
}

function deleteall(){
    list.innerHTML="";
}

// // create Edit button
// var eidtBtn=document.createElement("button");
// var editText=document.createTextNode("Edit");
// eidtBtn.appendChild(editText);
// li.appendChild(eidtBtn)

function edit(e){
    var val= e.parentNode.firstChild.nodeValue;
    var edtvalue=prompt('enter edit value',val);
    e.parentNode.firstChild.nodeValue=edtvalue;
}