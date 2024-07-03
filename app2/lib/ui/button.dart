import "package:app2/presentation/colors.dart";
import "package:app2/presentation/sizing.dart";
import "package:flutter/material.dart";

ButtonStyle raisedButtonStyle(
        {required double verticalPadding, required double horizontalPadding}) =>
    ElevatedButton.styleFrom(
      backgroundColor: AppColors.primary,
      padding: EdgeInsets.symmetric(
          horizontal: horizontalPadding, vertical: verticalPadding),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(AppSizing.h_8)),
      ),
    );

class Button extends StatelessWidget {
  final String label;
  final Function()? onPressed;
  final double verticalPadding;
  const Button(
      {super.key,
      required this.label,
      this.onPressed,
      this.verticalPadding = 10});

  @override
  Widget build(BuildContext context) {
    return ConstrainedBox(
      constraints: const BoxConstraints(
        minWidth: double.infinity,
      ),
      child: ElevatedButton(
        onPressed: onPressed,
        style: raisedButtonStyle(
            horizontalPadding: AppPadding.p_16,
            verticalPadding: verticalPadding),
        child: Text(
          label,
          style: TextStyle(
            color: AppColors.greyLight,
            fontSize: AppFontSizes.fs_16,
            fontWeight: FontWeight.bold,
            letterSpacing: 0.5,
          ),
        ),
      ),
    );
  }
}
