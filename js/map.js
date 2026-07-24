let nightMap;


function initializeMap(){


    nightMap = L.map("map",{

        zoomControl:false

    })
    .setView(
        [
            23.0225,
            72.5714
        ],
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



    loadPlaces();


}



async function loadPlaces(){


    const response =
    await fetch("places.json");


    const places =
    await response.json();



    places.forEach(place=>{


        createSpotMarker(
            nightMap,
            place
        );


    });


}

