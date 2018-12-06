
const BASE_URL = 'http://localhost:8000/main/trips';

export const getReservationSchedule = (trip_id, schedule_id, ) => (
    fetch(
        `${BASE_URL}/${trip_id}/reservations/${schedule_id}`,
      {
        method: 'GET',
      }
    )
  )
  
