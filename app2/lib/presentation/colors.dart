import 'package:flutter/material.dart';


class AppColors {
  static final Color grey_0 = HexColor.from("#fff");
  static final Color grey_50 = HexColor.from("#f9fafb");
  static final Color grey_100 = HexColor.from(" #f3f4f6");
  static final Color grey_200 = HexColor.from("#e5e7eb");
  static final Color grey_300 = HexColor.from("#d1d5db");
  static final Color grey_400 = HexColor.from("#9ca3af");
  static final Color grey_500 = HexColor.from("#6b7280");
  static final Color grey_600 = HexColor.from("#4b5563");
  static final Color grey_700 = HexColor.from("#374151");
  static final Color grey_800 = HexColor.from("#1f2937");
  static final Color grey_900 = HexColor.from("#111827");

  static final Color primary = HexColor.from("#a4133c");
  static final Color primaryAccent = HexColor.from("#ff4d6d");
  
  static final Color greyLight = HexColor.from("#f9fcff");
  static final Color white = HexColor.from("#ffffff");
  static final Color yellow = HexColor.from("#854d0e");
  static final Color blue = HexColor.from("#3730a3");
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
