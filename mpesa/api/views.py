from rest_framework.generics import CreateAPIView

from rest_framework.permissions import AllowAny

from mpesa.api.serializers import LNMOnlineSerializer
from mpesa.models import LNMOnline


class LNMCallbackUrlAPIView(CreateAPIView):
    queryset = LNMOnline.objects.all()
    serializer_class = LNMOnlineSerializer
    permission_classes = [AllowAny]

    def create(self, request):
        print (request.data,"This is request.data")

merchant_request_id = request.data["Body"]["stkCallback"]["MerchantRequestID"]
checkout_request_id = request.data["Body"]["stkCallback"]["CheckoutRequestID"]
result_code = request.data["Body"]["stkCallback"]["ResultCode"]
result_description = request.data["Body"]["stkCallback"]["ResultDesc"]
amount = request.data["Body"]["stkCallback"]["CallbackMetadata"]['Item'][0]['Value']
mpesa_receipt_number = request.data["Body"]["stkCallback"]["CallbackMetadata"]['Item'][1]['Value']
balance = ""
transaction_date = request.data["Body"]["stkCallback"]["CallbackMetadata"]['Item'][3]['Value']
phone_number = request.data["Body"]["stkCallback"]["CallbackMetadata"]['Item'][4]['Value']
