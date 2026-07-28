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
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
            "&copy; OpenStreetMap contributors",

            maxZoom:19
        }
    ).addTo(nightMap);



    await loadPlaces();



    setTimeout(() => {

        nightMap.invalidateSize();

    }, 500);


}





async function loadPlaces() {


    try {


        const response =
            await fetch("./places.json");



        if(!response.ok){

            throw new Error(
                `places.json error: ${response.status}`
            );

        }



        const places =
            await response.json();



        console.log(
            "Loaded locations:",
            places.length
        );



        const bounds = [];



        places.forEach(place => {


            createSpotMarker(
                nightMap,
                place
            );



            bounds.push([
                place.lat,
                place.lng
            ]);


        });



        // Automatically show all locations

        if(bounds.length > 0){

            nightMap.fitBounds(
                bounds,
                {
                    padding:[50,50]
                }
            );

        }



    }

    catch(error){


        console.error(
            "Map loading error:",
            error
        );


    }


}
