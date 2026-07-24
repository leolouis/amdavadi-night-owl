export function spinRoulette(map, places) {
    if (!places || places.length === 0) return;

    let counter = 0;
    const maxSpins = 15;
    const intervalTime = 100;

    const rouletteInterval = setInterval(() => {
        const randomPlace = places[Math.floor(Math.random() * places.length)];
        map.setView([randomPlace.lat, randomPlace.lng], 15, { animate: true });
        
        counter++;
        if (counter >= maxSpins) {
            clearInterval(rouletteInterval);
            
            // Final destination pick
            const finalSpot = places[Math.floor(Math.random() * places.length)];
            map.flyTo([finalSpot.lat, finalSpot.lng], 17, { animate: true, duration: 1.5 });

            // Trigger Confetti Celebration if loaded
            if (typeof confetti === "function") {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
    }, intervalTime);
}
