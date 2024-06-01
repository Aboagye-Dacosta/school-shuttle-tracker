import 'package:app/pages/users/bus_listings.dart';
import 'package:app/pages/users/home.dart';
import 'package:app/pages/users/settings.dart';
import 'package:flutter/material.dart';

import '../../presentation/colors.dart';
import '../../presentation/sizing.dart';

class UserRootHome extends StatefulWidget {
  const UserRootHome({super.key});

  @override
  State<UserRootHome> createState() => _UserRootHomeState();
}

List<Widget> pageList = [
  const Home(),
  const BusListings(),
  const Settings(),
];

class _UserRootHomeState extends State<UserRootHome> {
  int currentIndex = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(
            vertical: AppSizing.h_16,
            horizontal: AppSizing.h_32,
          ),
          child: pageList[currentIndex],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: currentIndex,
        onTap: (index) => {setState(() => currentIndex = index)},
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
          BottomNavigationBarItem(icon: Icon(Icons.bus_alert), label: "Buses"),
          BottomNavigationBarItem(
              icon: Icon(Icons.settings), label: "Settings"),
        ],
      ),
    );
  }
}
