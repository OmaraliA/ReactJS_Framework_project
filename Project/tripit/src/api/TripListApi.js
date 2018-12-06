
const BASE_URL = 'http://localhost:8000/main/trips';

export const getTrips = () => (
    fetch(
      'http://localhost:8000/main/trips/',
      {
        method: 'GET',
      }
    )
  )
  
