import 'package:app/presentation/colors.dart';
import 'package:app/ui/app_bar.dart';
import 'package:app/ui/space.dart';
import 'package:flutter/material.dart';

import '../../presentation/sizing.dart';

class Settings extends StatelessWidget {
  const Settings({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      body: Column(
        children: [
          const CustomAppBar(appTitle: "Settings"),
          const Space(),
          Expanded(
              child: SingleChildScrollView(
            child: Column(
              children: [
                SizedBox(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      ClipRRect(
                        clipBehavior: Clip.antiAlias,
                        borderRadius:
                            BorderRadius.circular(AppSizing.h_54 / 2),
                        child: Image.asset(
                          "assets/images/default-user.jpg",
                          width: AppSizing.h_54,
                          height: AppSizing.h_54,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(AppPadding.p_8),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "Username",
                              style: Theme.of(context)
                                  .textTheme
                                  .headlineSmall!
                                  .copyWith(
                                      fontWeight: FontWeight.w500,
                                      fontSize: AppSizing.h_16),
                            ),
                            Text("dacsolo10@gmail.com",
                                style:
                                    Theme.of(context).textTheme.bodySmall)
                          ],
                        ),
                      )
                    ],
                  ),
                ),
                const Space(),
                const ListTile(
                  title: Text("Account"),
                  leading: Icon(Icons.person),
                ),
                const Divider(),
                const ListTile(
                  title: Text("Feedback"),
                  leading: Icon(Icons.feedback),
                ),
                const Divider(),
                const ListTile(
                  title: Text("Rate Drivers"),
                  leading: Icon(Icons.star),
                ),
                const Divider(),
                const ListTile(
                  title: Text("Sign out"),
                  leading: Icon(Icons.logout),
                )
              ],
            ),
          ))
        ],
      ),
    );
  }
}
