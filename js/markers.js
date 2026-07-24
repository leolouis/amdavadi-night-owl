import { getOpenStatus } from "./utils.js";

function createSpotMarker(map,place){



    const color =
    getCategoryColor(place.category);



    const marker =
    const icon =
getCategoryIcon(place.category);



const color =
getCategoryColor(place.category);



const marker =
L.marker(

[
place.lat,
place.lng
],

{

icon:

L.divIcon({

className:"",

html:

`

<div

class="marker-glow"

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



    const openStatus =
getOpenStatus(
    place.open,
    place.close
);



marker.bindPopup(`

<div class="spot-popup">


<h2>
${place.name}
</h2>



<span>

${place.category}

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

${
place.safe
?
"🛡️ Community Safe"
:
"⚠️ Stay Alert"
}

</p>



<a
target="_blank"
href="https://maps.google.com/?q=${place.lat},${place.lng}">

🧭 Navigate

</a>



</div>

`);


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
function getCategoryIcon(category){


switch(category.toLowerCase()){


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
