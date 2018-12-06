

const BASE_URL = 'http://localhost:8000/main/trips';
export const getReviews = () => (
    fetch(
        `${BASE_URL}/1/reviews/`,
      {
        method: 'GET',
      }
    )
  )
  
  export const changeReview = (trip_id, review_id,data) => (
    fetch(
        `${BASE_URL}/${trip_id}/reviews/change/${review_id}/`,
      {
        method: 'PUT',
        body: JSON.stringify({
          data
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
  )
  

  export const deleteReview = (trip_id, review_id) => (
    fetch(
        `${BASE_URL}/${trip_id}/reviews/delete/${review_id}/`,
      {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
  )