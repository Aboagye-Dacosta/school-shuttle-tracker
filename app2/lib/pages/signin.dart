import "package:app2/presentation/colors.dart";
import "package:flutter/material.dart";

import "../presentation/sizing.dart";
import "../ui/button.dart";
import "../ui/input.dart";
import "../ui/space.dart";

// ignore: must_be_immutable
class SignIn extends StatelessWidget {
  SignIn({super.key});
  final TextEditingController controller = TextEditingController();
  bool checked = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      body: SingleChildScrollView(
        child: ConstrainedBox(
          constraints:
              BoxConstraints(minHeight: MediaQuery.of(context).size.height),
          child: Container(
            padding: const EdgeInsets.only(top: 60),
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
              children: [
                const Icon(Icons.directions_bike_outlined, size: 120),
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
                  margin:
                      const EdgeInsets.only(bottom: 24, left: 24, right: 24),
                  decoration: BoxDecoration(
                      color: AppColors.white.withOpacity(0.7),
                      borderRadius: BorderRadius.circular(24)),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
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
                        onPressed: () => {
                          Navigator.of(context).pushReplacementNamed("/root")
                        },
                      ),
                      const Space(),

                      TextButton(
                          onPressed: () => {},
                          child: const Text("Forgotten password",
                              style: TextStyle(fontSize: AppFontSizes.fs_12))),

                      const Text("Do not have an account "),
                      // const SizedBox(width: AppSizing.s_4),
                      TextButton(
                          onPressed: () =>
                              {Navigator.of(context).pushNamed("/register")},
                          child: const Text("register"))
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}



// Stack(alignment: Alignment.bottomCenter, children: [
//         AppLogo(
//           width: double.infinity,
//           height: MediaQuery.of(context).size.height,
//         ),
//         Expanded(child: Container()),
//         Padding(
//           padding: const EdgeInsets.symmetric(
//             vertical: AppSizing.h_32,
//             horizontal: AppSizing.h_8,
//           ),
//           child: Container(
//             padding: const EdgeInsets.all(
//               AppSizing.h_8,
//             ),
//             decoration: BoxDecoration(
//                 borderRadius: BorderRadius.circular(AppSizing.h_16),
//                 gradient: LinearGradient(colors: [
//                   AppColors.primary.withOpacity(0.5),
//                   AppColors.primary.withOpacity(0.8)
//                 ])),
//             child: SingleChildScrollView(
//               child: Column(
//                 children: [
//                   const Space(),
//                   Input(controller: controller, label: "Email"),
//                   const Space(),
//                   Input(controller: controller, label: "Password"),
//                   const Space(),

//                   Row(
//                     mainAxisSize: MainAxisSize.max,
//                     children: [
//                       Checkbox(value: checked, onChanged: (value) => {}),
//                       const SizedBox(width: AppSizing.h_8),
//                       const Text(
//                         "remember me",
//                         style: TextStyle(fontSize: AppFontSizes.fs_12),
//                       )
//                     ],
//                   ),

//                   const Space(),

//                   Button(
//                     label: "Sign in",
//                     onPressed: () =>
//                         {Navigator.of(context).pushReplacementNamed("/root")},
//                   ),
//                   const Space(),

//                   TextButton(
//                       onPressed: () => {},
//                       child: const Text("Forgotten password",
//                           style: TextStyle(fontSize: AppFontSizes.fs_12))),

//                   const Text("Do not have an account "),
//                   // const SizedBox(width: AppSizing.s_4),
//                   TextButton(
//                       onPressed: () =>
//                           {Navigator.of(context).pushNamed("/register")},
//                       child: const Text("register"))
//                 ],
//               ),
//             ),
//           ),
//         ),
//       ]),