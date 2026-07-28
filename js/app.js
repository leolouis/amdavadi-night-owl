import { initMap, nightMap } from "./map.js";
import { locateUser } from "./geolocation.js";
import { checkLiveAlerts } from "./alerts.js";
import { spinRoulette } from "./roulette.js";
import { initFilters } from "./filter.js";


window.addEventListener("load", async () => {


    await initMap();


    const response = await fetch("./places.json");
    const places = await response.json();



    const locateBtn = document.querySelector(
        ".floating-actions button:nth-child(1)"
    );

    const rouletteBtn = document.querySelector(
        ".floating-actions button:nth-child(2)"
    );

    const addSpotBtn = document.querySelector(
        ".floating-actions button:nth-child(3)"
    );

    const alertBtn = document.querySelector(
        ".floating-actions button:nth-child(4)"
    );



    console.log("Floating buttons loaded");



    // 📍 Locate user

    locateBtn.addEventListener(
        "click",
        () => {

            locateUser(nightMap);

        }
    );



    // 🎲 Roulette

    rouletteBtn.addEventListener(
        "click",
        () => {

            spinRoulette(
                nightMap,
                places
            );

        }
    );



    // ➕

    addSpotBtn.addEventListener(
        "click",
        () => {

            window.open(
                "https://github.com/leolouis/amdavadi-night-owl/issues/new?template=new-spot.md",
                "_blank"
            );

        }
    );



    // 🚨

    alertBtn.addEventListener(
        "click",
        () => {

            window.open(
                "https://github.com/leolouis/amdavadi-night-owl/issues/new?title=Alert",
                "_blank"
            );

        }
    );



    initFilters(
        nightMap,
        places
    );



    checkLiveAlerts(
        "leolouis/amdavadi-night-owl"
    );


});
