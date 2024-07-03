import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

import '../presentation/colors.dart';
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
      body: SingleChildScrollView(
        child: Container(
          height: MediaQuery.of(context).size.height,
          padding: const EdgeInsets.symmetric(vertical: 60),
          width: double.infinity,
          decoration: const BoxDecoration(
            image: DecorationImage(
              image: AssetImage(
                "assets/images/background/bg-vertical-right.png",
              ),
              fit: BoxFit.cover,
            ),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            mainAxisSize: MainAxisSize.max,
            children: [
              const Icon(
                Icons.app_registration,
                size: 120,
              ),
              const Space(
                height: 16,
              ),
              Text("Hello there!",
                  style: Theme.of(context)
                      .textTheme
                      .headlineSmall!
                      .copyWith(fontWeight: FontWeight.bold, fontSize: 32)),
              Text("Doing good,let's sign you right in.",
                  style: Theme.of(context).textTheme.headlineSmall!.copyWith(
                      fontWeight: FontWeight.normal,
                      fontSize: 16,
                      color: AppColors.grey_900)),
              const Space(
                height: 34,
              ),
              Container(
                padding: const EdgeInsets.all(24),
                margin: const EdgeInsets.only(bottom: 24, left: 24, right: 24),
                decoration: BoxDecoration(
                    color: AppColors.white.withOpacity(0.7),
                    borderRadius: BorderRadius.circular(24)),
                child: Column(
                  children: [
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
                      label: "Register",
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
              )
            ],
          ),
        ),
      ),
    );
  }
}
