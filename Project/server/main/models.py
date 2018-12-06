from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class Category(models.Model):
	name = models.CharField(max_length = 20, unique = True)
	image = models.ImageField(blank=True, null = True)
	icon = models.ImageField(blank=True, null = True)

	class Meta:
		ordering = ["name"]

	def __str__(self):
		return self.name

class TripManager(models.Manager):
	def favorites(self, user):
		return self.filter(user=user)

class Trip(models.Model):
	name = models.CharField(max_length = 100)
	about_text = models.TextField()
	recomendation = models.TextField()
	duration = models.IntegerField() #estimation in hours
	cost = models.IntegerField() #estimation in tenge
	height = models.IntegerField() #estimation in meters
	image = models.ImageField(blank = True, null = True)
	category = models.ForeignKey(Category, on_delete = models.SET_NULL, null = True)
	#user_favorites = TripManager()

	class Meta:
		ordering = ['name']
	
	def __str__(self):
		return self.name

class Itinerary(models.Model):
	trip = models.ForeignKey(Trip, on_delete = models.CASCADE)
	order = models.IntegerField()
	text = models.TextField()

	class Meta:
		unique_together = ('trip', 'order')
		ordering = ["trip"]
	
	def __str__(self):
		return self.trip.name + "___" + "order_" + str(self.order)

class Review(models.Model):
	trip = models.ForeignKey(Trip, on_delete = models.CASCADE)
	created_at = models.DateField(auto_now = True)
	user = models.ForeignKey(User, on_delete = models.CASCADE)
	text = models.TextField()

	class Meta:
		ordering = ['created_at']

	def __str__(self):
		return self.trip.name + "___" + self.user.username

class Schedule(models.Model):
	trip = models.ForeignKey(Trip, on_delete = models.CASCADE)
	date = models.DateField()
	count = models.IntegerField()

	class Meta:
		ordering = ['date']

	def __str__(self):
		return self.trip.name + "___" + str(self.date)

class Reservation(models.Model):
	trip = models.ForeignKey(Trip, on_delete = models.CASCADE)
	first_name = models.CharField(max_length = 100)
	last_name = models.CharField(max_length = 100)
	schedule = models.ForeignKey(Schedule, on_delete = models.CASCADE)
	user = models.ForeignKey(User, on_delete = models.SET_NULL, blank=True, null=True)

	def __str__(self):
		return self.trip.name + "___" + self.last_name
