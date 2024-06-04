import 'package:app/pages/drivers/driver_root.dart';
import 'package:app/pages/users/root_user_home.dart';
import 'package:flutter/material.dart';

class MainHome extends StatelessWidget {
  const MainHome({super.key});

  final role = "user";

  @override
  Widget build(BuildContext context) {
    return role == "user" ? const UserRootHome() : const DriverRoot();
  }
}
