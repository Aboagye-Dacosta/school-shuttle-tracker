import 'package:app2/presentation/sizing.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

const String assetName = 'assets/images/logo.svg';

class AppLogo extends StatelessWidget {
  final double width;
  final double height;
  const AppLogo({super.key, this.width = AppSizing.h_32,  this.height = double.maxFinite});

  @override
  Widget build(BuildContext context) {
    return SvgPicture.asset(
      assetName,
      semanticsLabel: 'app Logo',
      width: width,
    );
  }
}
