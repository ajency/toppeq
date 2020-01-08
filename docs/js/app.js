$(document).ready(function () {
    $(".select2").select2({
        minimumResultsForSearch: -1
    });

    $(".select-normal").select2({
        minimumResultsForSearch: -1,
        containerCssClass: "cs-select-normal",
        dropdownCssClass: "cs-select-normal-results",
    });
});