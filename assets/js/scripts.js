$(document).ready(function () {
    showResponseContent();
});

// Shows response content when option is selected in the "Responses" panel
function showResponseContent() {
    $(".response-select").on("change", function () {
        var selectedCode = $(this).val();
        var methodName = $(this).data("methodname");
        var endpointName = $(this).data("endpointname");
        $(".response-select").find("option:selected").each(function () {
            if (selectedCode) {
                $("." + methodName + "-" + endpointName).show();
                $("." + methodName + "-" + endpointName).not("." + selectedCode + "-description").hide();
            }
        });
    });
}