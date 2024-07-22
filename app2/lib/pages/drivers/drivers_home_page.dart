import 'package:app2/controllers/page_switch_controller.dart';
import 'package:app2/pages/account/account_page.dart';
import 'package:app2/pages/drivers/landing_page/landing_page.dart';
import 'package:app2/pages/feedback/feedback_page.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../bus_details/bus_details.dart';
import '../notification/notifications_page.dart';
import 'bus_settings/bus_setting_page.dart';

Map<String, Widget> pages = {
  DriverLandingPage.routeName: DriverLandingPage(),
  FeedbackPage.pageName: FeedbackPage(),
  AccountPage.pageName: const AccountPage(),
  NotificationsPage.pageName: const NotificationsPage(),
  BusDetails.pageName: BusDetails(),
  BusSettingsPage.pageName: BusSettingsPage()
};

Widget getPage(String key) {
  return pages[key] as Widget;
}

class DriversHomePage extends StatelessWidget {
  DriversHomePage({super.key});

  final pageSwitchController =
      Get.put<PageSwitchController>(PageSwitchController());

  @override
  Widget build(BuildContext context) {
    return Obx(() => getPage(pageSwitchController.page.value));
  }
}
