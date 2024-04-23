// Calls functions after the document is loaded and ready
$(document).ready(function () {
    showResponseContent();
    themeToggle();
});

// Shows response content according to the option selected in the "Responses" panel
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

function themeToggle() {
    $("#toggle-theme").on("click", function () {
        $("*").toggleClass("dark-mode");
        $(".navbar").toggleClass("bg-body-tertiary");
        $(".navbar").toggleClass("bg-dark");
        $("table").toggleClass("table-dark");
    })
}