import 'package:flutter/material.dart';
import 'package:get/get.dart';

class SettingsController extends GetxController {
  RxString settingTab = "home".obs;
  RxBool openSettings = false.obs;
  RxBool isPlaying = false.obs;
  late Rx<AnimationController> animationController;

  void setAnimateController(AnimationController controller) {
    animationController.value = controller;
  }
  void setDraggableController(AnimationController controller) {
    animationController.value = controller;
  }

  void toggleAnimation() {
    isPlaying.value = !isPlaying.value;
  }

  void toggleSettings() {
    openSettings.value = !openSettings.value;
  }

  void setSettingTab(String tab) {
    settingTab.value = tab;
  }
}
