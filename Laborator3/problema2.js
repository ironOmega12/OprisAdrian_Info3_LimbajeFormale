class ParkingAutomaton {
    constructor(totalSpots) {
        this.totalSpots = totalSpots;
        this.parkingSpots = new Array(totalSpots).fill(false);
    }

    parkCar() {
        const freeIndex = this.parkingSpots.indexOf(false);
        if (freeIndex !== -1) {
            this.parkingSpots[freeIndex] = true;
            console.log(`Masina parcata în locul ${freeIndex + 1}.`);
        } else {
            console.log("Parcarea este plina!");
        }
    }

    leaveCar(spotNumber) {
        if (spotNumber >= 1 && spotNumber <= this.totalSpots && this.parkingSpots[spotNumber - 1]) {
            this.parkingSpots[spotNumber - 1] = false;
            console.log(`Masina a plecat din locul ${spotNumber}.`);
        } else {
            console.log("Locul de parcare este deja liber sau invalid!");
        }
    }

    displayParking() {
        console.log("Starea parcării:", this.parkingSpots.map(s => (s ? "🅿️" : "⬜"))); 
    }
}

const parking = new ParkingAutomaton(5);
parking.displayParking();
parking.parkCar();
parking.parkCar();
parking.displayParking();
parking.leaveCar(1);
parking.displayParking();
