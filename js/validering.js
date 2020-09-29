/*function thats gets input from the user and then checks the input with regExp and returns true value if all variables are validated 
or returns a false value if varibles are not validated*/

$(function () {

    $(document).ready(getFormData());
    $(window).on("unload", storeFormData);
    $(document).ready(validateWhenLoad());

    function validateWhenLoad() {


        if (!validateFirstName()) {
            $("#firstNameLabel").addClass("redLabel");
            $("#firstNameInfo").text("Förnamnet måste innehålla minst tre bokstäver och inga tecken förutom bindesstreck");
        }

        if (!validateLastName()) {
            $("#lastNameLabel").addClass("redLabel");
            $("#lastNameInfo").text("Efternamnet måste innehålla minst tre bokstäver och inga tecken förutom bindesstreck");
        }

        if (!validateInputPhoneNumber()) {
            $("#phoneNumberLabel").addClass("redLabel");
            $("#phoneNumberInfo").text("Ange giltigt nr");
        }

        if (!validateInputMail()) {
            $("#mailLabel").addClass("redLabel");
            $("#mailInfo").text("Skriv in giltig email");
        }

        if (!validateInputComment()) {
            $("#commentLabel").addClass("redLabel");
            $("#commentInfo").text("Skriv mer text");
        }

    }

    function validateForm() {
        var validated = false;
        var $textFirstName = $("#firstname").val();
        var $textLastName = $("#lastname").val();
        var $userMail = $("#userMail").val();
        var $phoneNumber = $("#phoneNumber").val();
        var $textComment = $("#textComment").val();
        var regExLenghtAndValidSigns = /^[a-zA-Z0-9\-]{3,35}$/;
        var regExLenghtAndValidSignsForComment = /^[a-zA-Z0-9\-]{3,}$/;
        var regExMail = /^[a-zA-Z0-9.%#$!&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z]{2,})$/;
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

    function validateFirstName() {

        var $inputValueName = $("#firstname").val();
        console.log($inputValueName);
        var regExLenghtAndValidSigns = /^[a-zA-Z0-9\-]{3,35}$/;
        console.log(regExLenghtAndValidSigns.test($inputValueName));
        return regExLenghtAndValidSigns.test($inputValueName);

    }

    function validateLastName() {
        var $inputValueName = $("#lastname").val();
        var regExLenghtAndValidSigns = /^[a-zA-Z0-9\-]{3,35}$/;
        return regExLenghtAndValidSigns.test($inputValueName);
    }

    function validateInputComment() {
        var $inputValueComment = $("#textComment").val();
        var regExLenghtAndValidSignsForComment = /^[a-zA-Z0-9\-]{3,}$/;
        return regExLenghtAndValidSignsForComment.test($inputValueComment);
    }

    function validateInputMail() {
        var $inputValueMail = $("#userMail").val();
        var regExMail = /^[a-zA-Z0-9.%#$!&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-zA-Z]{2,})$/;
        return regExMail.test($inputValueMail);
    }

    function validateInputPhoneNumber() {
        var $inputValuePhoneNumber = $("#phoneNumber").val();
        var regExPhoneNumber = /^(^070|^073|^076|^072|^079)+-\d{7}$/;
        return regExPhoneNumber.test($inputValuePhoneNumber);
    }

    $("form").on('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            $("#firstname").val("");
            $("#lastname").val("");
            $("#userMail").val("");
            $("#phoneNumber").val("");
            $("#textComment").val("Skriv din text här");

            var $formButtonValidated = $("#formButton"),
                $ColorBefore = $formButtonValidated.css("background");
            $formButtonValidated.css("background", "green");
            setTimeout(function () {
                $formButtonValidated.css("background", $ColorBefore);
            }, 400);


        }
        else {
            var $formButtonValidated = $("#formButton"),
                $ColorBefore = $formButtonValidated.css("background");
            $formButtonValidated.css("background", " rgb(187, 60, 60)");
            setTimeout(function () { $formButtonValidated.css("background", $ColorBefore); }, 400);

        }

    });



    $("#lastname").keyup(function () {

        if (validateLastName()) {
            $("#lastNameLabel").removeClass("redLabel");
            $("#lastNameInfo").text("");
        }

        else if (!validateLastName()) {
            $("#lastNameLabel").addClass("redLabel");
            $("#lastNameInfo").text("Efternamnet måste innehålla minst tre bokstäver och inga tecken förutom bindesstreck");
        }

    })

    $("#firstname").keyup(function () {


        if (validateFirstName()) {
            $("#firstNameLabel").removeClass("redLabel");
            $("#firstNameInfo").text("");
        }

        else if (!validateFirstName()) {
            $("#firstNameLabel").addClass("redLabel");
            $("#firstNameInfo").text("Förnamnet måste innehålla minst tre bokstäver och inga tecken förutom bindesstreck");
        }

    })

    $("#userMail").keyup(function () {

        if (validateInputMail()) {
            $("#mailLabel").removeClass("redLabel");
            $("#mailInfo").text("");
        }

        else if (!validateInputMail()) {
            $("#mailLabel").addClass("redLabel");
            $("#mailInfo").text("Skriv in giltig email");
        }

    })

    $("#textComment").keyup(function () {


        if (validateInputComment()) {
            $("#commentLabel").removeClass("redLabel");
            $("#commentInfo").text("");
        }

        else if (!validateInputComment()) {
            $("#commentLabel").addClass("redLabel");
            $("#commentLabel").text("Skriv mer text");
        }


    })

    $("#phoneNumber").keyup(function () {

        if (validateInputPhoneNumber("#phoneNumber")) {
            $("#phoneNumberLabel").removeClass("redLabel");
            $("#phoneNumberInfo").text("");
        }

        else if (!validateInputPhoneNumber("#phoneNumber")) {
            $("#phoneNumberLabel").addClass("redLabel");
            $("#phoneNumberInfo").text("Ange giltigt nr (XXX-XXXXXXX)");
        }

    })



    /* Store data as a JSON-file*/
    function storeFormData() {
        var storedData = $("#firstname").val();
        localStorage.setItem("localData", JSON.stringify(storedData));
    }
    /*Get data and parse it to JSON-format then inserts data into the loaded form*/
    function getFormData() {
        var storageFormData = (localStorage.getItem("localData"));
        var storageFormDatatoJson = JSON.parse(storageFormData);

        $("#firstname").val(storageFormDatatoJson.formInfo[0].formFirstName);
        {
            $("#lastname").val(storageFormDatatoJson.formInfo[0].formLastName);
        }

        $("#userMail").val(storageFormDatatoJson.formInfo[0].formMail);

        $("#phoneNumber").val(storageFormDatatoJson.formInfo[0].formPhoneNumber);

        $("#textComment").val(storageFormDatatoJson.formInfo[0].formComment);

    }

    function storeFormData() {
        if ($("#firstname").val().length > 0) {
            $firstName = $("#firstname").val()
        }
        else {

            $firstName = ""
        }

        if ($("#lastname").val().length > 0) {
            $lastName = $("#lastname").val()
        }

        else {

            $lastName = ""
        }

        if ($("#userMail").val().length > 0) {
            $mail = $("#userMail").val()
        }

        else {

            $mail = ""
        }


        if ($("#textComment").val().length > 0) {
            $comment = $("#textComment").val()
        }

        else {

            $comment = ""
        }


        if ($("#phoneNumber").val().length > 0) {
            $phoneNumber = $("#phoneNumber").val()
        }

        else {

            $phoneNumber = ""
        }

        var jsonObj = {
            formInfo: [
                {
                    formLastName: $lastName,
                    formFirstName: $firstName,
                    formMail: $mail,
                    formPhoneNumber: $phoneNumber,
                    formComment: $comment
                }
            ]

        }
        localStorage.setItem("localData", JSON.stringify(jsonObj));

    };




})