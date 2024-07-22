import 'package:flutter/material.dart';

class NavigationTab {
  final IconData icon;
  final String title;
  final String? page;
  final bool hasPage;

  NavigationTab(
      {required this.icon,
      required this.title,
      this.page,
      required this.hasPage});
}

List<NavigationTab> getNavigationTabs(String user) => user == "student"
    ? [
        NavigationTab(
            icon: Icons.home, title: "Home", hasPage: true, page: "home"),
        NavigationTab(
            icon: Icons.person,
            title: "Account",
            hasPage: true,
            page: "account"),
        NavigationTab(
            icon: Icons.feedback,
            title: "Feedback",
            hasPage: true,
            page: "feedback"),
        NavigationTab(
            icon: Icons.notifications,
            title: "Notifications",
            hasPage: true,
            page: "notification"),
        NavigationTab(
            icon: Icons.info, title: "Bus Logs", hasPage: true, page: "logs"),
        NavigationTab(
            icon: Icons.star,
            title: "Rate Drivers",
            hasPage: true,
            page: "drivers_rating"),
      ]
    : [
        NavigationTab(
            icon: Icons.home, title: "Home", hasPage: true, page: "home"),
        NavigationTab(
            icon: Icons.person,
            title: "Account",
            hasPage: true,
            page: "account"),
        NavigationTab(
            icon: Icons.feedback,
            title: "Feedback",
            hasPage: true,
            page: "feedback"),
        NavigationTab(
            icon: Icons.notifications,
            title: "Notifications",
            hasPage: true,
            page: "notification"),
        // SettingsTab(
        //     icon: Icons.info, title: "Bus Logs", hasPage: true, page: "logs"),
        // SettingsTab(
        //   icon: Icons.star,
        //   title: "Rate Drivers",
        //   hasPage: true,
        //   page: "drivers_rating",
        // ),
      ];
