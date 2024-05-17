import "package:app/presentation/sizing.dart";
import "package:app/ui/button.dart";
import "package:flutter/material.dart";
import "package:flutter_svg/flutter_svg.dart";

const String assetName = 'assets/images/logo.svg';
final Widget svg = SvgPicture.asset(assetName, semanticsLabel: 'app Logo');

class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(
            vertical: AppSizing.h_32, horizontal: AppSizing.h_24),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Expanded(child: svg),
              Button(
                child: const Text("Continue"),
                onPressed: () => {},
              ),
              const SizedBox(
                height: AppSizing.h_8,
              ),
              const Text("Welcome"),
            ],
          ),
        ),
      ),
    );
  }
}
