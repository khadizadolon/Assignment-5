function getInputFieldById(id){

    const inputValue =document.getElementById(id).value ;
    return inputValue;
}

function getTextById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}