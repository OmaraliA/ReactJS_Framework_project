
const BASE_URL = 'http://localhost:8000/main/trips';

export const getCategory = (pk) => (
    fetch(
        `${BASE_URL}/categories/${pk}`,
      {
        method: 'GET',
      }
    )
  )
  
