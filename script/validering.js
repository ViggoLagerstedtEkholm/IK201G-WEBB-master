
var clickedOnTextArea = false;

getFormData()

function validateForm() {

    var validated = false;
    var $textFirstName = $("#firstname").val();
    var $textLastName = $("#lastname").val();
    var $userMail = $("#userMail").val();
    var $phoneNumber = $("#phoneNumber").val();
    var $textComment = $("#textComment").val();
    var regExLenghtAndValidSigns = /^[a-zA-Z0-9\-]{3,35}$/;
    var regExLenghtAndValidSignsForComment = /^[a-zA-Z0-9\-]{3,}$/;
    var regExMail = /^[a-zA-Z0-9.%#$!&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
    var regExPhoneNumber = /^(^070|^073|^076|^072|^079)\d{7}$/;
    var textWholeName = $textFirstName + "" + $textLastName;
    var validatedName = regExLenghtAndValidSigns.test(textWholeName);
    var validatedComment = regExLenghtAndValidSignsForComment.test($textComment);
    var validatedMail = regExMail.test($userMail);
    var validatedNumber = regExPhoneNumber.test($phoneNumber);

    if (validatedName && validatedComment && validatedMail && validatedNumber) {
        validated = true;
    }
    return validated;
}

$("form").on('submit', function (e) {
    e.preventDefault();
    if (validateForm()) {
        $("#firstname").val("");
        $("#lastname").val("");
        $("#userMail").val("");
        $("#phoneNumber").val("");
        $("#textComment").val("Skriv din text här");
        checkReadyToSendComment()
    }
    else {
        
        addWarningToTextBox("#firstname")
        addWarningToTextBox("#lastname")
        addWarningToMailTextBox("#userMail")
        addWarningToPhoneNumberTextBox("#phoneNumber")
        addWarningToCommentArea("#textComment")


        }
     
        });

        function addWarningToTextBoxWhenLoading(textBox){
            if(($(textBox).val()) && !(validateInputName(textBox))){
        
            $(textBox).removeClass("regularFormBorder");  
            $(textBox).addClass("redBorder");
            }
        }
        
        function addWarningToMailTextBoxWhenLoading(textBox){
            if(($(textBox).val()) && !validateInputMail(textBox)){
        
            $(textBox).removeClass("regularFormBorder");  
            $(textBox).addClass("redBorder");
            }
        }
        
        function addWarningToPhoneNumberTextBoxWhenLoading(textBox){
            if(($(textBox).val()) && !validateInputPhoneNumber(textBox)){
        
            $(textBox).removeClass("regularFormBorder");  
            $(textBox).addClass("redBorder");
            }
        }
        
        function addWarningToCommentAreaWhenLoading(textBox){
            if(($(textBox).val()) && !validateInputComment(textBox)){
        
            $(textBox).removeClass("regularFormTextareaWithBorder");  
            $(textBox).addClass("redBorderForTextarea");
            }
        }


        

function addWarningToTextBox(textBox){
    if(!validateInputName(textBox)){

    $(textBox).removeClass("regularFormBorder");  
    $(textBox).addClass("redBorder");
    }
}

function addWarningToMailTextBox(textBox){
    if(!validateInputMail(textBox)){

    $(textBox).removeClass("regularFormBorder");  
    $(textBox).addClass("redBorder");
    }
}

function addWarningToPhoneNumberTextBox(textBox){
    if(!validateInputPhoneNumber(textBox)){

    $(textBox).removeClass("regularFormBorder");  
    $(textBox).addClass("redBorder");
    }
}

function addWarningToCommentArea(textBox){
    if(!validateInputComment(textBox)){

    $(textBox).removeClass("regularFormTextareaWithBorder");  
    $(textBox).addClass("redBorderForTextarea");
    }
}



function addWarningToTextBox(textBox){
    if(!validateInputName(textBox)){

    $(textBox).removeClass("regularFormBorder");  
    $(textBox).addClass("redBorder");
    }
}

function addWarningToMailTextBox(textBox){
    if(!validateInputMail(textBox)){

    $(textBox).removeClass("regularFormBorder");  
    $(textBox).addClass("redBorder");
    }
}

function addWarningToPhoneNumberTextBox(textBox){
    if(!validateInputPhoneNumber(textBox)){

    $(textBox).removeClass("regularFormBorder");  
    $(textBox).addClass("redBorder");
    }
}

function addWarningToCommentArea(textBox){
    if(!validateInputComment(textBox)){

    $(textBox).removeClass("regularFormTextareaWithBorder");  
    $(textBox).addClass("redBorderForTextarea");
    }
}

function removeWarningToTextBox(textBox){
    if(validateInputName(textBox)){

    $(textBox).removeClass("redBorder");  
    $(textBox).addClass("regularFormBorder");
    }
}

function removeWarningToMailTextBox(textBox){
    if(validateInputMail(textBox)){

    $(textBox).removeClass("redBorder");  
    $(textBox).addClass("regularFormBorder");
    }
}

function removeWarningToPhoneNumberTextBox(textBox){
    if(validateInputPhoneNumber(textBox)){

    $(textBox).removeClass("redBorder");  
    $(textBox).addClass("regularFormBorder");
    }
}

function removeWarningToCommentArea(textBox){
    if(validateInputComment(textBox)){

    $(textBox).removeClass("redBorderForTextarea");  
    $(textBox).addClass("regularFormTextareaWithBorder");
    }
}




function checkReadyToSendComment() {
    if (!validateForm()) {
        console.log("not validated")
        $("#formButton").removeClass("ready")
        $("#formButton").addClass("notReady")
    }
    else {
        console.log("validated")
        $("#formButton").removeClass("notReady")
        $("#formButton").addClass("ready")
    }
}


function validateInputName(inputObject) {
    var validated = false;
    var $inputValueName = $(inputObject).val();
    var regExLenghtAndValidSigns = /^[a-zA-Z0-9\-]{3,35}$/;
    var validatedName = regExLenghtAndValidSigns.test($inputValueName);
    if (validatedName) {
        validated = true;
    }
    return validated;
}


function validateInputComment(inputObject) {
    var validated = false;
    var $inputValueComment = $(inputObject).val();
    var regExLenghtAndValidSignsForComment = /^[a-zA-Z0-9\-]{3,}$/;
    var validatedComment = regExLenghtAndValidSignsForComment.test($inputValueComment);
    if (validatedComment) {
        validated = true;
    }

    return validated;
}

function validateInputMail(inputObject) {
    var validated = false;
    var $inputValueMail = $(inputObject).val();
    var regExMail = /^[a-zA-Z0-9.%#$!&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
    var validatedMail = regExMail.test($inputValueMail);
    if (validatedMail) {
        validated = true;
    }

    return validated;
}

function validateInputPhoneNumber(inputObject) {
    var validated = false;
    var $inputValuePhoneNumber = $(inputObject).val();
    var regExPhoneNumber = /^(^070|^073|^076|^072|^079)\d{7}$/;
    var validatedPhoneNumber = regExPhoneNumber.test($inputValuePhoneNumber);
    if (validatedPhoneNumber) {
        validated = true;
    }

    return validated;
}

function validateInputNameAtStart(inputObject) {
    var validated = false;
    var $inputValueName = $(inputObject).val();
    var regExLenghtAndValidSigns = /^[a-zA-Z0-9\-]{3,35}$/;
    var validatedName = regExLenghtAndValidSigns.test($inputValueName);
    if ($inputValueName === "" ||validatedName) {
        validated = true;
    }
    return validated;
}


function validateInputCommentAtStart(inputObject) {
    var validated = false;
    var $inputValueComment = $(inputObject).val();
    var regExLenghtAndValidSignsForComment = /^[a-zA-Z0-9\-]{3,}$/;
    var validatedComment = regExLenghtAndValidSignsForComment.test($inputValueComment);
    if ($inputValueComment === "" || validatedComment) {
        validated = true;
    }

    return validated;
}

function validateInputMailAtStart(inputObject) {
    var validated = false;
    var $inputValueMail = $(inputObject).val();
    var regExMail = /^[a-zA-Z0-9.%#$!&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
    var validatedMail = regExMail.test($inputValueMail);
    if (validatedMail) {
        validated = true;
    }

    return validated;
}

function validateInputPhoneNumberAtStart(inputObject) {
    var validated = false;
    var $inputValuePhoneNumber = $(inputObject).val();
    var regExPhoneNumber = /^(^070|^073|^076|^072|^079)\d{7}$/;
    var validatedPhoneNumber = regExPhoneNumber.test($inputValuePhoneNumber);
    if (validatedPhoneNumber) {
        validated = true;
    }

    return validated;
}


$("#textComment").focus(function () {
    if(!clickedOnTextArea){
    $("#textComment").val("");}
    if (!validateInputComment("#textComment")) {
        $("#textComment").addClass("redLabel");
        $("#commentInfo").text("Meddelandet måste vara längre");
    }
})

$("#userMail").focus(function () {
    if (!validateInputMail("#userMail")) {
        $("#mailLabel").addClass("redLabel");
        $("#mailInfo").text("Skriv in giltig email");
    }
})

$("#phoneNumber").focus(function () {
    if (!validateInputPhoneNumber("#phoneNumber")) {
        $("#phoneNumberLabel").addClass("redLabel");
        $("#phoneNumberInfo").text("Skriv i format XXX-XXX-XX-XX");
    }
})

$("#firstname").focus(function () {
    if (!validateInputName("#firstname")) {
        $("#firstNameLabel").addClass("redLabel");
        $("#firstNameInfo").text("Förnamnet måste innehålla minst tre bokstäver och inga tecken förutom bindesstreck");
    }
})

$("#lastname").focus(function () {
    if (!validateInputName("#lastname")) {
        $("#lastNameLabel").addClass("redLabel");
        $("#lastNameInfo").text("Efternamnet måste innehålla minst tre bokstäver och inga tecken förutom bindesstreck");
    }
})

$("#firstname").blur(function () {
    addWarningToTextBox("#firstname")
    $("#firstNameInfo").text("");
    checkReadyToSendComment()
    removeWarningToTextBox("#firstname");
})

$("#lastname").blur(function () {
    addWarningToTextBox("#lastname")
    $("#lastNameInfo").text("");
    checkReadyToSendComment()
    removeWarningToTextBox("#lastname");
})

$("#phoneNumber").blur(function () {
    addWarningToPhoneNumberTextBox("#phoneNumber")
    $("#phoneNumberInfo").text("");
    checkReadyToSendComment()
    removeWarningToPhoneNumberTextBox("#phoneNumber");
})

$("#userMail").blur(function () {
    addWarningToMailTextBox("#userMail")
    $("#mailInfo").text("");
    checkReadyToSendComment()
    removeWarningToMailTextBox("#userMail")
})

$("#textComment").blur(function () {
    clickedOnTextArea = true;
    addWarningToCommentArea("#textComment")
    $("#commentInfo").text("");
    checkReadyToSendComment()
    removeWarningToCommentArea("#textComment")
})

$("#lastname").keyup(function () {


    if (validateInputName("#lastname")) {
        $("#lastNameLabel").removeClass("redLabel");
        $("#lastNameInfo").text("");
    }

    else if (!validateInputName("#lastname")) {
        $("#lastNameLabel").addClass("redLabel");
        $("#lastNameInfo").text("Efternamnet måste innehålla minst tre bokstäver och inga tecken förutom bindesstreck");
    }

    checkReadyToSendComment()
})

$("#firstname").keyup(function () {


    if (validateInputName("#firstname")) {
        $("#firstNameLabel").removeClass("redLabel");
        $("#firstNameInfo").text("");
    }

    else if (!validateInputName("#firstname")) {
        $("#firstNameLabel").addClass("redLabel");
        $("#firstNameInfo").text("Förnamnet måste innehålla minst tre bokstäver och inga tecken förutom bindesstreck");
    }

    
    checkReadyToSendComment()
})

$("#userMail").keyup(function () {

    if (validateInputMail("#userMail")) {
        $("#mailLabel").removeClass("redLabel");
        $("#mailInfo").text("");
    }

    else if (!validateInputMail("#userMail")) {
        $("#mailLabel").addClass("redLabel");
        $("#mailInfo").text("Skriv in giltig email");
    }

    checkReadyToSendComment()
})

$("#textComment").keyup(function () {


    if (validateInputComment("#textComment")) {
        $("#textComment").removeClass("redLabel");
        $("#commentInfo").text("");
    }

    else if (!validateInputComment("#textComment")) {
        $("#textComment").addClass("redLabel");
        $("#commentInfo").text("Skriv mer text");
    }

    checkReadyToSendComment()
})

$("#phoneNumber").keyup(function () {

    if (validateInputPhoneNumber("#phoneNumber")) {
        $("#phoneNumberLabel").removeClass("redLabel");
        $("#phoneNumberInfo").text("");
    }

    else if (!validateInputPhoneNumber("#phoneNumber")) {
        $("#phoneNumberLabel").addClass("redLabel");
        $("#phoneNumberInfo").text("Ange giltigt nr");
    }

    checkReadyToSendComment()
})
/*

function storeFormData(){
    var storedData = $("#firstname").val();
    localStorage.setItem("localData", JSON.stringify(storedData));
}
*/
function getFormData(){
var storageFormData = (localStorage.getItem("localData"));
var storageFormDatatoJson = JSON.parse(storageFormData);

console.log(storageFormDatatoJson.formInfo[0].formLastName);


$("#firstname").val(storageFormDatatoJson.formInfo[0].formFirstName);


{
$("#lastname").val(storageFormDatatoJson.formInfo[0].formLastName);
}

$("#userMail").val(storageFormDatatoJson.formInfo[0].formMail);


$("#phoneNumber").val(storageFormDatatoJson.formInfo[0].formPhoneNumber);


$("#textComment").val(storageFormDatatoJson.formInfo[0].formComment);

}



function storeFormData(){
    
    if($("#firstname").val().length > 0){
        firstName = $("#firstname").val()
    }   

    else{

       firstName = ""
    }


    if($("#lastname").val().length > 0){
        lastName = $("#lastname").val()
    }   

    else{

       lastName = ""
    }


    if($("#userMail").val().length > 0){
        mail = $("#userMail").val()
    }   

    else{

        mail = ""
    }


    if($("#textComment").val().length > 0){
        comment = $("#textComment").val()
    }   

    else{

        comment = ""
    }


    if($("#phoneNumber").val().length > 0){
        phoneNumber = $("#phoneNumber").val()
    }   

    else{

        phoneNumber = ""
    }

    
    var jsonObj = {
        
     

    formInfo: [
        {
         formLastName: lastName,
         formFirstName: firstName,
         formMail: mail,
         formPhoneNumber: phoneNumber,
         formComment: comment 
        }
    ]
    
    }
    localStorage.setItem("localData", JSON.stringify(jsonObj));

  
};

$(window).on("unload",storeFormData);
$(window).on("load",  getFormData)


addWarningToTextBoxWhenLoading("#firstname")
addWarningToTextBoxWhenLoading("#lastname")
addWarningToMailTextBoxWhenLoading("#userMail")
addWarningToPhoneNumberTextBoxWhenLoading("#phoneNumber")
addWarningToCommentAreaWhenLoading("#textComment")


checkReadyToSendComment()


$(function(){

var text1 = $("#headerForMain");
text1.fadeIn(2750);

var text2 = $("#textForMain");
text2.fadeIn(4550);

})





