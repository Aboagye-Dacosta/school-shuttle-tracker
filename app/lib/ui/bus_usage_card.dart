import "package:flutter/material.dart";

import "../presentation/colors.dart";
import "../presentation/sizing.dart";

class BusUsageCard extends StatelessWidget {
  const BusUsageCard({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      color: AppColors.greyLight,
      child: Padding(
        padding: const EdgeInsets.symmetric(
            horizontal: AppPadding.p_16, vertical: AppPadding.p_8),
        child: Stack(
          clipBehavior: Clip.none,
          alignment: Alignment.center,
          children: [
            Positioned(
              left: 0,
              top: -25,
              child: Container(
                  padding: const EdgeInsets.symmetric(
                      vertical: AppPadding.p_8, horizontal: AppPadding.p_16),
                  decoration: BoxDecoration(
                    color: AppColors.primary,
                    borderRadius: BorderRadius.circular(AppSizing.h_32),
                  ),
                  child: Text(
                    "K0893-Gh",
                    style: Theme.of(context).textTheme.bodySmall!.copyWith(
                        fontWeight: FontWeight.bold,
                        fontSize: AppFontSizes.fs_16,
                        color: AppColors.white),
                  )),
            ),
            const Padding(
              padding: EdgeInsets.symmetric(vertical: 8.0),
              child: SizedBox(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [Text("Konte - Katanga"), Text("11 - 05 - 24")],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
