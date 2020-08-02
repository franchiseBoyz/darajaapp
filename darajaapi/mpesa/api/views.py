from rest_framework.generics import CreateAPIView

from mpesa.api.serializers import LNMOnlineSerializer
from mpesa.models import LNMOnline


class LNMCallbackUrlAPIView(generics.ListCreateAPIView):
    queryset = LNMOnline.objects.all()
    serializer_class = LNMOnlineSerializer
    permission_classes = [IsAdminUser]

    def create(self, request):
        print request.data, "This is request.data"
