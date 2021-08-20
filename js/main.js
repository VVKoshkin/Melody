$(document).ready(function () {
    let selectedFloor = 2;
    const floorPaths = $(".main__building path");
    // слушатель для кликов по path дома
    floorPaths.on("click", function () {
        selectedFloor = $(this).attr("data-floor");
        // прописывание этажа на счётчике
        $(".counter-text").text(selectedFloor);
    });
    // слушатель при наведении
    floorPaths.on("mouseover", function () {
        // вычищаем классы выделения из слушателя кликов
        floorPaths.removeClass("current-floor");
        selectedFloor = $(this).attr("data-floor");
        // прописывание этажа на счётчике
        $(".counter-text").text(selectedFloor);
    });
    // слушатель для кликов по счетчикам (up вверх down вниз)
    $(".arrow-up").on("click", function () {
        if (selectedFloor < 18) {
            // прописывание этажа на счётчике
            selectedFloor++;
            let usFloor = selectedFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter-text").text(usFloor);
            // выделение этажа на картинке
            floorPaths.removeClass("current-floor");
            $(`[data-floor=${usFloor}]`).toggleClass("current-floor");
        }
    });
    $(".arrow-down").on("click", function () {
        if (selectedFloor > 2) {
            // прописывание этажа на счётчике
            selectedFloor--;
            let usFloor = selectedFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
            $(".counter-text").text(usFloor);
            // выделение этажа на картинке
            floorPaths.removeClass("current-floor");
            $(`[data-floor=${usFloor}]`).toggleClass("current-floor");
        }
    });
});