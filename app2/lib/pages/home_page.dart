import 'package:app2/controllers/settings_toggle_controller.dart';
import 'package:app2/pages/main_page.dart';
import 'package:app2/pages/settings.dart';
import 'package:app2/pages/student/student_home_page.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

 
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return GetX<SettingsToggleController>(
        init: SettingsToggleController(),
        builder: (settingsController) {
          return Scaffold(
            body: Stack(
              children: [
            Settings(
              onPress: () {
                settingsController.toggleSettings();
              },
            ),
            DraggableScrollableSheet(
              snapAnimationDuration: const Duration(seconds: 5),
              snap: true,
              initialChildSize:
                  settingsController.openSettings.value ? 0.1 : 0.9,
              minChildSize: 0.1,
              maxChildSize: 0.9,
              builder: (context, controller) => MainPage(
                child: StudentHomePage(),
              ),
            ),
              ],
            ),
          );
        });
  }
}
