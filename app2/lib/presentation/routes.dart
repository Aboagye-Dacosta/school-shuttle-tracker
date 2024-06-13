import "package:flutter/material.dart";

class AppRoute {
  final String route;
  final Widget widget;

  AppRoute({required this.route, required this.widget});
}

Map<String, Widget Function(BuildContext)> routes(List<AppRoute> routeList) {
  Map<String, Widget Function(BuildContext)> newRoutes =
      const <String, WidgetBuilder>{};

  for (AppRoute route in routeList) {
    newRoutes = {...newRoutes, route.route: (context) => route.widget};
  }

  return newRoutes;
}
