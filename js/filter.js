let allMarkers = [];


export function initFilters(map, places) {

    const buttons =
        document.querySelectorAll(".category");


    // Create markers reference
    allMarkers = places.map(place => {

        const marker = L.marker([
            place.lat,
            place.lng
        ]);


        marker.bindPopup(`
            <div class="spot-popup">
                <h2>${place.name}</h2>

                <p>
                ${place.description}
                </p>

                ⭐ ${place.rating}

                <br>

                🕒 ${place.open} - ${place.close}

            </div>
        `);


        marker.addTo(map);

        return {
            marker,
            category: place.category
        };

    });



    buttons.forEach(button => {


        button.addEventListener(
            "click",
            () => {


                const selected =
                    button.dataset.category;



                // Active button style

                buttons.forEach(btn =>
                    btn.classList.remove("active")
                );


                button.classList.add("active");



                allMarkers.forEach(item => {


                    if(
                        selected === "all" ||
                        item.category === selected
                    ){

                        item.marker.addTo(map);

                    }

                    else {

                        map.removeLayer(
                            item.marker
                        );

                    }


                });


            }
        );


    });


}
