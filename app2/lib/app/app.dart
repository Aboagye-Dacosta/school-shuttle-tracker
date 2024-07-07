import 'package:app2/pages/account/account_page.dart';
import 'package:app2/pages/bus_details/bus_details.dart';
import 'package:app2/pages/feedback/feedback_page.dart';
import 'package:app2/pages/notification/notifications_page.dart';
import 'package:app2/pages/root_home/home_page.dart';
import 'package:app2/pages/signin.dart';
import 'package:app2/pages/signup.dart';
import 'package:app2/pages/splash_screen.dart';
import 'package:app2/pages/student/bus_listing/bus_listings.dart';
import 'package:app2/pages/student/destinations/route_listings.dart';
import 'package:app2/pages/student/home/student_home_page.dart';
import 'package:app2/presentation/colors.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../presentation/routes.dart';

List<AppRoute> routeList = [
  AppRoute(route: "/", widget: const SplashScreen()),
  AppRoute(route: "/root", widget: const HomePage()),
  AppRoute(route: "/user", widget: StudentHomePage()),
  AppRoute(route: "/busListings", widget: const BusListings()),
  AppRoute(route: "/register", widget: SignUP()),
  AppRoute(route: "/signIn", widget: SignIn()),
  // AppRoute(route: "/home", widget: const Home()),
  AppRoute(route: "/routesListings", widget: const RouteListings()),
  AppRoute(route: "/feedback", widget: FeedbackPage()),
  AppRoute(route: "/busDetail", widget:  BusDetails()),
  AppRoute(route: "/notifications", widget: const NotificationsPage()),
  AppRoute(route: "/account", widget: AccountPage()),
];

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    final customColorScheme = ColorScheme(
      primary: AppColors.primary,
      secondary: AppColors.primaryAccent,
      surface: Colors.white,
      background: Colors.grey[100]!,
      error: Colors.red,
      onPrimary: Colors.white,
      onSecondary: Colors.black,
      onSurface: Colors.black,
      onBackground: Colors.black,
      onError: Colors.white,
      brightness: Brightness.light,
    );

    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        fontFamily: "Poppins",
        useMaterial3: true,
        colorScheme: customColorScheme,
      ),
      initialRoute: "/",
      routes: routes(routeList),
    );
  }
}
