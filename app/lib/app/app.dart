import "package:app/pages/home.dart";
import "package:app/pages/signin.dart";
import "package:app/pages/signup.dart";
import "package:app/pages/splashscreen.dart";
import "package:app/presentation/colors.dart";
import "package:app/presentation/routes.dart";
import "package:flutter/material.dart";
import "package:get/get.dart";

List<AppRoute> routeList = [
  AppRoute(route: "/", widget:  Home()),
  AppRoute(route: "/register", widget:  SignUP()),
  AppRoute(route: "/signIn", widget:  SignIn()),
  AppRoute(route: "/home", widget: const Home()),
  
];

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      color: AppColors.white,
      theme: ThemeData.from(
          colorScheme: ColorScheme.fromSeed(seedColor: AppColors.primary)),
      routes: routes(routeList),
      initialRoute: "/",
    );
  }
}
