import 'package:app2/presentation/colors.dart';
import 'package:app2/presentation/sizing.dart';
import 'package:app2/ui/app_logo.dart';
import 'package:app2/ui/button.dart';
import 'package:app2/ui/input.dart';
import 'package:app2/ui/space.dart';
import 'package:flutter/material.dart';

class AccountPage extends StatelessWidget {
  const AccountPage({super.key});

  static String pageName = "account";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: AppColors.white,
        
        
        body: Padding(
          padding: const EdgeInsets.only(top: AppPadding.p_16),
          child: Stack(
            children: [
              Container(
                width: double.infinity,
                height: MediaQuery.of(context).size.height * 0.4,
                decoration: const BoxDecoration(
                    image: DecorationImage(
                  image: AssetImage("assets/images/default-user.jpg"),
                  fit: BoxFit.contain,
                )),
              ),
              DraggableScrollableSheet(
                  snap: true,
                  initialChildSize: 0.7,
                  minChildSize: 0.7,
                  maxChildSize: 0.7,
                  builder: (context, controller) => Container(
                        clipBehavior: Clip.antiAliasWithSaveLayer,
                        decoration: const BoxDecoration(
                          borderRadius: BorderRadius.only(
                            topLeft: Radius.circular(AppSizing.h_32),
                            topRight: Radius.circular(
                              AppSizing.h_24,
                            ),
                          ),
                        ),
                        child: Card(
                            elevation: 2,
                            color: AppColors.white,
                            child: Padding(
                              padding: const EdgeInsets.all(AppPadding.p_24),
                              child: SingleChildScrollView(
                                  child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                    Button(
                                      onPressed: () {},
                                      label: "Update Image",
                                    ),
                                    const Space(),
                                    Text(
                                      "User Details",
                                      style: Theme.of(context)
                                          .textTheme
                                          .headlineSmall!
                                          .copyWith(
                                              fontSize: AppFontSizes.fs_12,
                                              fontWeight: FontWeight.bold),
                                    ),
                                    const Space(),
                                    Input(
                                      label: "Username",
                                      initialValue: "James Hosten",
                                      enabled: false,
                                      onChanged: (value) {},
                                    ),
                                    const Space(),
                                    Input(
                                      label: "Email",
                                      initialValue: "dacsolo10@gmail.com",
                                      enabled: false,
                                      onChanged: (value) {},
                                    ),
                                    const Space(),
                                    Button(
                                      onPressed: () {},
                                      label: "Update Details",
                                    ),
                                    const Space(),
                                    Text(
                                      "Password Details",
                                      style: Theme.of(context)
                                          .textTheme
                                          .headlineSmall!
                                          .copyWith(
                                              fontSize: AppFontSizes.fs_12,
                                              fontWeight: FontWeight.bold),
                                    ),
                                    const Space(),
                                    Input(
                                      label: "New Password",
                                      onChanged: (value) {},
                                    ),
                                    const Space(),
                                    Input(
                                      label: "Confirm Password",
                                      onChanged: (value) {},
                                    ),
                                    const Space(),
                                    Button(
                                      onPressed: () {},
                                      label: "Update Password",
                                    ),
                                  ])),
                            )),
                      )),
            ],
          ),
        ));
  }
}
