import "package:app/presentation/sizing.dart";
import "package:flutter/material.dart";

class Space extends StatelessWidget {
  final double height;
  final double width;
  const Space({super.key, this.height = AppSizing.h_32 * 0.8, this.width = 0});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: width,
      height: height,
    );
  }
}
