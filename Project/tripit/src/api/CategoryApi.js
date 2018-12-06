
const BASE_URL = 'http://localhost:8000/main/trips';

export const getCategory = () => (
    fetch(
        `${BASE_URL}/categories/`,
      {
        method: 'GET',
      }
    )
  )
  
