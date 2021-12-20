$(document).ready(function() {
    var currentFloor = 2;
    var floorPath = $(".home-image path");
    var counerUp = $(".counter-up");
    var counerDown = $(".counter-down");
    var modal = $(".modal");
    var modalclosebtn = $(".modal-close-button");

    $(".home-image path").on("mouseover", function() {
        currentFloor = $(this).attr("data-floor");
        floorPath.removeClass("current-floor");
        $(".counter").text(currentFloor);
        $(`[data-floor=${currentFloor}]`).toggleClass("current-floor");
    });

    counerUp.on("click", function() {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-us", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    counerDown.on("click", function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-us", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });

    floorPath.on("click", function() {
        modal.toggleClass("is-open");
        $(".modal-counter").text($(".counter").text());
    });

    modalclosebtn.on("click", function() {
        modal.toggleClass("is-open");
    });

    $(".modal-image path").on("mouseover", function() {
        curflat = $(this).attr("data-flat");
        $(`[data-fl=${curflat}]`).toggleClass("active-flat-spisok");
    });

    $(".modal-image path").on("mouseleave", function() {
        curflat = $(this).attr("data-flat");
        $(`[data-fl=${curflat}]`).removeClass("active-flat-spisok");
    });

    $(".flat-item").on("mouseover", function() {
        curflat = $(this).children();
        curflat = curflat.attr("data-fl");
        console.log(curflat);
        $(`[data-flat=${curflat}]`).toggleClass("current-flat");
    });

    $(".flat-item").on("mouseleave", function() {
        curflat = $(this).children();
        curflat = curflat.attr("data-fl");
        console.log(curflat);
        $(`[data-flat=${curflat}]`).removeClass("current-flat");
    });

    $(".button-primary").on("click", function() {
        modal.toggleClass("is-open");
        $(".modal-counter").text($(".counter").text());
    });
});