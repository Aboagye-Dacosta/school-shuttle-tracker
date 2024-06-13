import 'package:app2/controllers/settings_toggle_controller.dart';
import 'package:app2/pages/main_page.dart';
import 'package:app2/pages/student/student_home_page.dart';
import 'package:flutter/material.dart';

class DisplaySheet extends StatelessWidget {
  final SettingsToggleController settingController;
  const DisplaySheet({
    super.key,
    required this.settingController,
  });

  @override
  Widget build(BuildContext context) {
    return DraggableScrollableSheet(
      snapAnimationDuration: const Duration(seconds: 5),
      snap: true,
      initialChildSize: settingController.openSettings.value ? 0.9 : 0.2,
      minChildSize: 0.2,
      maxChildSize: 0.9,
      builder: (context, controller) => MainPage(
        child: StudentHomePage(),
      ),
    );
  }
}
