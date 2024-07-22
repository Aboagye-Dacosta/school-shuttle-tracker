import 'package:app2/pages/navigation/controller/navigation_controller.dart';
import 'package:app2/pages/roo_body/main_page.dart';
import 'package:app2/pages/student/home/student_home_page.dart';
import 'package:flutter/material.dart';

class DisplaySheet extends StatelessWidget {
  final NavigationController settingController;
  const DisplaySheet({
    super.key,
    required this.settingController,
  });

  @override
  Widget build(BuildContext context) {
    return DraggableScrollableSheet(
      snapAnimationDuration: const Duration(seconds: 5),
      snap: true,
      initialChildSize: settingController.openNavigation.value ? 0.9 : 0.2,
      minChildSize: 0.2,
      maxChildSize: 0.9,
      builder: (context, controller) => const MainPage(
        child: StudentHomePage(),
      ),
    );
  }
}
