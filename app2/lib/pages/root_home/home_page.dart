import 'package:app2/pages/drivers/drivers_home_page.dart';
import 'package:app2/pages/roo_body/main_page.dart';
import 'package:app2/pages/navigation/controller/navigation_controller.dart';
import 'package:app2/pages/navigation/navigations_page.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';


class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late DraggableScrollableController _controller;

  @override
  void initState() {
    _controller = DraggableScrollableController();
    super.initState();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GetX<NavigationController>(
        init: NavigationController(),
        builder: (navigationController) {
          return Scaffold(
            body: Stack(
              children: [
                Navigation(),
                DraggableScrollableSheet(
                  snapAnimationDuration: const Duration(seconds: 5),
                  controller: _controller,
                  snap: true,
                  initialChildSize:
                      navigationController.openNavigation.value ? 0.05 : 0.9,
                  minChildSize: 0.05,
                  maxChildSize: 0.9,
                  builder: (context, controller) => MainPage(
                    child:  DriversHomePage(),
                  ),
                ),
              ],
            ),
          );
        });
  }
}
