import "package:app/presentation/colors.dart";
import "package:app/presentation/sizing.dart";
import "package:app/ui/app_bar.dart";
import "package:flutter/material.dart";

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.white,
      body: const SafeArea(
          child: Padding(
        padding: EdgeInsets.symmetric(
          vertical: AppSizing.h_16,
          horizontal: AppSizing.h_32,
        ),
        child: Column(
          children: [
            CustomAppBar(appTitle: "BusTracking"),
            SizedBox(
              height: AppSizing.h_16,
            ),
            Expanded(
                child: SingleChildScrollView(
              child: Column(
                children: [Text("content")],
              ),
            ))
          ],
        ),
      )),
    );
  }
}

class AppBarScreen extends StatelessWidget implements PreferredSizeWidget {
  @override
  final Size preferredSize;

  const AppBarScreen({Key? key})
      : preferredSize = const Size.fromHeight(56.0),
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: AppColors.white,
      title: const Text(
        'AppBarScreen',
      ),
      leading: IconButton(
        icon: const Icon(Icons.arrow_back_ios),
        onPressed: () => Navigator.of(context).pop(),
      ),
      automaticallyImplyLeading: true,
    );
  }
}
