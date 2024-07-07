import 'package:get/get.dart';

import '../../../bus_details/model/location_model.dart';

class SavedLocations extends GetxController {
  RxList<BusLocation> savedBusLocations =
      List<BusLocation>.empty(growable: true).obs;
  RxBool isLoading = false.obs;

  @override
  onInit() {
    loadBusLocations();
    super.onInit();
  }

  Future<void> loadBusLocations() async {
    isLoading.value = true;
    Future.delayed(const Duration(seconds: 5), () {
      savedBusLocations.value = [
        // BusLocation.fromJson({
        //   "driverId": "33333",
        //   "destinationOne": {
        //     "destination": "Katanga",
        //     "coordinate": "898439849",
        //   },
        //   "destinationTwo": {
        //     "destination": "Katanga",
        //     "coordinate": "898439849",
        //   }
        // })
      ];
      isLoading.value = false;
    });
  }

  Future<void> saveBusLocation(Map<String, dynamic> busLocation) async {}
}
