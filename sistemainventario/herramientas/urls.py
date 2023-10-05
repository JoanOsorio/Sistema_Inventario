from rest_framework import routers

from.viewsets import HerramientasViewSet

router = routers.SimpleRouter()
router.register('herramientas', HerramientasViewSet)

urlpatterns = router.urls
