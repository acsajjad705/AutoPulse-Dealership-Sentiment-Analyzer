from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import Dealer, Review
from .serializers import DealerSerializer, ReviewSerializer
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

class DealerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Dealer.objects.all()
    serializer_class = DealerSerializer

@api_view(['GET'])
def dealers_by_state(request):
    state = request.query_params.get('state')
    qs = Dealer.objects.filter(state__iexact=state) if state else Dealer.objects.all()
    serializer = DealerSerializer(qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def reviews_for_dealer(request):
    dealer_id = request.query_params.get('dealer_id')
    qs = Review.objects.filter(dealer_id=dealer_id)
    serializer = ReviewSerializer(qs, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_review(request):
    data = request.data.copy()
    data['user'] = request.user.id
    serializer = ReviewSerializer(data=data)
    if serializer.is_valid():
        review = serializer.save()
        # Optionally call sentiment microservice here to set review.sentiment
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def api_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user:
        login(request, user)
        return Response({'message':'logged in','username':user.username})
    return Response({'error':'invalid credentials'}, status=400)

@api_view(['POST'])
def api_logout(request):
    logout(request)
    return Response({'message':'logged out'})
