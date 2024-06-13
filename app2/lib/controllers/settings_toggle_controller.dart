import 'package:get/get.dart';

class SettingsToggleController extends GetxController {
  RxBool openSettings = false.obs;

  void toggleSettings() {
    openSettings.value = !openSettings.value;
  }
}
