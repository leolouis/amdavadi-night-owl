let userMarker;
let accuracyCircle;


export function locateUser(map){


    if(!navigator.geolocation){

        alert("Geolocation is not supported on this device.");

        return;

    }


    navigator.geolocation.getCurrentPosition(

        position => {


            const lat =
            position.coords.latitude;


            const lng =
            position.coords.longitude;


            const accuracy =
            position.coords.accuracy;



            // Remove previous location

            if(userMarker){

                map.removeLayer(userMarker);

            }


            if(accuracyCircle){

                map.removeLayer(accuracyCircle);

            }



            // User marker

            userMarker =
            L.marker(

                [
                    lat,
                    lng
                ],

                {

                title:"Your Location"

                }

            )

            .addTo(map)

            .bindPopup(
                "📍 You are here"
            );



            // Accuracy circle

            accuracyCircle =
            L.circle(

                [
                    lat,
                    lng
                ],

                {

                radius:accuracy,

                color:"#00e5ff",

                fillColor:"#00e5ff",

                fillOpacity:0.15

                }

            )

            .addTo(map);



            // Move map

            map.flyTo(

                [
                    lat,
                    lng
                ],

                16,

                {

                animate:true,

                duration:1.5

                }

            );


        },


        error => {


            console.log(error);


            alert(
                "Unable to get your location. Please allow GPS access."
            );


        },


        {

        enableHighAccuracy:true,

        timeout:10000,

        maximumAge:0

        }


    );


}
