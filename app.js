'use strict';

var qrcode = new QRCode("qrcode");

function manipulate() {
    var webUrl = $("#web-url").val();
    var fullDesc = $("#full-desc").val();

    if (webUrl && fullDesc > '0') {
        var origstr = webUrl + ' for ' + fullDesc;
        var b64str = utf8_to_b64(origstr);

        qrcode.makeCode('Visit: ' + origstr);
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
