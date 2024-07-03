import 'package:app2/controllers/page_switch_controller.dart';
import 'package:app2/pages/account/account_page.dart';
import 'package:app2/pages/feedback/feedback_page.dart';
import 'package:app2/pages/student/bus_listing/bus_listings.dart';
import 'package:app2/pages/student/destinations/route_listings.dart';
import 'package:app2/pages/student/landing_page/student_landing_page.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

Map<String, Widget> pages = {
  StudentLandingPage.pageName: const StudentLandingPage(),
  BusListings.pageName: const BusListings(),
  RouteListings.pageName: const RouteListings(),
  AccountPage.pageName: const AccountPage(),
  FeedbackPage.pageName: FeedbackPage(),
};

Widget getPage(String key) {
  return pages[key] as Widget;
}

class StudentHomePage extends StatelessWidget {
  const StudentHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return GetX<PageSwitchController>(
      init: PageSwitchController(),
      builder: (getXController) {
        return getPage(getXController.page.value);
      },
    );
  }
}
