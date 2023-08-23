let elem = document.getElementsByTagName("li");

function changeFocus(id){

    for(let li of elem){
        if(li.classList.contains("focusli") == true){
            li.classList.remove("focusli");
        }
    }

    let focusl = document.getElementById(id);
    focusl.classList.add("focusli");

}