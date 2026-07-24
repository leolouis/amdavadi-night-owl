export function getOpenStatus(openTime, closeTime) {


    const now = new Date();


    const currentMinutes =
        now.getHours() * 60 +
        now.getMinutes();



    const openMinutes =
        convertTime(openTime);



    const closeMinutes =
        convertTime(closeTime);



    let isOpen;



    // Normal timing
    // Example: 09:00 - 18:00

    if(openMinutes < closeMinutes){


        isOpen =
        currentMinutes >= openMinutes &&
        currentMinutes <= closeMinutes;


    }


    // Overnight timing
    // Example: 20:00 - 03:00

    else {


        isOpen =
        currentMinutes >= openMinutes ||
        currentMinutes <= closeMinutes;


    }



    if(isOpen){


        return {

            status:"OPEN",

            icon:"🟢",

            text:`Open now · Closes ${formatTime(closeTime)}`,

            color:"#22c55e"

        };


    }


    return {

        status:"CLOSED",

        icon:"🔴",

        text:`Closed · Opens ${formatTime(openTime)}`,

        color:"#ef4444"

    };


}



function convertTime(time){


    const [
        hour,
        minute
    ] = time.split(":").map(Number);



    return hour * 60 + minute;


}



function formatTime(time){


    let [
        hour,
        minute
    ] = time.split(":").map(Number);



    const suffix =
    hour >= 12 ? "PM" : "AM";


    hour =
    hour % 12 || 12;



    return `${hour}:${minute
    .toString()
    .padStart(2,"0")} ${suffix}`;


}
