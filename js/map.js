import { createSpotMarker } from "./markers.js";


export let nightMap;



export async function initMap() {


    nightMap = L.map("map", {
        zoomControl: false
    })
    .setView(
        [23.0225, 72.5714],
        13
    );



    L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
            attribution:
            "&copy; OpenStreetMap & CARTO"
        }
    )
    .addTo(nightMap);



    await loadPlaces();



    setTimeout(() => {

        nightMap.invalidateSize();

    }, 500);


}





async function loadPlaces() {


    try {


        const response = await fetch("./places.json");



        if (!response.ok) {

            throw new Error(
                "places.json not found"
            );

        }



        const places = await response.json();



        console.log(
            "Loaded locations:",
            places.length
        );



        places.forEach(place => {


            createSpotMarker(
                nightMap,
                place
            );


        });



    }

    catch(error) {


        console.error(
            "Map loading error:",
            error
        );


    }


}
