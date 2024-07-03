import 'package:app2/controllers/page_switch_controller.dart';
import 'package:app2/pages/settings/controller/settings_controller.dart';
import 'package:app2/pages/settings/model/settings_model.dart';
import 'package:app2/presentation/colors.dart';
import 'package:app2/presentation/sizing.dart';
import 'package:app2/ui/custom_sttings_tile.dart';
import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../controllers/user_switch_controller.dart';

class Settings extends StatefulWidget {
  Settings({
    super.key,
  });

  @override
  State<Settings> createState() => _SettingsState();
}

class _SettingsState extends State<Settings>
    with SingleTickerProviderStateMixin {
  late PageSwitchController pageController;
  late AnimationController _animationController;
  late SettingsController settingsController;
  late UsersController _usersController;

  bool isPlaying = false;

  @override
  void initState() {
    super.initState();
    pageController = Get.put(PageSwitchController());
    settingsController = Get.put<SettingsController>(SettingsController());
    _usersController = Get.put<UsersController>(UsersController());
    _animationController = AnimationController(
        vsync: this, duration: const Duration(milliseconds: 300));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: AppColors.primary,
        body: Stack(
          children: [
            Container(
              height: MediaQuery.of(context).size.height,
              decoration: const BoxDecoration(
                image: DecorationImage(
                  image: AssetImage(
                    "assets/images/background/bg-vertical-right.png",
                  ),
                  opacity: 0.1,
                  fit: BoxFit.cover,
                ),
              ),
              child: Padding(
                padding: const EdgeInsets.only(
                  left: AppPadding.p_24,
                  right: AppPadding.p_24,
                  top: AppPadding.p_84,
                  bottom: AppPadding.p_74,
                ),
                child: SingleChildScrollView(
                  child: Column(children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        ClipRRect(
                          clipBehavior: Clip.antiAlias,
                          borderRadius:
                              BorderRadius.circular(AppSizing.h_54 / 2),
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
                    const Space(
                      height: 12,
                    ),
                    Obx(() => Column(
                        children: getSettingsTabs(_usersController.user.value)
                            .map((tab) => SettingTile(
                                  icon: tab.icon,
                                  label: tab.title,
                                  onPress: () {
                                    if (tab.hasPage) {
                                      settingsController.settingTab(tab.page);
                                      pageController.setPage(tab.page!);
                                      _handleOnPressed();
                                    }
                                  },
                                  tab: tab.page,
                                  selectedTab:
                                      settingsController.settingTab.value,
                                ))
                            .toList())),
                    const Divider(),
                    SettingTile(
                        icon: Icons.logout,
                        label: "Logout",
                        onPress: () {},
                        selectedTab: ""),
                  ]),
                ),
              ),
            ),
            Positioned(
              top: 0.0,
              left: 0.0,
              right: 0.0,
              child: AppBar(
                leading: IconButton(
                  onPressed: _handleOnPressed,
                  icon: AnimatedIcon(
                      icon: AnimatedIcons.menu_close,
                      progress: _animationController),
                ),
                title: Text(
                  "Bus Tacker",
                  style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                      fontWeight: FontWeight.bold, color: AppColors.grey_300),
                ),
                actions: [
                  Obx(() => pageController.page.value != "home" &&
                          settingsController.openSettings.value == false
                      ? IconButton.filled(
                          onPressed: () {
                            pageController.setPage("home");
                            settingsController.settingTab("home");
                          },
                          icon: const Icon(
                            Icons.home,
                          ),
                          color: AppColors.primaryAccent,
                        )
                      : Container())
                ],
                elevation: 0,
                forceMaterialTransparency: true,
              ),
            ),
          ],
        ));
  }

  @override
  void dispose() {
    _animationController.dispose();
    settingsController.dispose();
    pageController.dispose();
    super.dispose();
  }

  void _handleOnPressed() {
    settingsController.toggleSettings();
    setState(() {
      isPlaying = !isPlaying;
      isPlaying
          ? _animationController.forward()
          : _animationController.reverse();
    });
  }
}
