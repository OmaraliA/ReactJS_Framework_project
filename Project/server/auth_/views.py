from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate, logout
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from main.serializers import UserCreateSerializer


@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if user is None:
        return Response({'error': 'Invalid Credentials'})

    token, created = Token.objects.get_or_create(user=user)
    return Response({'token': token.key})

@api_view(['POST'])
def register(request):
	serializer = UserCreateSerializer(data=request.data)
	if serializer.is_valid():
		user = serializer.save()
		if user:
			token = Token.objects.create(user=user)
			return Response({'token': token.key})
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def logout(request):
	request.user.auth_token.delete()
	return Response(status=status.HTTP_200_OK)
