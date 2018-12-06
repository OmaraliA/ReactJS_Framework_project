from rest_framework import serializers
from .models import Category, Itinerary, Trip, Review, Schedule, Reservation
from django.contrib.auth.models import User

class UserCreateSerializer(serializers.ModelSerializer):
	id = serializers.IntegerField(read_only=True)
	username = serializers.CharField(max_length=300)
	email = serializers.EmailField()
	password = serializers.CharField(max_length=32, write_only=True, required=True)

	class Meta:
		model = User
		fields = '__all__'

class UserSerializer(serializers.Serializer):
	username = serializers.CharField(max_length=300)
	email = serializers.EmailField()

class TripSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Trip
		fields = '__all__'

class ItinerarySerializer(serializers.ModelSerializer):
	class Meta:
		model = Itinerary
		fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):

	def create(self, validated_data):
		validated_data['user'] = self.context['user']
		validated_data['trip'] = self.context['trip']
		return Review.objects.create(**validated_data)

	class Meta:
		model = Review
		fields = '__all__'
		extra_kwargs = {
            'user': {'read_only' : True},
			'trip': {'read_only' : True}
        }

class ReviewFullSerializer(serializers.ModelSerializer):
	

	class Meta:
		model = Review
		fields = ('id', 'text', 'created_at')

class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = '__all__'

class ScheduleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Schedule
		fields = '__all__'

class TripFullSerializer(serializers.ModelSerializer):
	itineraries = ItinerarySerializer(source='itinerary_set', many=True, read_only=True)
	reviews = ReviewFullSerializer(source='review_set', many=True, read_only=True)
	category_name = serializers.ReadOnlyField(source='category.name')
	available_dates = ScheduleSerializer(source='schedule_set', many=True, read_only=True)
	class Meta:
		model = Trip
		fields = ['id', 'name', 'image', 'about_text', 'category_name', 
		'cost', 'duration', 'height', 'itineraries', 'recomendation', 'reviews', 'available_dates']

class ReservationSerializer(serializers.ModelSerializer):

	def create(self, validated_data):
		validated_data['user'] = self.context['user']
		validated_data['trip'] = self.context['trip']
		validated_data['schedule'] = self.context['schedule']
		return Reservation.objects.create(**validated_data)

	class Meta:
		model = Reservation
		fields = '__all__'
		extra_kwargs = {
            'user': {'read_only' : True},
			'trip': {'read_only' : True},
			'schedule': {'read_only': True}
        }

class ReservationFullSerializer(serializers.ModelSerializer):
	trip = serializers.ReadOnlyField(source='trip.name')
	user =  serializers.ReadOnlyField(source='trip.username')
	schedule_date = serializers.ReadOnlyField(source='schedule.date')
	schedule_count = serializers.ReadOnlyField(source='schedule.count')
	class Meta:
		model = Reservation
		fields = '__all__'