import 'package:app/presentation/colors.dart';
import 'package:app/ui/app_bar.dart';
import 'package:app/ui/space.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../presentation/sizing.dart';

class Settings extends StatelessWidget {
  const Settings({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      body: Column(
        children: [
          const CustomAppBar(appTitle: "Settings"),
          const Space(),
          Expanded(
              child: SingleChildScrollView(
            child: Column(
              children: [
                SizedBox(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      ClipRRect(
                        clipBehavior: Clip.antiAlias,
                        borderRadius: BorderRadius.circular(AppSizing.h_54 / 2),
                        child: Image.asset(
                          "assets/images/default-user.jpg",
                          width: AppSizing.h_54,
                          height: AppSizing.h_54,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(AppPadding.p_8),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "Username",
                              style: Theme.of(context)
                                  .textTheme
                                  .headlineSmall!
                                  .copyWith(
                                      fontWeight: FontWeight.w500,
                                      fontSize: AppSizing.h_16),
                            ),
                            Text("dacsolo10@gmail.com",
                                style: Theme.of(context).textTheme.bodySmall)
                          ],
                        ),
                      )
                    ],
                  ),
                ),
                const Space(),
                SettingTile(
                  icon: Icons.person,
                  label: "Account",
                  onPress: () => {},
                ),
                const Divider(),
                SettingTile(
                  label: "Feedback",
                  icon: Icons.feedback,
                  onPress: () => {Get.toNamed("/feedback")},
                ),
                const Divider(),
                SettingTile(
                  label: "Rate Drivers",
                  icon: Icons.star,
                  onPress: () => {},
                ),
                const Divider(),
                SettingTile(
                  label: "Sign out",
                  icon: Icons.logout,
                  onPress: () => {},
                )
              ],
            ),
          ))
        ],
      ),
    );
  }
}

class SettingTile extends StatelessWidget {
  final IconData icon;
  final String label;
  final void Function() onPress;
  const SettingTile({
    super.key,
    required this.icon,
    required this.label,
    required this.onPress,
  });

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: onPress,
      title: Text(label),
      leading: Icon(icon),
    );
  }
}
