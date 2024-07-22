import 'package:app2/pages/drivers/landing_page/controller/destinations_controller.dart';
import 'package:get/get.dart';

import '../model/bus_model.dart';

class BusController extends GetxController {
  late Rx<BusModel> bus = BusModel.fromJson({
    "status": "inactive",
    "busId": "i433498",
    "driverId": "oiwoeio",
    "image": "assets/images/bus-0.jpg",
    "destinationOne": {"destination": "", "coordinate": ""},
    "destinationTwo": {"destination": "", "coordinate": ""},
  }).obs;
  RxBool isLoadingBus = false.obs;
  RxList<String> busNumberList = List<String>.empty(growable: true).obs;

  final destinationsController = Get.put(DestinationsController());

  @override
  onInit() {
    getBusNumberList();
    super.onInit();
  }

  Future<void> getBusByBusId(String busId) async {}

  Future<bool> getBusByDriverId(String driverId) async {
    isLoadingBus.value = true;

    await Future.delayed(const Duration(seconds: 5), () {
      bus.value = BusModel.fromJson({
        "status": "inactive",
        "busId": "i433498",
        "driverId": "oiwoeio",
        "image": "assets/images/bus-0.jpg",
        "destinationOne": {
          "destination": "Katanga",
          "coordinate": "klaoi2oiod"
        },
        "destinationTwo": {
          "destination": "Independence",
          "coordinate": "klaoi2oiod"
        },
      });

      destinationsController.getInitialLocation(
        bus.value.destinationOne,
        bus.value.destinationTwo,
      );

      isLoadingBus.value = false;
    });

    return true;
  }

  Future<void> getBusNumberList() async {
    const busNumbers = [
      "38439laklel"
          "38439laklel",
      "38439laklel",
    ];

    Future.delayed(const Duration(seconds: 5), () {
      busNumberList.value = busNumbers;
    });
  }
}
