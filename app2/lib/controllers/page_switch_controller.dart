import 'package:get/get.dart';

class PageSwitchController extends GetxController {
  RxString page = "home".obs;

  void setPage(String currentPage) {
    page.value = currentPage;
  }
}
