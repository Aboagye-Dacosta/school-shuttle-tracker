import 'package:flutter/material.dart';
import 'package:get/get.dart';

class NavigationController extends GetxController {
  RxString settingTab = "home".obs;
  RxBool openNavigation = false.obs;
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

  void toggleNavigation() {
    openNavigation.value = !openNavigation.value;
  }

  void setSettingTab(String tab) {
    settingTab.value = tab;
  }
}
