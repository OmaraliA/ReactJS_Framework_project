from django.contrib import admin
from .models import Category, Itinerary, Trip, Review, Schedule, Reservation

admin.site.register(Category)
admin.site.register(Trip)
admin.site.register(Itinerary)
admin.site.register(Reservation)
admin.site.register(Review)
admin.site.register(Schedule)



