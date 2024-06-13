import 'package:app2/presentation/colors.dart';
import 'package:app2/presentation/sizing.dart';
import 'package:flutter/material.dart';

class MainPage extends StatelessWidget {
  final Widget child;
  const MainPage({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      clipBehavior: Clip.antiAliasWithSaveLayer,
      decoration: BoxDecoration(
        color: AppColors.white,
        borderRadius: const BorderRadius.only(
          topLeft: Radius.circular(AppSizing.h_24),
          topRight: Radius.circular(
            AppSizing.h_24,
          ),
        ),
      ),
      child: child,
    );
  }
}
