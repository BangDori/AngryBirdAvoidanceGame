"use strict";
const menu = document.querySelector("#menu"), start_button = menu === null || menu === void 0 ? void 0 : menu.querySelector(".start"), start = document.querySelector("#start"), history_button = menu === null || menu === void 0 ? void 0 : menu.querySelector(".history"), record = document.querySelector("#history"), // history
pause = document.querySelector(".pause"), modal = document.querySelector(".js-modal"), restart = document.querySelector(".restart"), home = document.querySelectorAll(".home");
const ANI = "animation";
const NONE = "none";
function init() {
    start_button === null || start_button === void 0 ? void 0 : start_button.addEventListener("click", startGame);
    history_button === null || history_button === void 0 ? void 0 : history_button.addEventListener("click", openHistory);
    pause === null || pause === void 0 ? void 0 : pause.addEventListener("click", () => {
        modal === null || modal === void 0 ? void 0 : modal.classList.remove(NONE);
    });
    restart === null || restart === void 0 ? void 0 : restart.addEventListener("click", () => {
        reStart();
        modal === null || modal === void 0 ? void 0 : modal.classList.add(NONE);
    });
    home.forEach((h) => {
        h === null || h === void 0 ? void 0 : h.addEventListener("click", () => {
            goHome();
            modal === null || modal === void 0 ? void 0 : modal.classList.add(NONE);
        });
    });
}
init();
