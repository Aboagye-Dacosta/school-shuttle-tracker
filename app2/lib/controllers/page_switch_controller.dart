import 'package:get/get.dart';

class PageSwitchController extends GetxController {
  RxInt currentIndex = 1.obs;

  void setCurrentIndex(int index) {
    currentIndex.value = index;
  }
}
