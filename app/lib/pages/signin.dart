import "package:app/presentation/sizing.dart";
import "package:app/ui/app_logo.dart";
import "package:app/ui/button.dart";
import "package:app/ui/input.dart";
import "package:app/ui/space.dart";
import "package:flutter/material.dart";
import 'package:get/get.dart';

// ignore: must_be_immutable
class SignIn extends StatelessWidget {
  SignIn({super.key});
  final TextEditingController controller = TextEditingController();
  bool checked = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(
            vertical: AppSizing.h_32,
            horizontal: AppSizing.h_32,
          ),
          child: SingleChildScrollView(
            child: Column(
              children: [
                Text("Log in",
                    style: Theme.of(context).textTheme.headlineMedium),
                const Space(),
                const AppLogo(
                  width: AppSizing.h_120,
                ),
                const Space(),
                Input(controller: controller, label: "Email"),
                const Space(),

                Input(controller: controller, label: "Password"),
                const Space(),

                Row(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Checkbox(value: checked, onChanged: (value) => {}),
                    const SizedBox(width: AppSizing.h_8),
                    const Text(
                      "remember me",
                      style: TextStyle(fontSize: AppFontSizes.fs_12),
                    )
                  ],
                ),

                const Space(),

                Button(
                  label: "Sign in",
                  onPressed: () => {Get.toNamed("/root")},
                ),
                const Space(),

                TextButton(
                    onPressed: () => {},
                    child: const Text("Forgotten password",
                        style: TextStyle(fontSize: AppFontSizes.fs_12))),

                const Text("Do not have an account "),
                // const SizedBox(width: AppSizing.s_4),
                TextButton(
                    onPressed: () => {Get.toNamed("/register")},
                    child: const Text("register"))
              ],
            ),
          ),
        ),
      ),
    );
  }
}
