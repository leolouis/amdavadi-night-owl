import { createSpotMarker } from "./markers.js";

let allPlaces = [];
let currentCategory = "all";
let searchQuery = "";

export async function initFilters(map, placesData) {
    allPlaces = placesData;

    const searchInput = document.getElementById("search-input");
    const categoryButtons = document.querySelectorAll(".category");

    // Search input listener
    searchInput.addEventListener("input", e => {
        searchQuery = e.target.value.toLowerCase();
        renderFilteredPlaces(map);
    });

    // Category buttons listener
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", e => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category || "all";
            renderFilteredPlaces(map);
        });
    });
}

function renderFilteredPlaces(map) {
    // Clear existing markers if you store them in an array
    // Then filter:
    const filtered = allPlaces.filter(place => {
        const matchesCategory = currentCategory === "all" || place.category.toLowerCase() === currentCategory;
        const matchesSearch = place.name.toLowerCase().includes(searchQuery) || place.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    // Re-render markers on map for filtered results
    filtered.forEach(place => createSpotMarker(map, place));
}
