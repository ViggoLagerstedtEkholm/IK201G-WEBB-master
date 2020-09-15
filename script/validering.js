function validateForm() {

    var validated = false;
    var $textFirstName = $("#firstname").val();
    var $textLastName = $("#lastName").val();
    var $userMail = $("#userMail").val();
    var $phoneNumber = $("#phoneNumber").val();
    var $textComment = $("#textComment").val();
    var regExLenghtAndValidSigns = /^[a-zA-Z0-9\-]{3,35}$/;
    var regExLenghtAndValidSignsForComment = /^[a-zA-Z0-9\-]{3,}$/;
    var regExMail = /^[a-zA-Z0-9.%#$!&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
    var regExPhoneNumber = /^(^070|^073|^076|^072|^079)\d{7}$/;
    var textWholeName = $textFirstName + "" + $textLastName;


    var validatedName = regExLenghtAndValidSigns.test(textWholeName);
    console.log(` Namn  ${validatedName} `)
    var validatedComment = regExLenghtAndValidSignsForComment.test($textComment);
    console.log(` kommentar  ${validatedComment} `)
    var validatedMail = regExMail.test($userMail);
    console.log(` mail  ${validatedMail} `)
    var validatedNumber = regExPhoneNumber.test($phoneNumber);
    console.log(` nummer  ${validatedNumber} `)

    if (validatedName && validatedComment && validatedMail && validatedNumber) {
        validated = true;
    }


    return validated;


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


function checkReadyToSendComment(){

    if(!validateForm()){
        console.log("not validated")
        $("#formButton").removeClass("ready")
        $("#formButton").addClass("notReady")
    }

    else{
        console.log("validated")
        $("#formButton").removeClass("notReady")
        $("#formButton").addClass("ready")
    }


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



$("#formButton").on("click ", validateForm);



$("#textComment").focus(function () {
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

    $("#firstNameInfo").text("");
    checkReadyToSendComment()
})

$("#lastname").blur(function () {

    $("#lastNameInfo").text("");
    checkReadyToSendComment()
})

$("#phoneNumber").blur(function () {

    $("#phoneNumberInfo").text("");
    checkReadyToSendComment()
})

$("#userMail").blur(function () {

    $("#mailInfo").text("");
    checkReadyToSendComment()
})

$("#textComment").blur(function () {

    $("#commentInfo").text("");
    checkReadyToSendComment()
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



checkReadyToSendComment()
