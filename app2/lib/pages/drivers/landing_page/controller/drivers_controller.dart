import 'package:app2/pages/bus_details/controller/bus_controller.dart';
import 'package:get/get.dart';

import '../../../../constants/dummy_data.dart';
import '../model/driver_model.dart';

class DriverController extends GetxController {
  Rx<DriverModel> driver = DriverModel.fromJson(driverData).obs;
  RxBool isLoadingDriver = true.obs;

  final busController = Get.put<BusController>(BusController());

  @override
  onInit() async {
    await loadDriver();
    super.onInit();
  }

  Future<void> loadDriver() async {
    isLoadingDriver.value = true;

    Future.delayed(const Duration(seconds: 5), () async {
      driver.value = DriverModel.fromJson(driverData);
      print(driverData);
      busController.getBusByDriverId(driver.value.driverId);
      isLoadingDriver.value = false;
    });
  }
}
