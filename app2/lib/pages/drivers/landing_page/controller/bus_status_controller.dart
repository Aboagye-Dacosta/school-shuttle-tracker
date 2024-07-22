import "package:get/get.dart";

class BusStatusController extends GetxController {
  RxBool busStatus = false.obs;
  RxBool loading = false.obs;

  void toggleBusStatus() async {
    loading.value = true;

    Future.delayed(const Duration(seconds: 5), () {
      loading.value = false;
      busStatus.value = !busStatus.value;
    });
  }
}
