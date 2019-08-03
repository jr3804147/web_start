var btnNew=document.getElementById('btnAdd');
var inputText=document.getElementById('inputText');
inputText.focus();

var totalItems=0;
var totalListCount=0;

inputText.onkeyup=function(event){
    var itemText=inputText.value;
    if(itemText==" " || !itemText || itemText=="") return;
    if(event.which===13){
        var itemText=inputText.value;
        addNewItem(document.getElementById('todolist'),itemText)
        inputText.value="";
    }
}

btnNew.onclick=function(){
    let inputText=document.getElementById('inputText');
    var itemText=inputText.value;
    addNewItem(document.getElementById('todolist'),itemText)
};

function updateItemStatus(){
    var chId=this.id.replace('cb_','');   //cd_??
    var span=document.getElementById("item_"+chId);
    var listwk=document.getElementById("wk_"+chId);

    if(this.checked){
        span.className="checked";
        listwk.className="worked";
    }else{
        span.className='';
        listwk.className='';
    }
}

function addNewItem(list, itemText){
    totalItems++;
    var listItem=document.createElement('li');

    var checkBox=document.createElement('input');
    checkBox.type='checkBox';
    checkBox.id="cb_"+totalItems;
    checkBox.onclick=updateItemStatus;

    var span=document.createElement('span');
    span.id="item_"+totalItems;
    span.innerText=itemText;
  
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    listItem.id="wk_"+totalItems;

    list.appendChild(listItem)
}