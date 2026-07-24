import { initMap } from "./map.js";

window.onload = async () => {

    await initMap();

    document.getElementById("loading-screen").style.display = "none";

}
