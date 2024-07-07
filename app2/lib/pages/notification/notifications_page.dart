import 'package:app2/presentation/colors.dart';
import 'package:app2/presentation/sizing.dart';
import 'package:app2/ui/app_bar.dart';
import 'package:flutter/material.dart';

class NotificationsPage extends StatelessWidget {
  const NotificationsPage({super.key});

  static String pageName = "notification";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      body: const Padding(
        padding: EdgeInsets.symmetric(
          vertical: AppPadding.p_16,
          horizontal: AppPadding.p_24,
        ),
        child: Column(
          children: [
            CustomAppBar(
              appTitle: "Notifications",
              hasBackBtn: true,
            )
          ],
        ),
      ),
    );
  }
}
