import 'package:flutter/material.dart';

class AppColors {
  static final Color primary = HexColor.from("#739072");
  static final Color greyLight = HexColor.from("#f9fcff");
  static final Color white = HexColor.from("#ffffff");
  static final Color red = HexColor.from("#dc2f02");
  
}

extension HexColor on Color {
  static Color from(String hexColor) {
    hexColor = hexColor.replaceFirst("#", "");
    if (hexColor.length <= 6) {
      hexColor = "FF$hexColor";
    }

    return Color(int.parse(hexColor, radix: 16));
  }
}
