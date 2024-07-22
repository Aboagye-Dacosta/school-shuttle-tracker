import 'package:app2/controllers/page_switch_controller.dart';
import 'package:app2/pages/navigation/controller/navigation_controller.dart';
import 'package:app2/pages/navigation/model/navigation_model.dart';
import 'package:app2/presentation/colors.dart';
import 'package:app2/presentation/sizing.dart';
import 'package:app2/ui/custom_sttings_tile.dart';
import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../controllers/user_switch_controller.dart';

class Navigation extends StatefulWidget {
  const Navigation({
    super.key,
  });

  @override
  State<Navigation> createState() => _NavigationState();
}

class _NavigationState extends State<Navigation>
    with SingleTickerProviderStateMixin {
  late PageSwitchController pageController;
  late AnimationController _animationController;
  late NavigationController navigationController;
  late UsersController _usersController;

  bool isPlaying = false;

  @override
  void initState() {
    super.initState();
    pageController = Get.put(PageSwitchController());
    navigationController =
        Get.put<NavigationController>(NavigationController());
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
                        children: getNavigationTabs(_usersController.user.value)
                            .map((tab) => SettingTile(
                                  icon: tab.icon,
                                  label: tab.title,
                                  onPress: () {
                                    if (tab.hasPage) {
                                      navigationController.settingTab(tab.page);
                                      pageController.setPage(tab.page!);
                                      _handleOnPressed();
                                    }
                                  },
                                  tab: tab.page,
                                  selectedTab:
                                      navigationController.settingTab.value,
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
                          navigationController.openNavigation.value == false
                      ? IconButton.filled(
                          onPressed: () {
                            pageController.setPage("home");
                            navigationController.settingTab("home");
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
    navigationController.dispose();
    pageController.dispose();
    super.dispose();
  }

  void _handleOnPressed() {
    navigationController.toggleNavigation();
    setState(() {
      isPlaying = !isPlaying;
      isPlaying
          ? _animationController.forward()
          : _animationController.reverse();
    });
  }
}
