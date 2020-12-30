const inputText = document.getElementById("mail");
const errormsg=document.getElementById("msg");
const mailValidation=()=>{
    if(!inputText.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        inputText.classList.add("error");
        errormsg.style.display="inline";
    }else{
        inputText.classList.remove("error");
        errormsg.style.display="none";
    }
}