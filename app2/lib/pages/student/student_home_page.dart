import 'package:app2/controllers/page_switch_controller.dart';
import 'package:app2/controllers/settings_toggle_controller.dart';
import 'package:app2/pages/student/bus_listings.dart';
import 'package:app2/pages/student/student_landing_page.dart';
import 'package:app2/presentation/colors.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

List<Widget> pages = const [StudentLandingPage(), BusListings()];

class StudentHomePage extends StatelessWidget {
  StudentHomePage({super.key});

  final settingsController =
      Get.put<SettingsToggleController>(SettingsToggleController());

  @override
  Widget build(BuildContext context) {
    return GetX<PageSwitchController>(
      init: PageSwitchController(),
      builder: (getXController) {
        return Scaffold(
          backgroundColor: AppColors.white,
          body: pages[getXController.currentIndex.value],
        
          bottomNavigationBar: Obx(() => !settingsController.openSettings.value
              ? NavigationBar(
                  onDestinationSelected: (int index) {
                    getXController.setCurrentIndex(index);
                  },
                  backgroundColor: AppColors.greyLight,
                  indicatorColor: AppColors.primary,
                  selectedIndex: getXController.currentIndex.value,
                  destinations: const <Widget>[
                    NavigationDestination(
                      selectedIcon: Icon(Icons.home),
                      icon: Icon(Icons.home_outlined),
                      label: 'Home',
                    ),
                    NavigationDestination(
                      icon: Icon(Icons.bus_alert),
                      label: 'Buses',
                    ),
                  ],
                )
              : Container(
                  decoration:const  BoxDecoration(
                      image: DecorationImage(
                          image: AssetImage("assets/images/bus.gif"))),
                )),
        );
      },
    );
  }
}
