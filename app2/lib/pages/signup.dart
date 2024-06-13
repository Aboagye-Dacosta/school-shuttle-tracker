import 'package:app2/ui/app_logo.dart';
import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

import '../presentation/sizing.dart';
import '../ui/button.dart';
import '../ui/input.dart';

const String assetName = 'assets/images/logo.svg';
final Widget svg = SvgPicture.asset(assetName, semanticsLabel: 'app Logo');

class SignUP extends StatelessWidget {
  SignUP({super.key});

  TextEditingController controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    bool checked = false;

    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(
            vertical: AppSizing.h_32,
            horizontal: AppSizing.h_32,
          ),
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              mainAxisSize: MainAxisSize.max,
              children: [
                Text("Register",
                    style: Theme.of(context).textTheme.headlineMedium),
                const Space(),
                const AppLogo(
                  width: AppSizing.h_120,
                ),
                const Space(),
                Input(controller: controller, label: "your username"),
                const Space(),
                Input(controller: controller, label: "your email"),
                const Space(),

                Input(
                  controller: controller,
                  label: "your password",
                  hidden: true,
                ),
                const Space(),

                Button(
                  label:"Register",
                  onPressed: () => {},
                ),
                const Space(),

                const Text("Already have an account"),
                // const SizedBox(width: AppSizing.s_4),
                TextButton(
                    onPressed: () => {Navigator.of(context).pop()},
                    child: const Text("sign in"))
              ],
            ),
          ),
        ),
      ),
    );
  }
}
