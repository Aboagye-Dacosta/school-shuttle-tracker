import "package:app2/presentation/sizing.dart";
import "package:app2/ui/button.dart";
import "package:app2/ui/space.dart";
import "package:flutter/material.dart";
import "package:flutter_svg/flutter_svg.dart";

const String assetName = 'assets/images/logo.svg';
final Widget svg = SvgPicture.asset(assetName, semanticsLabel: 'app Logo');

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  final int delays = 5;

  @override
  void initState() {
    Future.delayed(Duration(seconds: delays), () async {
      Navigator.of(context).pushReplacementNamed("/signIn");
    });

    super.initState();
  }

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
              const Text("Welcome"),
              const Space(),
              Button(
                label: "Continue",
                onPressed: () => {},
              ),
            ],
          ),
        ),
      ),
    );
  }
}
