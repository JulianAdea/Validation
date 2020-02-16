function validateDropbox(){
    var type = document.getElementById("eType");
    var choice = type.options[type.selectedIndex].value;
    if(choice==0)
    {
        alert("NOT VALID");
    }
}

function eTitleVal(){
if (document.getElementById("eventTitle").value == "")
{
    alert("NOT VALID");
}
}

function eDateSVal(){
    if (document.getElementById("dateStart").value == "")
    {
        alert("NOT VALID");
    }
}

function eDateEVal(){
    if (document.getElementById("dateTo").value == "")
    {
        alert("NOT VALID");
    }
}

function ePostDateVal(){
    if (document.getElementById("postDate").value == "")
    {
        alert("NOT VALID");
    }
}

function validate(){
    eTypeVal();
    eTitleVal();
    eDateSVal();
    eDateEVal();
    ePostDateVal();
}

function save(){
    validate();
}


function cancel(){

}