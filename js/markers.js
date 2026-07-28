import { getOpenStatus } from "./utils.js";


export function createSpotMarker(map, place) {

    const icon = getCategoryIcon(place.category);
    const color = getCategoryColor(place.category);


    const marker = L.marker(
        [place.lat, place.lng],
        {
            icon: L.divIcon({

                className: "",

                html:
                `
                <div class="marker-glow"
                style="
                color:${color};
                font-size:32px;
                ">
                ${icon}
                </div>
                `,

                iconSize:[40,40],

                iconAnchor:[20,20]

            })
        }
    );


    marker.addTo(map);


    const openStatus =
    getOpenStatus(
        place.open,
        place.close
    );


    marker.bindPopup(`

        <div class="spot-popup">

            <h2>${place.name}</h2>

            <span>
            ${place.category.toUpperCase()}
            </span>


            <p>
            ${place.description}
            </p>


            <h3 style="color:${openStatus.color}">
            ${openStatus.icon}
            ${openStatus.text}
            </h3>


            <p>
            ⭐ ${place.rating}
            </p>


            <p>
            ${place.safe
            ? "🛡️ Community Safe"
            : "⚠️ Stay Alert"}
            </p>


            <a target="_blank"
            href="https://maps.google.com/?q=${place.lat},${place.lng}">
            🧭 Navigate
            </a>


        </div>

    `);



    return {

        marker: marker,

        category: place.category

    };

}



function getCategoryColor(category) {

    const colors = {

        tea:"#00FFFF",

        food:"#FF8800",

        cafe:"#B026FF",

        dessert:"#FF1493",

        default:"#FFFFFF"

    };


    return colors[
        category.toLowerCase()
    ] || colors.default;

}



function getCategoryIcon(category) {

    switch(
        category.toLowerCase()
    ){

        case "tea":
            return "🍵";

        case "food":
            return "🍔";

        case "cafe":
            return "☕";

        case "dessert":
            return "🍨";

        default:
            return "📍";

    }

}
