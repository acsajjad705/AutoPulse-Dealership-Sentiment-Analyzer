from django.urls import path, include
from rest_framework.routers import DefaultRouter
from cars.views import DealerViewSet, dealers_by_state, reviews_for_dealer, post_review, api_login, api_logout

router = DefaultRouter()
router.register(r'dealerships', DealerViewSet, basename='dealership')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/dealerships_by_state/', dealers_by_state),
    path('api/reviews/', reviews_for_dealer),
    path('api/post_review/', post_review),
    path('api/login/', api_login),
    path('api/logout/', api_logout),
]
