function createSpotMarker(map,place){



    const color =
    getCategoryColor(place.category);



    const marker =
    L.circleMarker(

        [
            place.lat,
            place.lng
        ],

        {

        radius:10,

        fillColor:color,

        color:"#ffffff",

        weight:2,

        fillOpacity:.9

        }

    );



    marker.addTo(map);



    marker.bindPopup(`

        <div class="spot-popup">


        <h2>
        ${place.name}
        </h2>


        <span>
        ${place.category.toUpperCase()}
        </span>


        <p>
        ${place.description}
        </p>


        <p>
        ⭐ ${place.rating}
        </p>


        <p>
        🕒 ${place.open} - ${place.close}
        </p>


        <p>
        ${place.safe ? "🟢 Safe Area":"🟠 Be Careful"}
        </p>


        <a
        target="_blank"
        href="https://maps.google.com/?q=${place.lat},${place.lng}">
        
        Navigate
        
        </a>


        </div>

    `);


}



function getCategoryColor(category){


    switch(category){


        case "tea":
            return "#00e5ff";


        case "food":
            return "#ffb703";


        case "cafe":
            return "#9b5cff";


        case "dessert":
            return "#ff4ecd";


        default:
            return "#ffffff";

    }


}
