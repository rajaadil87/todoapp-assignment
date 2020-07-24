var details = document.getElementById('details')

function clickBtn(){
 var a  = document.getElementById('data')
 var li= document.createElement('li');
 var text = document.createTextNode(a.value)
 li.appendChild(text)   
 details.appendChild(li)

 var delBtn= document.createElement('Button');
 var text = document.createTextNode("Delete");
 delBtn.setAttribute("class","iteminputdata");
 delBtn.setAttribute("onclick","del(this)");
 
 delBtn.appendChild(text);
 li.appendChild(delBtn)

 var editBtn= document.createElement('Button');
 var text = document.createTextNode("Edit");
 editBtn.setAttribute("class","iteminputdata1");
 editBtn.setAttribute("onclick","edit(this)");

 editBtn.appendChild(text);
 li.appendChild(editBtn)

 a.value = ""

}

function del(e){
e.parentNode.remove()     
}

function edit(e){
    var edit = prompt("please edit item",e.parentNode.firstChild.nodeValue )
    e.parentNode.firstChild.nodeValue = edit
}

function deleteAll(){
    details.innerHTML=""
}
