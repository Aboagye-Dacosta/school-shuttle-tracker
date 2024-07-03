import 'package:flutter/material.dart';

class SettingsTab {
  final IconData icon;
  final String title;
  final String? page;
  final bool hasPage;

  SettingsTab(
      {required this.icon,
      required this.title,
      this.page,
      required this.hasPage});
}

List<SettingsTab> getSettingsTabs(String user) => user == "student"
    ? [
        SettingsTab(
            icon: Icons.home, title: "Home", hasPage: true, page: "home"),
        SettingsTab(
            icon: Icons.person,
            title: "Account",
            hasPage: true,
            page: "account"),
        SettingsTab(
            icon: Icons.feedback,
            title: "Feedback",
            hasPage: true,
            page: "feedback"),
        SettingsTab(
            icon: Icons.notifications,
            title: "Notifications",
            hasPage: true,
            page: "notification"),
        SettingsTab(
            icon: Icons.info, title: "Bus Logs", hasPage: true, page: "logs"),
        SettingsTab(
            icon: Icons.star,
            title: "Rate Drivers",
            hasPage: true,
            page: "drivers_rating"),
      ]
    : [
        SettingsTab(
            icon: Icons.home, title: "Home", hasPage: true, page: "home"),
        SettingsTab(
            icon: Icons.person,
            title: "Account",
            hasPage: true,
            page: "account"),
        SettingsTab(
            icon: Icons.feedback,
            title: "Feedback",
            hasPage: true,
            page: "feedback"),
        SettingsTab(
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
