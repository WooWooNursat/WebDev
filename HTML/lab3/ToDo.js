function addItem(){
    let text = document.querySelector('#text');
    if(text.value == "") {alert("Write a task!")}
    else
    {
        let list = document.querySelector('#list');
        let item = document.createElement("li");

        let p = document.createElement("p");
        p.innerHTML = text.value;
        p.setAttribute('class', 'items');

        let input = document.createElement("input");
        input.setAttribute('type', 'checkbox');
        input.setAttribute('class', 'items');
        input.setAttribute('onclick', 'crossItem(this)');
        

        let image = document.createElement("img");
        image.setAttribute('src', 'trash2.png');
        image.setAttribute('class', 'items');
        image.setAttribute('onclick', 'dropItem(this)');

        item.appendChild(input);
        item.appendChild(p);
        item.appendChild(image);

        list.appendChild(item);

        text.value = "";
    }
}

function crossItem(el){
    let p = el.parentNode.querySelector("p");
    if (el.checked){
        p.style = "text-decoration:line-through;";
    }
    else {
        p.style = "text-decoration: none;";
    }
}

function dropItem(el){
    let item = el.parentNode;
    while(item.firstChild){
        item.removeChild(item.firstChild);
    }
    item.parentNode.removeChild(item);
}