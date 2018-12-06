
const BASE_URL = 'http://localhost:8000/main/trips';

export const getTripsDetail = (id) => (
    fetch(
        `${BASE_URL}//${id}/`,
      {
        method: 'GET',
      }
    )
    
  )
  
