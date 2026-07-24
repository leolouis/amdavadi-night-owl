import { initMap, nightMap } from "./map.js";
import { locateUser } from "./geolocation.js";


window.onload = async () => {


    await initMap();


    document
    .getElementById("loading-screen")
    .style.display = "none";



    document
    .getElementById("locateBtn")
    .addEventListener(
        "click",
        ()=>locateUser(nightMap)
    );


}
