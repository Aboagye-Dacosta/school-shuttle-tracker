import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';

class UsersController extends GetxController {
  RxString user = "driver".obs;

  @override
  void onInit() {
    getUser();
    super.onInit();
  }

  Future<void> getUser() async {
    var sharedPreference = await SharedPreferences.getInstance();
    try {
      user.value = sharedPreference.getString("user")!;
    } catch (e) {
      print(e);
    }
  }

  Future<void> setUser(String user) async {
    var sharedPreference = await SharedPreferences.getInstance();
    try {
      sharedPreference.setString("user", user);
    } catch (e) {
      print(e);
    }
  }
}
