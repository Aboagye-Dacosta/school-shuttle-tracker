import "package:app/presentation/sizing.dart";
import "package:app/ui/button.dart";
import "package:app/ui/input.dart";
import "package:flutter/material.dart";
import "package:flutter_svg/flutter_svg.dart";

const String assetName = 'assets/images/logo.svg';
final Widget svg = SvgPicture.asset(assetName, semanticsLabel: 'app Logo');

// ignore: must_be_immutable
class SignIn extends StatelessWidget {
  SignIn({super.key});
  final TextEditingController controller = TextEditingController();
  bool checked = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(AppSizing.h_24),
        child: Column(
          children: [
            Expanded(child: svg),
            Expanded(
                child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Input(controller: controller, label: "your name"),
                const SizedBox(
                  height: AppSizing.h_16,
                ),
                Input(controller: controller, label: "your name"),
                const SizedBox(
                  height: AppSizing.h_16,
                ),
                Row(
                  children: [
                    Flexible(
                      child: Row(
                        mainAxisSize: MainAxisSize.max,
                        children: [
                          Checkbox(value: checked, onChanged: (value) => {}),
                          const SizedBox(width: AppSizing.h_8),
                          const Text("remember me")
                        ],
                      ),
                    ),
                    TextButton(
                        onPressed: () => {},
                        child: const Text("Forgotten password",
                            style: TextStyle(fontSize: AppFontSizes.fs_12)))
                  ],
                ),
                const SizedBox(
                  height: AppSizing.h_16,
                ),
                Button(
                  child: const Text("Sign in"),
                  onPressed: () => {},
                ),
                const SizedBox(
                  height: AppSizing.h_16,
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Text("Does not have an account "),
                    // const SizedBox(width: AppSizing.s_4),
                    TextButton(
                        onPressed: () => {}, child: const Text("register"))
                  ],
                )
              ],
            ))
          ],
        ),
      ),
    );
  }
}
