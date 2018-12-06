from main import views
from django.urls import path

urlpatterns = [
	path('trips/', views.TripList.as_view()),
	path('trips/<int:pk>/', views.TripDetail.as_view()),
	path('trips/<int:trip_id>/reviews/', views.ReviewList.as_view()),
	path('trips/<int:trip_id>/reviews/change/<int:review_id>/', views.ReviewList.as_view()),
	path('trips/<int:trip_id>/reviews/delete/<int:review_id>/', views.ReviewList.as_view()),
	path('trips/<int:trip_id>/reservations/', views.Reservation.as_view()),
	path('trips/<int:trip_id>/reservations/<int:schedule_id>/', views.Reservation.as_view()),
	path('trips/<int:trip_id>/schedules/', views.ScheduleList.as_view()),
	path('categories/', views.CategoryList.as_view()),
	path('categories/<int:pk>/', views.CategoryRecipe.as_view())
]