
const BASE_URL = 'http://localhost:8000/main/trips';

export const getSchedule = (trip_id ) => (
    fetch(
        `${BASE_URL}/${trip_id}/schedules/`,
      {
        method: 'GET',
      }
    )
  )
  
