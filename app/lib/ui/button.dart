import "package:app/presentation/colors.dart";
import "package:app/presentation/sizing.dart";
import "package:flutter/material.dart";

ButtonStyle raisedButtonStyle(context) => ElevatedButton.styleFrom(
      backgroundColor: AppColors.primary,
      padding: const EdgeInsets.symmetric(
          horizontal: AppPadding.p_24, vertical: AppPadding.p_16),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(20)),
      ),
    );

class Button extends StatelessWidget {
  final Widget? child;
  final Function()? onPressed;
  const Button({super.key, this.child, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.maxFinite,
      child: ElevatedButton(
        onPressed: onPressed,
        style: raisedButtonStyle(context),
        child: child,
      ),
    );
  }
}
