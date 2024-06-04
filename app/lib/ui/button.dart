import "package:app/presentation/colors.dart";
import "package:app/presentation/sizing.dart";
import "package:flutter/material.dart";

ButtonStyle raisedButtonStyle(
        {required double verticalPadding, required double horizontalPadding}) =>
    ElevatedButton.styleFrom(
      backgroundColor: AppColors.primary,
      padding: EdgeInsets.symmetric(
          horizontal: horizontalPadding, vertical: verticalPadding),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(20)),
      ),
    );

class Button extends StatelessWidget {
  final String label;
  final Function()? onPressed;
  final double verticalPadding;
  const Button({super.key, required this.label, this.onPressed, this.verticalPadding = AppPadding.p_16});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.maxFinite,
      child: ElevatedButton(
        onPressed: onPressed,
        style: raisedButtonStyle(
            horizontalPadding: AppPadding.p_16,
            verticalPadding: AppPadding.p_8),
        child: Text(label,style: TextStyle(color: AppColors.greyLight),),
      ),
    );
  }
}
