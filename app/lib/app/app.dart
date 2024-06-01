import "package:app/pages/signin.dart";
import "package:app/pages/signup.dart";
import "package:app/pages/users/bus_listings.dart";
import 'package:app/pages/users/home.dart';
import 'package:app/pages/users/feedback_page.dart';
import "package:app/pages/users/root_user_home.dart";
import 'package:app/pages/users/route_listings.dart';
import "package:app/presentation/colors.dart";
import "package:app/presentation/routes.dart";
import "package:flutter/material.dart";
import "package:get/get.dart";

List<AppRoute> routeList = [
  AppRoute(route: "/", widget: const UserRootHome()),
  AppRoute(route: "/busListings", widget: const BusListings()),
  AppRoute(route: "/register", widget: SignUP()),
  AppRoute(route: "/signIn", widget: SignIn()),
  AppRoute(route: "/home", widget: const Home()),
  AppRoute(route: "/routesListings", widget: const RouteListings()),
  AppRoute(route: "/feedback", widget:  FeedbackPage()),
];

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      color: AppColors.white,
      title: "BusTracking",
      theme: ThemeData(
        fontFamily: "Poppins",
        colorScheme: ColorScheme.fromSeed(seedColor: AppColors.primary),
        useMaterial3: true,
      ),
      routes: routes(routeList),
      initialRoute: "/",
    );
  }
}
