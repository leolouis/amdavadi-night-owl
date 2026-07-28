let allMarkers = [];


export function initFilters(map, markers) {

    allMarkers = markers;


    const buttons =
    document.querySelectorAll(".category");


    buttons.forEach(button => {


        button.addEventListener(
            "click",
            () => {


                const selected =
                button.dataset.category;



                buttons.forEach(btn =>
                    btn.classList.remove("active")
                );


                button.classList.add("active");



                allMarkers.forEach(item => {


                    if(
                        selected === "all" ||
                        item.category === selected
                    ){

                        if(!map.hasLayer(item.marker)){
                            item.marker.addTo(map);
                        }

                    }

                    else {


                        if(map.hasLayer(item.marker)){
                            map.removeLayer(item.marker);
                        }

                    }


                });


            }
        );


    });


}
