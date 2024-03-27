$(document).ready(function () {
    $("#response-select").on("change", function () {
        var selectedCode = $(this).val();
        var methodName = $(this).data("methodname");
        var endpointName = $(this).data("endpointname");

        showResponseContent(selectedCode, methodName, endpointName);
    });
});

function showResponseContent(code, method, endpoint) {
    $("#response-select").find("option:selected").each(function () {
        if (code) {
            $("." + method + "-" + endpoint).show();
            $("." + method + "-" + endpoint).not("." + code + "-description").hide();
        }
    });
}