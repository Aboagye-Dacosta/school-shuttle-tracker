import 'package:app2/pages/bus_details.dart';
import 'package:app2/pages/feedback_page.dart';
import 'package:app2/pages/home_page.dart';
import 'package:app2/pages/notifications_page.dart';
import 'package:app2/pages/signin.dart';
import 'package:app2/pages/signup.dart';
import 'package:app2/pages/splash_screen.dart';
import 'package:app2/pages/student/bus_listings.dart';
import 'package:app2/pages/student/route_listings.dart';
import 'package:app2/pages/student/student_home_page.dart';
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
  AppRoute(route: "/busDetail", widget: const BusDetails()),
  AppRoute(route: "/notifications", widget: const NotificationsPage()),
];

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          fontFamily: "Poppins",
          useMaterial3: true,
          colorScheme: ColorScheme.fromSeed(seedColor: AppColors.primary)),
      initialRoute: "/",
      routes: routes(routeList),
    );
  }
}
