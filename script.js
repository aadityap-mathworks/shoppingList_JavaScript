var button = document.getElementById("but");
var input = document.getElementById("userinput");
var ul =document.getElementById("list");
var div = document.getElementById("d1");

function addToList()
{
		var li =document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);	
		input.value = "";
		li.setAttribute("id","listitem");
		addDeleteButton(li);
}   

function buttonClick () {
	if(input.value!=""){
		addToList();

	}
}

function keyEvent(event){
	if((input.value!="") && (event.keyCode===13)){
		addToList();
		
	}
}

function strikeThrough(event){

	if(event.target.id==="listitem"){
		event.target.classList.toggle("done");	}

}

function addDeleteButton(li)
{
	li.innerHTML= li.innerHTML + " <button id=\"del\">Delete</button>";
}

function deleteItem(event)
{
	if(event.target.id==="del"){
	 	event.target.parentElement.remove();
	}
}


ul.addEventListener("click", strikeThrough);

button.addEventListener("click",buttonClick);

input.addEventListener("keypress",keyEvent);

div.addEventListener("click",deleteItem);