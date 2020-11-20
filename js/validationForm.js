// REMOVE ALL DEFAULT ERROR MESSAGES
document.querySelector( "form" ).addEventListener( "invalid", function( event ) {
    event.preventDefault();
}, true );

// CUSTOM ERROR UI
var formContainer = document.getElementById('formContainer');
var formGroup = formContainer.getElementsByClassName('form-group')
var inputContainer = formContainer.getElementsByClassName('form-control');
var formIcon = document.getElementsByClassName('form-icon');
var errorSpan;
console.log(formIcon);
console.log(inputContainer);
console.log(formGroup);
document.getElementById('signup').onclick = function() {
    for(var i=0; i<inputContainer.length; i++)
    {
        if(inputContainer[i].value.length == 0) {
            console.log('nice job');
            var errorMsgElement = document.createElement("span");
            errorMsgElement.setAttribute("class","error");
            var errorMsg = document.createTextNode("Can't be empty!");
            errorMsgElement.appendChild(errorMsg);
            var currentIcon = formIcon[i];
            formGroup[i].insertBefore(errorMsgElement, currentIcon);
            inputContainer[i].style.border = '2px solid #ee9494';
        }
    }
    /*errorSpan = formContainer.getElementsByClassName('error');
    console.log(errorSpan);*/
}

document.getElementById('login').onclick = function() {
    for(var i=0; i<inputContainer.length; i++)
    {
        if(inputContainer[i].value.length == 0) {
            console.log('nice job');
            var errorMsgElement = document.createElement("span");
            errorMsgElement.setAttribute("class","error");
            var errorMsg = document.createTextNode("Can't be empty!");
            errorMsgElement.appendChild(errorMsg);
            var currentIcon = formIcon[i];
            formGroup[i].insertBefore(errorMsgElement, currentIcon);
            inputContainer[i].style.border = '2px solid #ee9494';
        }
    }
    /*errorSpan = formContainer.getElementsByClassName('error');
    console.log(errorSpan);*/
}

/*document.getElementById('InputEmail').focusin = function() {
    document.getElementById('InputEmail').style.border = '2px solid #1FCC8E';
}
document.getElementById('InputEmail').focusout = function() {
    document.getElementById('InputEmail').style.border = '2px solid #ffffff';
}*/

/*const isEmpty = str => !str.trim().length;*/
var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
document.getElementById('InputEmail').addEventListener("input", function() {
    if(this.value.match(emailFormat)) {
        console.log( "NAME is invalid (Empty)")
        document.getElementById('InputEmail').style.border = '2px solid #FFFFFF';
        document.getElementById('EmailIcon').style.fill = '#ffffff';
        /*console.log(errorSpan[0]);
        errorSpan[0].remove();*/
    }
})

var passFormat = /^[A-Za-z]\w{7,14}$/;
document.getElementById('InputName').addEventListener('input', function() {
    if (this.value.match(passFormat)) {
        console.log('working');
    }
})