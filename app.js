'use strict';

var qrcode = new QRCode("qrcode");

function manipulate() {
    var profilePage = $("#profile-page").val();
    var fullName = $("#full-name").val();

    if (profilePage && fullName > '0') {
        var origstr = profilePage + 'for ' + fullName + 'profile';
        var b64str = utf8_to_b64(origstr);

        qrcode.makeCode('visit: ' + origstr);
    } else {
        alert("Please fill all blanks.");
    }
}

function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

$("#generate").click(function(event){
    event.preventDefault();
    manipulate();
});
