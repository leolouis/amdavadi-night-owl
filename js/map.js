let map;
let markers = [];

/**
 * Initialize Leaflet map
 */
export async function initMap() {

    map = L.map("map", {
        zoomControl: false
    }).setView(
        [
            CONFIG.defaultLocation.lat,
            CONFIG.defaultLocation.lng
        ],
        CONFIG.defaultLocation.zoom
    );

    L.control.zoom({
        position: "bottomleft"
    }).addTo(map);

    L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
            attribution:
                "&copy; OpenStreetMap contributors &copy; CARTO"
        }
    ).addTo(map);

    await loadPlaces();
}

/**
 * Load places.json
 */

async function loadPlaces() {

    try {

        const response = await fetch(CONFIG.placesFile);

        const places = await response.json();

        places.forEach(createMarker);

    }

    catch (error) {

        console.error("Unable to load places.", error);

    }

}

/**
 * Marker creation
 */

function createMarker(place) {

    const marker = L.circleMarker(
        [
            place.lat,
            place.lng
        ],
        {

            radius: 9,

            color: markerColor(place.category),

            fillColor: markerColor(place.category),

            fillOpacity: 1,

            weight: 2

        }
    );

    marker.bindPopup(generatePopup(place));

    marker.addTo(map);

    markers.push(marker);

}

/**
 * Marker colors
 */

function markerColor(category) {

    switch (category.toLowerCase()) {

        case "tea":

            return "#00D9FF";

        case "food":

            return "#FFB000";

        case "cafe":

            return "#8B5CF6";

        case "dessert":

            return "#EC4899";

        default:

            return "#FFFFFF";

    }

}

/**
 * Popup HTML
 */

function generatePopup(place) {

    return `

    <div class="popup">

        <h2>${place.name}</h2>

        <p>${place.category}</p>

        <p>⭐ ${place.rating}</p>

        <p>${place.opens} → ${place.closes}</p>

        <p>${place.safe ? "🟢 Safe Area" : "🟠 Use Caution"}</p>

        <div class="popup-buttons">

            <a target="_blank"
               href="https://www.google.com/maps?q=${place.lat},${place.lng}">
               Navigate
            </a>

            <button onclick="shareSpot('${place.name}',${place.lat},${place.lng})">
                Share
            </button>

        </div>

    </div>

    `;

}
