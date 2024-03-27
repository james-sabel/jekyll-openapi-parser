$(document).ready(function() {
    console.log( "ready!" );
});

function showResponseContent(code, method, endpoint) {

    $("#response-select").find("option:selected").each(function () {
        if (code) {
            $("." + method + "-" + endpoint).show();
            $("." + method + "-" + endpoint).not("." + code + "-description").hide();
        }
    });

}