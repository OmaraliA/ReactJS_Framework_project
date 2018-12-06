
const BASE_URL = 'http://localhost:8000/main/trips';

export const getReservation = (trip_id) => (
    fetch(
        `${BASE_URL}/${trip_id}/reservations/`,
      {
        method: 'GET',
      }
    )
  )
  
