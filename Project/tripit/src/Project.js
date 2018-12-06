
const BASE_URL = 'http://localhost:8000/main/trips';

module.exports = {
    TripList(success){
        fetch(`${BASE_URL}/`
        )
        .then(response => response.json())
        .then(success)
    },
 
    TripDetail(id, success){
    fetch(`${BASE_URL}/${id}/`)
      .then(response => response.json())
      .then(success)
  }, 

  ReviewList(trip_id, success){
    fetch(`${BASE_URL}/${trip_id}/reviews/`)
      .then(response => response.json())
      .then(success)
  }, 

  ReviewList(trip_id, review_id,data, success){
    fetch(`${BASE_URL}/${trip_id}/reviews/change/${review_id}/`, {
        'method': 'PUT',
        'body': JSON.stringify(data)
    })
      .then(response => response.json())
      .then(success)
  }, 

  ReviewList(trip_id, review_id, success){
    fetch(`${BASE_URL}/${trip_id}/reviews/delete/${review_id}/`, {
        'method': 'DELETE'
    })
      .then(response => response.json())
      .then(success)
  }, 

  Reservation(trip_id, success){
    fetch(`${BASE_URL}/${trip_id}/reservations/`)
      .then(response => response.json())
      .then(success)
  }, 

  Reservation(trip_id, schedule_id, success){
    fetch(`${BASE_URL}/${trip_id}/reservations/${schedule_id}`)
      .then(response => response.json())
      .then(success)
  }, 

  ScheduleList(trip_id,success){
    fetch(`${BASE_URL}/${trip_id}/schedules/`)
      .then(response => response.json())
      .then(success)
  }, 

  CategoryList(success){
    fetch(`${BASE_URL}/categories/`)
      .then(response => response.json())
      .then(success)
  }, 

  CategoryRecipe(pk, success){
    fetch(`${BASE_URL}/categories/${pk}`)
      .then(response => response.json())
      .then(success)
  },
  
 
/*

  deleteTodo(id, success){
    fetch(`${BASE_URL}/todos/${id}/`, {
      'method': 'DELETE'
    })
      .then(response => response.json())
      .then(success)
  }*/
}