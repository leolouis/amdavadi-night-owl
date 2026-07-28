import { createSpotMarker } from "./markers.js";

let allPlaces = [];
let currentCategory = "all";
let searchQuery = "";
let activeMarkers = [];

export async function initFilters(map, placesData) {
    allPlaces = placesData;

    const searchInput = document.getElementById("search-input");
    const categoryButtons = document.querySelectorAll(".category");

    searchInput.addEventListener("input", e => {
        searchQuery = e.target.value.toLowerCase();
        renderFilteredPlaces(map);
    });

    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category || "all";
            renderFilteredPlaces(map);
        });
    });
}

function renderFilteredPlaces(map) {
    // Remove existing markers
    activeMarkers.forEach(m => map.removeLayer(m));
    activeMarkers = [];

    const filtered = allPlaces.filter(place => {
        const matchesCategory = currentCategory === "all" || place.category.toLowerCase() === currentCategory;
        const matchesSearch = place.name.toLowerCase().includes(searchQuery) || place.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    filtered.forEach(place => {
        const marker = createSpotMarker(map, place);
        activeMarkers.push(marker);
    });
}
