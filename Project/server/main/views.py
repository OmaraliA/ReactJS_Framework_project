from django.http import Http404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions

from .serializers import UserSerializer, TripSerializer, ItinerarySerializer, ReviewSerializer, ReviewFullSerializer, CategorySerializer, ScheduleSerializer, TripFullSerializer, ReservationSerializer, ReservationFullSerializer
from .models import Category, Itinerary, Trip, Review, Schedule, Reservation

class TripList(APIView):
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
	def get(self, request):
		trips = Trip.objects.all()
		serializer = TripSerializer(trips, many=True)
		return Response(serializer.data)

class TripDetail(APIView):
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
	def get_object(self, pk):
		try:
			trip = Trip.objects.get(pk=pk)
			return trip
		except trip.DoesNotExist:
			raise Http404

	def get(self, request, pk):
		trip = self.get_object(pk)
		serializer = TripFullSerializer(trip)
		return Response(serializer.data)

class ReviewList(APIView):
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

	def get_object(self, pk):
		try:
			trip = Trip.objects.get(pk=pk)
			return trip
		except trip.DoesNotExist:
			raise Http404

	def get(self, request, *args, **kwargs):
		trip_id = kwargs.get('trip_id', None)
		trip = self.get_object(trip_id)
		reviews = trip.review_set.all()
		serializer = ReviewFullSerializer(reviews, many=True)
		return Response(serializer.data)

	def post(self, request, *args, **kwargs):
		trip_id = kwargs.get('trip_id', None)
		trip = self.get_object(trip_id)
		serializer = ReviewSerializer(data=request.data, context={'user': request.user, 'trip': trip})
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def put(self, request, *args, **kwargs):
		trip_id = kwargs.get('trip_id', None)
		review_id = kwargs.get('review_id', None)
		trip = self.get_object(trip_id)
		review = Review.objects.get(pk=review_id)
		serializer = ReviewSerializer(instance=review, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_200_OK)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, *args, **kwargs):
		review_id = kwargs.get('review_id', None)
		review = Review.objects.get(pk=review_id)
		if request.user == review.user:
			review.delete()
			return Response(status=status.HTTP_204_NO_CONTENT)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Reservation(APIView):
	permission_classes = (permissions.AllowAny,)
	def get_object(self, pk):
		try:
			trip = Trip.objects.get(pk=pk)
			return trip
		except trip.DoesNotExist:
			raise Http404

	def get(self, request, *args, **kwargs):
		trip_id = kwargs.get('trip_id', None)
		trip = self.get_object(trip_id)
		reservations = trip.reservation_set.all()
		serializer = ReservationFullSerializer(reservations, many=True)
		return Response(serializer.data)

	def post(self, request, *args, **kwargs):
		trip_id = kwargs.get('trip_id', None)
		trip = self.get_object(trip_id)
		schedule_id = kwargs.get('schedule_id', None)
		schedule = Schedule.objects.get(pk=schedule_id)
		schedule.count -= 1
		schedule.save()
		user = None
		if request.user.is_authenticated:
			user = request.user
		serializer = ReservationSerializer(data=request.data, context={'user': user, 'trip': trip, 'schedule': schedule})
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ScheduleList(APIView):
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
	def get_object(self, pk):
		try:
			trip = Trip.objects.get(pk=pk)
			return trip
		except trip.DoesNotExist:
			raise Http404

	def get(self, request, *args, **kwargs):
		trip_id = kwargs.get('trip_id', None)
		trip = self.get_object(trip_id)
		schedules = trip.schedule_set.all()
		serializer = ScheduleSerializer(schedules, many=True)
		return Response(serializer.data)

class CategoryList(APIView):
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
	def get(self, request):
		categories = Category.objects.all()
		serializer = CategorySerializer(categories, many=True)
		return Response(serializer.data)

class CategoryRecipe(APIView):
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
	def get_object(self, pk):
		try:
			category = Category.objects.get(pk=pk)
			return category
		except category.DoesNotExist:
			raise Http404

	def get(self, request, pk):
		category = self.get_object(pk)
		trips = category.trip_set.all()
		serializer = TripFullSerializer(trips, many=True)
		return Response(serializer.data)
