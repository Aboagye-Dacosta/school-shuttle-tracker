import "package:app2/presentation/colors.dart";
import "package:app2/presentation/sizing.dart";
import "package:flutter/material.dart";

ButtonStyle raisedButtonStyle({required Color color}) =>
    ElevatedButton.styleFrom(
      backgroundColor: AppColors.primary,
      padding: const EdgeInsets.all(0),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(AppSizing.h_8)),
      ),
    );

class Button extends StatelessWidget {
  final String label;
  final Function()? onPressed;
  final double verticalPadding;
  // final Color color;
  const Button({
    super.key,
    required this.label,
    this.onPressed,
    this.verticalPadding = 10,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      style: raisedButtonStyle(
        color: AppColors.primaryAccent,
      ),
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(
            vertical: AppPadding.p_16, horizontal: 24),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8),
          image: const DecorationImage(
              image: AssetImage("assets/images/background/bg-vertical.png"),
              fit: BoxFit.cover,
              opacity: 0.2),
        ),
        child: Center(
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
      ),
    );
  }
}
