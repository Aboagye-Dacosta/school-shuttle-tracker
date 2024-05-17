import "package:app/ui/app_logo.dart";
import "package:flutter/material.dart";

class CustomAppBar extends StatelessWidget {
  final String appTitle;
  final bool hasBackBtn;
  const CustomAppBar(
      {super.key, required this.appTitle, this.hasBackBtn = false});

  @override
  Widget build(BuildContext context) {
    return Flexible(
        child: Row(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        if (hasBackBtn)
          IconButton(
              onPressed: () => {Navigator.of(context).pop()},
              icon: const Icon(Icons.arrow_back_ios)),
        Text(appTitle, style: Theme.of(context).textTheme.bodyMedium!.copyWith(fontWeight: FontWeight.bold)),
        const AppLogo()
      ],
    ));
  }
}
