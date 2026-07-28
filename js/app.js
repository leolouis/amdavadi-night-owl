import { initMap, nightMap } from "./map.js";
import { locateUser } from "./geolocation.js";
import { checkLiveAlerts } from "./alerts.js";
import { spinRoulette } from "./roulette.js";
import { initFilters } from "./filter.js";

window.onload = async () => {

    await initMap();

    // Fetch places again for filter/roulette access
    const response = await fetch("places.json");
    const places = await response.json();

    // Wire up floating action buttons (in DOM order: 📍 🎲 ➕ 🚨)
    const [locateBtn, rouletteBtn, addSpotBtn, alertBtn] =
        document.querySelectorAll(".floating-actions button");

    locateBtn.addEventListener("click", () => locateUser(nightMap));

    rouletteBtn.addEventListener("click", () => spinRoulette(nightMap, places));

    addSpotBtn.addEventListener("click", () => {
        window.open(
            `https://github.com/leolouis/amdavadi-night-owl/issues/new?template=new-spot.md`,
            "_blank"
        );
    });

    alertBtn.addEventListener("click", () => {
        window.open(
            `https://github.com/leolouis/amdavadi-night-owl/issues/new?title=🚨+Alert:+&body=Describe+the+alert+here`,
            "_blank"
        );
    });

    // Init search + category filters
    initFilters(nightMap, places);

    // Check for live alerts from GitHub Issues
    checkLiveAlerts("leolouis/amdavadi-night-owl");
};
