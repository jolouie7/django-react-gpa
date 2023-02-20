from .models import User
from .serializers import UserSerializer
from rest_framework import generics

# Handles GET and POST requests for the User model
class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer