// Import Domain
import type { Car } from '@domain/Car';

// Importing Adapters
import { apiAdapter } from '@infra/adapters/api';
import { raceStoreAdapter } from '@infra/adapters/store/race';

export async function getCurrentLocationUseCase(): Promise<void> {
  const { race, cars } = raceStoreAdapter();

  const max = cars.find((c) => c.driver_number == 1);
  const lando = cars.find((c) => c.driver_number == 4);

  console.log(race, max, lando);
  if (race && max && lando) {
    setLocation(race.session_key, max);
    setLocation(race.session_key, lando);
  }
}

function setLocation(session_key: number, car: Car) {
  console.log(session_key, car.driver_number);

  const { getCurrentLocation } = apiAdapter();
  const { updateCarLocation } = raceStoreAdapter();

  getCurrentLocation({ session_key, driver_number: car.driver_number })
    .then((res) => {
      const newCar = {
        driver_number: car.driver_number,
        position: car.position,
        location: res.location
      };
      updateCarLocation(newCar);
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.message) console.error(err.response.data.message);
    });
}
