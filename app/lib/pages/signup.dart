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
      body: Padding(
        padding: const EdgeInsets.all(AppSizing.h_24),
        child: Column(
          children: [
            Text("Register",style: Theme.of(context).textTheme.headlineMedium),
            Expanded(child: svg),
            Expanded(
                child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Input(controller: controller, label: "your username"),
                const SizedBox(
                  height: AppSizing.h_16,
                ),
                Input(controller: controller, label: "your email"),
                const SizedBox(
                  height: AppSizing.h_16,
                ),
                Input(
                  controller: controller,
                  label: "your password",
                  hidden: true,
                ),
                const SizedBox(
                  height: AppSizing.h_16,
                ),

                
                Button(
                  child: const Text("Register"),
                  onPressed: () => {},
                ),
                const SizedBox(
                  height: AppSizing.h_16,
                ),
                const Text("Already have an account"),
                // const SizedBox(width: AppSizing.s_4),
                TextButton(onPressed: () => {}, child: const Text("register"))
              ],
            ))
          ],
        ),
      ),
    );
  }
}
